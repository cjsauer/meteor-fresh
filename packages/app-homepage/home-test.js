Tinytest.add('Homepage renders the welcome message', function(test) {
  var dom = $(renderToDiv(Template.home));
  test.equal(dom.find('.fresh').text(), 'Enjoy your fresh start.');
});
