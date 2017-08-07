import { Session8Assignment1Page } from './app.po';

describe('session8-assignment1 App', () => {
  let page: Session8Assignment1Page;

  beforeEach(() => {
    page = new Session8Assignment1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
