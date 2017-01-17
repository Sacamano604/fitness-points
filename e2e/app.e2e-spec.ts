import { FitnessPointsPage } from './app.po';

describe('fitness-points App', function() {
  let page: FitnessPointsPage;

  beforeEach(() => {
    page = new FitnessPointsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
