Cypress.Commands.add('Login', (email = Cypress.env('username'), password = Cypress.env('password')) => {
  // Klik tombol "Masuk"
  cy.get('#sign-in-btn').should('be.visible').click();

  // Mengisi email dengan pemastian nilai terisi penuh
  cy.get('#_phone')
    .should('be.visible')
    .then(($input) => {
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        'value'
      ).set;
      nativeInputValueSetter.call($input[0], email);
      $input[0].dispatchEvent(new Event('input', { bubbles: true }));
      $input[0].dispatchEvent(new Event('change', { bubbles: true }));
    });

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