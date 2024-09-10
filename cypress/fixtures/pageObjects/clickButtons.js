//I'm using the POM to find all the elements in ui, and make all the actions in one folder!
class ClickButtons {
  constructor() {
    this.elements = {
      alertButton: () =>
        cy.findByRole("button", { name: "Click for JS Alert" }),
      confirmButton: () =>
        cy.findByRole("button", { name: "Click for JS Confirm" }),
      promptButton: () =>
        cy.findByRole("button", { name: "Click for JS Prompt" }),
    };
  }
  clickOnAlertButton() {
    this.elements.alertButton().click();
    return this;
  }
  clickOnConfirmButton() {
    this.elements.confirmButton().click();
    return this;
  }
  clickOnPromptButton() {
    this.elements.promptButton().click();
    return this;
  }

  clickOnPromptButtonWord(word) {
    cy.findByRole("generic", { name: word }).click();
    return this;
  }
}

module.exports = new ClickButtons();
