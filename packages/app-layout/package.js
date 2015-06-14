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

  //Add bootstrap related files
  api.addFiles([
    'vendor/bootstrap/fonts/glyphicons-halflings-regular.eot',
    'vendor/bootstrap/fonts/glyphicons-halflings-regular.svg',
    'vendor/bootstrap/fonts/glyphicons-halflings-regular.ttf',
    'vendor/bootstrap/fonts/glyphicons-halflings-regular.woff',
    'vendor/bootstrap/fonts/glyphicons-halflings-regular.woff2'
  ]);
  api.addFiles('vendor/bootstrap/js/bootstrap.min.js', 'client');
  api.addFiles('theme.bootstrap.less', 'client');
  
  //Add your views here!
  var views = [
    'layout',
    'navigation'
  ];
  views.forEach(function(view) {
    api.addFiles('views/' + view + '.html', 'client');
  });
});
