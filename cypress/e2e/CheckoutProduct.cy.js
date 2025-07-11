describe('checkout product', () => {
  beforeEach(() => {
    cy.login() // memanggil reusable login dari commands.js 
  })
  it('TC_Chekout_001 - Select and checkout product', () => {
  cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
  cy.get('[href="/product_details/1"]').click()
  cy.get('#quantity').clear().type('3')
  cy.wait(500) //agar value nya diproses
  cy.contains('Add to cart').click()
  cy.contains('View Cart').click()
  cy.contains('Proceed To Checkout').click()
  cy.contains('Place Order').click()
  cy.get('[data-qa="name-on-card"]').type('Maria')
  cy.get('[data-qa="card-number"]').type('1234' )
  cy.get('[data-qa="cvc"]').type('228' )
  cy.get('[data-qa="expiry-month"]').type('10')
  cy.get('[data-qa="expiry-year"]').type('2026')
  cy.get('[data-qa="pay-button"]').click()
  cy.contains('Order Placed!').should('be.visible')              
  })
  })