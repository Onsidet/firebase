import { FirebaseRealtimePage } from './app.po';

describe('firebase-realtime App', () => {
  let page: FirebaseRealtimePage;

  beforeEach(() => {
    page = new FirebaseRealtimePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
