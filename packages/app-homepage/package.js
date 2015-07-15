Package.describe({
  name: 'app:homepage',
  summary: 'The homepage for the app',
});

Package.onUse(function(api) {

  api.versionsFrom('1.1.0.2');

  var both = ['client', 'server'];

  api.use([
    'less',
    'templating',
    'spacebars'
  ], 'client');

  // We're using the layout defined in app:layout
  api.use('app:layout');

  // Configure our routes
  api.use('iron:router@1.0.9', both);
  api.addFiles('lib/routes.js', both);

  // Our homepage template and styling
  api.addFiles('home.less', 'client');
  api.addFiles('home.html', 'client');
});
