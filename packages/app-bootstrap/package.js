Package.describe({
  name: 'app:bootstrap',
  summary: 'A local, customizable copy of the bootstrap css framework'
});

Package.onUse(function(api) {

  api.versionsFrom('1.1.0.2');

  api.use([
    'jquery',
    'less'
  ], 'client');
  
  // Bootstrap files
  api.addFiles([
    'vendor/bootstrap/fonts/glyphicons-halflings-regular.eot',
    'vendor/bootstrap/fonts/glyphicons-halflings-regular.svg',
    'vendor/bootstrap/fonts/glyphicons-halflings-regular.ttf',
    'vendor/bootstrap/fonts/glyphicons-halflings-regular.woff',
    'vendor/bootstrap/fonts/glyphicons-halflings-regular.woff2'
  ], 'client');
  api.addFiles('vendor/bootstrap/js/bootstrap.min.js', 'client');

  // This is the custom theme file.
  //  You can use it to customize bootstrap variables.
  api.addFiles('theme.bootstrap.less', 'client');
});
