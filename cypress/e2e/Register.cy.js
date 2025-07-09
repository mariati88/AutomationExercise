import { generateRandomEmail } from "../support/utils"

describe('Registrasi akun baru', () => {
    beforeEach(()=>{
        cy.visit('https://automationexercise.com')
        cy.get('.shop-menu > .nav > :nth-child(4)').click()
    })
  it('TC_REG_001 - Success register new account ', () => {
     const email = generateRandomEmail()

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
it('TC_REG_002 - Failed register new account using invalid email ', () => {
    cy.get('[data-qa="signup-name"]').type('maria')
    cy.get('[data-qa="signup-email"]').type('test')
    cy.get('[data-qa="signup-button"]').click() 
    //cek apakah email dianggap tidak valid oleh browser
    cy.get('[data-qa="signup-email"]').should(($input) => {
    expect($input[0].checkValidity()).to.be.false
})
})
  })
  })