Cypress.Commands.add('Login', (email = 'ghalasudana24@gmail.com', password = Cypress.env('password')) => {
  // Klik tombol "Masuk"
  cy.get('#sign-in-btn').should('be.visible').click();

  // Mengisi email
  cy.get('#_phone')
    .should('be.visible')
    .clear()
    .invoke('val', email)
    .trigger('input')
    .trigger('change');

  // Klik tombol "Lanjutkan" 
  cy.get('#btn-check-credential')
    .should('not.be.disabled')
    .click();

  // Isi password
  cy.get('#password')
    .should('be.visible')
    .type(password, { log: false });
  // Klik Masuk
  cy.get('#btn-sign-in').click();
});