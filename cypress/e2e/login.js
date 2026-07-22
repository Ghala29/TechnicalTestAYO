Cypress.Commands.add('Login', (email = Cypress.env('username'), password = Cypress.env('password')) => {
  // Klik tombol "Masuk"
  cy.get('#sign-in-btn').should('be.visible').click();

  // Mengisi email
  cy.get('#_phone')
    .should('be.visible')
    .clear()
    .type(email, { delay: 50, parseSpecialCharSequences: false });

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