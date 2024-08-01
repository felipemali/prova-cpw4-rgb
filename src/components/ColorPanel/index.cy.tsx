import CounterPanel from ".";

describe("<ColorPanel />", () => {
  it("should receives the correct RGBA values", () => {
    const colors = {
      red: 120,
      green: 200,
      blue: 150,
      alpha: 0.5,
    };

    cy.mount(
      <CounterPanel
        red={colors.red}
        green={colors.green}
        blue={colors.blue}
        alpha={colors.alpha}
      />
    );
    cy.get('[data-cy="color-panel"]').should(
      "have.css",
      "background-color",
      `rgba(${colors.red}, ${colors.green}, ${colors.blue}, ${colors.alpha})`
    );
  });

  it("should receives values 0,0,0,0", () => {
    const colors2 = {
      red: 0,
      green: 0,
      blue: 0,
      alpha: 0,
    };

    cy.mount(
      <CounterPanel
        red={colors2.red}
        green={colors2.green}
        blue={colors2.blue}
        alpha={colors2.alpha}
      />
    );

    cy.get('[data-cy="color-panel"]').should(
      "have.css",
      "background-color",
      `rgba(${colors2.red}, ${colors2.green}, ${colors2.blue}, ${colors2.alpha})`
    );
  });
});
