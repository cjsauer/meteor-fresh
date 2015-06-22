Package.describe({
  name: 'app:layout',
  summary: 'The main html and styling of the site'
});

Package.onUse(function(api) {

  var both = ['client', 'server'];

  api.use([
    'templating',
    'spacebars',
    'less'
  ], 'client');

  // Make sure bootstrap and themes are loaded before us
  api.use('app:bootstrap', 'client');

  // We configure the router to use this package's layout view as the layout
  api.use('iron:router', both);
  api.addFiles('lib/routes.js', both);
  
  //Add your views here!
  var views = [
    'layout',
    'navigation'
  ];
  views.forEach(function(view) {
    api.addFiles('views/' + view + '.html', 'client');
  });
});
