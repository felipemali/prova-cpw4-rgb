describe("ColorPanel e2e test", () => {
  beforeEach(() => {
    cy.visit("");
  });

  it("should adjust color panel based on inputs", () => {
    const colors = {
      red: 100,
      green: 150,
      blue: 200,
      alpha: 0.6,
    };

    cy.get("[data-cy=input-0]").type(colors.red.toString()).trigger("change");
    cy.wait(500);
    cy.get("[data-cy=input-1]").type(colors.green.toString()).trigger("change");
    cy.wait(500);
    cy.get("[data-cy=input-2]").type(colors.blue.toString()).trigger("change");
    cy.wait(500);
    cy.get("[data-cy=input-3]").type(colors.alpha.toString()).trigger("change");
    cy.wait(500);

    cy.get("[data-cy=color-panel]").should(
      "have.css",
      "background-color",
      `rgba(${colors.red}, ${colors.green}, ${colors.blue}, ${colors.alpha})`
    );
  });
});
