import mount from './mount';

class Dummy extends HTMLElement {
  constructor() {
    super();
    this.innerText = this.getAttribute('content') || '';
  }
}

it('works', () => {
  cy.mount(`<app-dummy content="Hello world!"></dummy>`, 'app-dummy', Dummy)
  .then(() => {
    expect(true).eq(true);
  })
});
