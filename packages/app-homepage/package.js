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
    'blaze',
    'app:homepage',
    'tinytest@1.0.0'
  ], 'client');
  api.addFiles('app-homepage-test.js', 'client');
});
