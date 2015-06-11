Package.describe({
  name: 'app:layout',
  summary: 'The main html and styling of the site'
});

Package.onUse(function(api) {

  var both = ['client', 'server'];

  api.use([
    'templating',
    'spacebars',
    'jquery',
    'less'
  ], 'client');

  api.use('iron:router', both);
  
  //Add your views here!
  var views = [
    'layout',
    'navigation',
    'home'
  ];

  api.addFiles('vendor/bootstrap/js/bootstrap.min.js', 'client');
  api.addFiles('theme.bootstrap.less', 'client');
  views.forEach(function(view) {
    api.addFiles('views/' + view + '.html', 'client');
  });
});
