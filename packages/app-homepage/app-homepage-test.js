Tinytest.add('Home template', function(test) {
  var dom = $(Blaze.toHTML(Template.home));
  test.equal(dom.find('.fresh').text(), 'Enjoy your fresh start.');
});
