Package.describe({
  name: 'app:routes',
  summary: 'Configures and sets up the routes for the application',
});

Package.onUse(function(api) {
  var both = ['client', 'server'];

  api.use('iron:router', both);

  api.addFiles('lib/config.js', both);
});
