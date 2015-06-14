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
