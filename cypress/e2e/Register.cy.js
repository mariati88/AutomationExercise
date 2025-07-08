import { generateRandomEmail } from "../support/utils"

describe('TC_REG-001 - Registrasi akun baru', () => {
  it('User berhasil register', () => {
     const email = generateRandomEmail()
    cy.visit('https://automationexercise.com')
    
    //klik menu sign up/login
   cy.get('.shop-menu > .nav > :nth-child(4)').click()
   
   //Isi nama dan email
   cy.get('[data-qa="signup-name"]').type('maria')
   cy.get('[data-qa="signup-email"]').type(email)
   cy.get('[data-qa="signup-button"]').click()

  // isi form detail
 cy.get('#id_gender2').click()
 cy.get('[data-qa="password"]').type('password123')
 cy.get('[data-qa="days"]').select('1')
 cy.get('[data-qa="months"]').select('January')
 cy.get('[data-qa="years"]').select('2021')
 cy.get('[data-qa="first_name"]').type('Maria')
 cy.get('[data-qa="last_name"]').type('Test')
 cy.get('[data-qa="company"]').type('Google')
 cy.get('[data-qa="address"]').type('Jl. Automation')
 cy.get('[data-qa="country"]').select('United States')
 cy.get('[data-qa="state"]').type('test1')
 cy.get('[data-qa="city"]').type('test2')
 cy.get('[data-qa="zipcode"]').type('24245')
 cy.get('[data-qa="mobile_number"]').type('62909780918')
 cy.get('[data-qa="create-account"]').click()
 cy.get('b').should('contain','Account Created!')

//Simpan email ke file 
cy.writeFile('cypress/fixtures/userData.json', { 
    email: email,
    password: 'password123'
})
})
  })
 