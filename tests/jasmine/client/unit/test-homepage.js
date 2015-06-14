describe('Homepage', function() {
  beforeEach(function(done) {
    Router.go('/');
    Tracker.afterFlush(done);
  });

  beforeEach(waitForRouter);

  it('should display the welcome message', function() {
    expect($('.fresh').html()).toEqual('Enjoy your fresh start.');
  });
});
