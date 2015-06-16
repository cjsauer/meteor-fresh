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

  api.use('iron:router', both);
  
  //Add your views here!
  var views = [
    'layout',
    'navigation'
  ];
  views.forEach(function(view) {
    api.addFiles('views/' + view + '.html', 'client');
  });
});
