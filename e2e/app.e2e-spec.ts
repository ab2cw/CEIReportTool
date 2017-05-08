import { TableauReportToolPage } from './app.po';

describe('tableau-report-tool App', () => {
  let page: TableauReportToolPage;

  beforeEach(() => {
    page = new TableauReportToolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
