describe('Login Test', () => {
  it('TC_LOGIN_001 - User berhasil login', () => {

    //Baca email dan password dari fixtures userData
    cy.fixture('userData').then((user) => {
      const email = user.email
      const password = user.password
     cy.visit('https://automationexercise.com')
     cy.get('.shop-menu > .nav > :nth-child(4)').click()
     cy.get('[data-qa="login-email"]').type(email)
     cy.get('[data-qa="login-password"]').type(password)
     cy.get('[data-qa="login-button"]').click()
    })
    })
  })