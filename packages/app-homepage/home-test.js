Tinytest.add('Home template', function(test) {
  var dom = $(renderToDiv(Template.home));
  test.equal(dom.find('.fresh').text(), 'Enjoy your fresh start.');
});
