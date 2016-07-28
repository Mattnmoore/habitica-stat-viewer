import { HabiticaStatsPage } from './app.po';

describe('habitica-stats App', function() {
  let page: HabiticaStatsPage;

  beforeEach(() => {
    page = new HabiticaStatsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
