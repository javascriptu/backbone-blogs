define([
  'jquery',
  'underscore',
  'backbone',
  'collections/blogs',
  'views/blog',
  "moment"
], function ($, _, Backbone, Blogs, BlogView ,moment) {

  var BlogModule = Backbone.View.extend({

    el : $("#appContainer"),

    initialize : function (options) {
      _.bindAll(this, 'add', 'restore', 'render');

      //Bind Collection Events
      Blogs.bind('add', this.add);
      Blogs.bind('reset', this.restore);

      //Get Persistent Blogs from Store
      Blogs.fetch();
    },

    add : function (blog) {
      var view = new BlogView({model : blog}),
        viewEl = view.render().el;
      this.$("#blog-list").prepend(viewEl);
      $(viewEl).fadeIn();
    },

    //Restore All The Blogs From Persistent Store
    restore    : function () {
      this.$("#blog-list").empty();
      Blogs.each(this.add);
    }

  });
  return BlogModule;
});
