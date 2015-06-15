Package.describe({
  name: 'app:homepage',
  summary: 'The homepage for the app',
});

Package.onUse(function(api) {

  api.use([
    'less',
    'templating'
  ], 'client');

  api.addFiles('home.less', 'client');
  api.addFiles('home.html', 'client');
});

Package.onTest(function(api) {
  api.use([
    'jquery',
    'app:homepage',
    'tinytest@1.0.0',
    'test-helpers'
  ], 'client');
  api.addFiles('home-test.js', 'client');
});
