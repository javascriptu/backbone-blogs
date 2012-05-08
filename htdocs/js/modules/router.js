/*jshint latedef:false */
/*global define:true */

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
      require(['views/blogs-widget', 'views/create'],
        function (BlogsWidget, CreateView) {
          var blogsWidget = new BlogsWidget();
          var create = new CreateView();
          layout.showMainView(create);
        });
    },

    single : function (id) {
      require(['views/blog', 'collections/blogs'],
        function (BlogView, BlogCollection) {
          var options = {type : "single", model : BlogCollection.get(id)},
            blog = new BlogView(options);
          layout.showMainView(blog);
        });
    },

    defaultRoute : function (path) {
      console.log('bad path: ' + path);
      //Redirect To Main View
      document.location.hash = '!/';
    }
  });
  return Router;
});
