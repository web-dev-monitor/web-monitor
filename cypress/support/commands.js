import { getContainerEl, setupHooks } from "@cypress/mount-utils";

Cypress.Commands.add('mount', (template, tag, component) => {
    customElements.define(tag, component);

  // get the root element to mount the component
  const root = getContainerEl();
  root.innerHTML = template;

  // adds output to the command log
  return cy.wait(0, { log: false }).then(() => {
    Cypress.log({
      name: 'mount',
      message: 'Mounted component',
    });
  });
});