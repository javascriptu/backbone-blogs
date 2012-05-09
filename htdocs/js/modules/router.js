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
          layout.showView('#mainInner',create);
          layout.showView('#blogs',blogsWidget, 'widget');
        });
    },

    single : function (id) {
      require(['views/blog', 'collections/blogs'],
        function (BlogView, BlogCollection) {
          var model = BlogCollection.get(id);
          if (model) {
            layout.showView('#mainInner',new BlogView({type : "single", model : model }));
          } else {
            //Hacky Workaround to Fix LocalStorage Sync Issue With ID - Will Fix ASAP
            _.each(BlogCollection.models, function(model) {
              if (model.id === id) {
                layout.showView('#mainInner',new BlogView({type : "single", model : model }));
                return;
              }
            });
          }
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
