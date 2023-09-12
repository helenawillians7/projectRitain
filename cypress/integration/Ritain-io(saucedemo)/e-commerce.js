/// <reference types="cypress" />

describe('Project-Ritain_e-commerce_Swag Labs', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('Login sem Sucesso (login malsucedido)', () => {
    const user = 'helena'
    const pass = 'silveira'
    cy.get('[id=user-name]').type(`${user}`)
    cy.get('[id=password]').type(`${pass}{enter}`)
    cy.get('[data-test=error]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
  })

  it('Login com Sucesso (login bem-sucedido)', () => {
    const user = 'standard_user'
    const pass = 'secret_sauce'
    cy.get('[id=user-name]').type(`${user}`)
    cy.get('[id=password]').type(`${pass}{enter}`)
    cy.get('[class=title]').should('have.text', 'Products')
  })

  it('Adicionando itens no carrinho e finalizando a compra', () => {
    const user = 'standard_user'
    const pass = 'secret_sauce'
    const firstName = 'Helena'
    const lastName = 'Silveira'
    const postalCode = '38422314'

    cy.get('[id=user-name]').type(`${user}`)
    cy.get('[id=password]').type(`${pass}{enter}`)
    cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click()
    cy.get('[data-test=add-to-cart-sauce-labs-bike-light]').click()
    cy.get('[class=shopping_cart_link]').click()
    cy.get('[class=shopping_cart_link]').click()
    cy.get('[id=checkout]').click()
    cy.get('[data-test=firstName]').type(`${firstName}`)
    cy.get('[data-test=lastName]').type(`${lastName}`)
    cy.get('[data-test=postalCode]').type(`${postalCode}`)
    cy.get('[data-test=continue]').click()
    cy.get('[class=title]').should('have.text', 'Checkout: Overview')
    cy.get('[data-test=finish]').click()
    cy.get('[class=complete-header]').should('have.text', 'Thank you for your order!')
    cy.wait(21000)
  })
})