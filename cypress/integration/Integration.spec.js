context("E2E", () => {
  it("should access the page", () => {
    cy.visit("http://localhost:3000");
    cy.viewport(1400, 900);
  });

  it("Tries to add CEP", () => {
    cy.intercept("get", "/", {
      statusCode: 200,
    });

    cy.get("input").type(81050450);
    cy.get("button").click();

    cy.contains("Buscar pelo CEP").click();
  });
});
