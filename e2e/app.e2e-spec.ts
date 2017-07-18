import { AngularIssuesLogPage } from './app.po';

describe('angular-issues-log App', () => {
  let page: AngularIssuesLogPage;

  beforeEach(() => {
    page = new AngularIssuesLogPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
