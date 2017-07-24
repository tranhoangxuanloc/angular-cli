import { ProjectAPage } from './app.po';

describe('project-a App', () => {
  let page: ProjectAPage;

  beforeEach(() => {
    page = new ProjectAPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
