describe('Login Test', () => {
    beforeEach(()=>{
        cy.visit('https://automationexercise.com')
        cy.get('.shop-menu > .nav > :nth-child(4)').click()
    })
  it('TC_LOGIN_001 - User berhasil login menggunakan email dan password yang valid', () => {
    //script untuk get email dan password dari fixtures userData
    cy.fixture('userData').then((user) => {
      const {email,password} = user

     // Input form login
     cy.get('[data-qa="login-email"]').type(email)
     cy.get('[data-qa="login-password"]').type(password)
     cy.get('[data-qa="login-button"]').click()
    })
    })

    it('TC_LOGIN_002 - User gagal login menggunakan invalid password', () => {
    cy.fixture('userData').then((user) => {
        cy.get('[data-qa="login-email"]').type(user.email)
        cy.get('[data-qa="login-password"]').type('salah password')
        cy.get('[data-qa="login-button"]').click()
        cy.contains('Your email or password is incorrect!').should('be.visible')
        })
        })

     it('TC_LOGIN_003 - User gagal login menggunakan email yang tidak terdaftar', () => {
        cy.get('[data-qa="login-email"]').type('unregistered email')
        cy.get('[data-qa="login-password"]').type('password123')

        //untuk pengecekan email valid atau tidak
        cy.get('[data-qa="login-email"]').then(($input)=> {
        expect($input[0].validationMessage).to.include("@")
        })
         })

        it('TC_LOGIN_004 - Logout User', () => {
        cy.fixture('userData').then((user) => {
      const {email,password} = user
        cy.get('[data-qa="login-email"]').type(email)
        cy.get('[data-qa="login-password"]').type(password)
        cy.get('[data-qa="login-button"]').click()
        cy.contains('Logged in as').should('be.visible')
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.url().should('include','/login')
      })
    })
    })
   

  
