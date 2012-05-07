define([
  'jquery',
  'underscore',
  'backbone',
  'modules/layout'
], function ($, _, Backbone, layout) {

  var Router = Backbone.Router.extend({

    routes : {
      "!/"         : "main",
      "!/blog/:id" : "single",
      '*path'      : 'defaultRoute'
    },

    main : function () {
      require(['views/app', 'views/create'],
        function (AppView, CreateView) {
          var app = new AppView();
          var create = new CreateView();
          layout.showMainView(create);
        });
    },

    single : function (id) {
      require(['views/blog', 'collections/blogs'],
        function (BlogView, BlogCollection) {
          var blog = new BlogView({type : "single", model : BlogCollection.get(id)});
          layout.showMainView(blog);
        });
    },

    defaultRoute : function (path) {
      console.log('bad path: ' + path);
      //Redirect To Main View
      document.location.hash('!/');
    }

  });

  return Router;
});
