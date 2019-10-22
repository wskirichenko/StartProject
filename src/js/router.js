(() => {
  const routes = {},
    defaultRoute = 'home';

  routes['home'] = {
    url: '#/home',
    templateUrl: '../pages/SI.html'
  };

  routes['team'] = {
    url: '#/team',
    templateUrl: '../pages/team.html'
  };


  routes['contact'] = {
    url: '#/contact',
    templateUrl: '../pages/contact.html'
  };


  $.router
    .setData(routes)
    .setDefault(defaultRoute);

  $.when($.ready)
    .then(() => {
      $.router.run('.builder-content', 'home', 'contact', 'team');
      // $.router.run('.tab-content','tab_2');
    })
})();
