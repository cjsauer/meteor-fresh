Package.describe({
  name: 'app:bootstrap',
  summary: 'A local, customizable copy of the bootstrap css framework'
});

Package.onUse(function(api) {
  api.addFiles('vendor/bootstrap/js/bootstrap.min.js', 'client');
  api.addFiles('theme.bootstrap.less', 'client');
});
