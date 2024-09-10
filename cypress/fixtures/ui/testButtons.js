import clickButtons from "../pageObjects/clickButtons";
import "@testing-library/cypress/add-commands";

//the describe below includes my tests during the buttons functionality!

describe("Automation test to check buttons functionality", () => {
  beforeEach("Navigate to page", () => {
    cy.visit(`http://127.0.0.1:5500/sc-qa-challenge/index.html`);
  });
  it("Click for JS Alert", () => {
    cy.findByRole("button", { name: "Click for JS Alert" }).should(
      "be.visible"
    );
    clickButtons.clickOnAlertButton();
    cy.get("#result").should("contain", "You successfully clicked an alert");
  });
  it("Click for JS Confirm", () => {
    cy.findByRole("button", { name: "Click for JS Confirm" }).should(
      "be.visible"
    );
    clickButtons.clickOnConfirmButton();
    cy.get("#result").should("contain", "You clicked: Ok");
  });
  //
  it("Click for JS Prompt", () => {
    cy.findByRole("button", { name: "Click for JS Prompt" }).should(
      "be.visible"
    );
    clickButtons.clickOnPromptButton();

    // clickOnPromptButtonWord("Hello");
  });
});
