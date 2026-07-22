import 'cypress-xpath';
import './login';

Cypress.on('uncaught:exception', (err) => {
  return false;
});

beforeEach(() => {
  cy.visit('https://ayo.co.id/');
  cy.Login();

  // Cek apakah tombol cart tersedia & bersihkan cart jika ada isi
  cy.get('body').then(($body) => {
    if ($body.find('a.nav-link.venue-cart-view-btn').length > 0) {
      cy.get('a.nav-link.venue-cart-view-btn span').invoke('text').then((text) => {
        const count = Number(text.trim()) || 0;
        cy.log('Cart count: ' + count);
        if (count > 0) {
          cy.get('a.nav-link.venue-cart-view-btn').click();
          cy.get('.col-auto.p-0.delete-cart-item-container').should('be.visible').click();
        } else {
          cy.log('Cart kosong');
        }
      });
    }
  });
});

describe("Verifikasi Harga Booking sesuai dengan jadwal yang dipilih", () => {
  it("Booking berhasil dibuat dengan harga yang benar.", () => {
    // 1. Masuk ke halaman venues
    cy.xpath("//a[@id='nav-venue']//div[1]").click();
    cy.url().should('include', '/venues');

    // 2. Pilih Venue
    cy.xpath("(//div[@class='position-relative']//img)[1]").should('be.visible').click();

    // 3. Sembunyikan fixed header agar tidak menutupi tombol
    cy.get('header.fixed-top').invoke('css', 'display', 'none');

    // 4. Pilih Tanggal & Jam
    cy.get('#field-full-calendar-btn').click();
    cy.xpath('(//div[@day="21"])[2]').should('exist').should('be.visible').click();
    cy.contains('Jadwal Tersedia').should('be.visible');

    cy.xpath("(//div[@venue-id='1861'])[1]")
      .should('be.visible')
      .should('not.have.class', 'field-slot-item-disabled')
      .click();

    // Berhasil Menambahkan Jadwal
    cy.contains('Berhasil menambahkan jadwal.').should('be.visible');

    // 5. Ambil Harga Booking Pertama
    cy.get('.p-0.s14-400.cart-item-price')
      .should('be.visible')
      .invoke('text')
      .then((price) => {
        const bookingPrice = Number(price.replace(/\D/g, ''));
        cy.log('1. Booking Price: ' + bookingPrice);
        cy.wrap(bookingPrice).as('bookingPrice');
      });

    // 6. Klik Selanjutnya
    cy.get('#btn-view-add-on-list').should('be.visible').click();
    cy.url().should('include', 'checkout/available-products');

    // 7. Verifikasi Total Payment pada halaman Total Payment
    cy.xpath('//input[@aria-label="Total payment"]')
      .should('be.visible')
      .invoke('val')
      .then((totalPayment) => {
        const totalPaymentValue = Number(String(totalPayment).replace(/\D/g, '')) || 0;
        cy.log('2. Total Payment: ' + totalPaymentValue);
        cy.wrap(totalPaymentValue).as('totalPaymentValue');

        // COMPARE 1: Compare Booking Price vs Total Payment
        cy.get('@bookingPrice').then((bookingPrice) => {
          expect(totalPaymentValue).to.equal(bookingPrice);
        });
      });

    // 8. Klik Lewati menuju Review Order
    cy.contains('button', 'Lewati').click();
    cy.url().should('include', 'review-order');

    // 9. COMPARE 2: Verifikasi Total Bayar di Review Order vs Total Payment sebelumnya
    cy.get('#cost-breakdown-total-amount')
      .scrollIntoView()
      .should('be.visible')
      .invoke('text')
      .then((totalBayar) => {
        const totalBayarValue = Number(String(totalBayar).replace(/\D/g, '')) || 0;
        cy.log('3. Total Bayar Final: ' + totalBayarValue);

        cy.get('@totalPaymentValue').then((totalPaymentValue) => {
          expect(totalBayarValue).to.equal(totalPaymentValue);
        });
      });
  });
});