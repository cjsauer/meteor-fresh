Package.describe({
  name: 'app:homepage',
  summary: 'The homepage for the app',
});

Package.onUse(function(api) {

  var both = ['client', 'server'];

  api.use([
    'less',
    'templating',
    'spacebars'
  ], 'client');

  //Make sure the layout is loaded before us
  api.use('app:layout');

  // Configure our routes
  api.use('iron:router', both);
  api.addFiles('lib/routes.js', both);

  // Our homepage template and styling
  api.addFiles('home.less', 'client');
  api.addFiles('home.html', 'client');
});
