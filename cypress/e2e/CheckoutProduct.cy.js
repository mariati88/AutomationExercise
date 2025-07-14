describe('checkout product', () => {
  beforeEach(() => {
    cy.login() // memanggil reusable login dari commands.js 
  })
  it('TC_Chekout_001 - Select and checkout product', () => {
  cy.get('[href="/product_details/1"]').click()
  cy.get('#quantity')
    .clear()
    .wait(500) //agar dapat value nya diproses
    .type('3')
    .blur()
    .should('have.value','3')
  cy.contains('Add to cart').click()
  cy.contains('View Cart').click()
  cy.contains('Proceed To Checkout').click()
  cy.contains('Place Order').click()
  cy.get('[data-qa="name-on-card"]').type('card123')
  cy.get('[data-qa="card-number"]').type('1234' )
  cy.get('[data-qa="cvc"]').type('228' )
  cy.get('[data-qa="expiry-month"]').type('10')
  cy.get('[data-qa="expiry-year"]').type('2026')
  cy.get('[data-qa="pay-button"]').click()
  cy.contains('Order Placed!').should('be.visible')   
  })

  it('TC_Chekout_002 - empty form payment', () => {
  cy.get('[href="/product_details/1"]').click()
  cy.contains('Add to cart').click()
  cy.contains('View Cart').click()
  cy.contains('Proceed To Checkout').click()
  cy.contains('Place Order').click()
  cy.get('[data-qa="name-on-card"]').should(($input) => {
  expect($input[0].checkValidity()).to.be.false
   })
   })
   })

  describe('checkout product - guest user', () => {
  it('TC_Chekout_003 - Checkout Product without login', () => {
  cy.visit('https://automationexercise.com')
  cy.contains('Products').click()
  cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()
  cy.contains('Add to cart').click()
  cy.get('u').click()
  cy.contains('Proceed To Checkout').click()
  cy.get('.modal-content').should('be.visible')
  })
   })
  

 