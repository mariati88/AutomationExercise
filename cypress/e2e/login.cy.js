describe('Login Test', () => {
    beforeEach(()=>{
        cy.visit('https://automationexercise.com')
        cy.get('.shop-menu > .nav > :nth-child(4)').click()
    })
  it('TC_LOGIN_001 - User berhasil login menggunakan email dan password yang valid', () => {
    //Baca email dan password dari fixtures userData
    cy.fixture('userData').then((user) => {
      const {email,password} = user

     // Input form login
     cy.get('[data-qa="login-email"]').type(email)
     cy.get('[data-qa="login-password"]').type(password)
     cy.get('[data-qa="login-button"]').click()
    })

    it('TC_LOGIN_002 - User gagal login menggunakan invalid password', () => {
    cy.fixture('userData').then((user) => {
        cy.get('[data-qa="login-email"]').type(user.email)
        cy.get('[data-qa="login-password"]').type('salah password')
        cy.get('[data-layer="Padding"]').click()
        cy.contains('Your email or password is incorrect!').should('be.visible')
        })

     it('TC_LOGIN_003 - User gagal login menggunakan email yang tidak terdaftar', () => {
        cy.get('[data-qa="login-email"]').type('unregistered email')
        cy.get('[data-qa="login-password"]').type('password123')
        cy.get('[data-layer="Padding"]').click()
        cy.contains('Your email or password is incorrect!').should('be.visible')
        })
    })
    })
  })

  
