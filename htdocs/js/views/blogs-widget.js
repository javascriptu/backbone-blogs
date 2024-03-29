define([
  'jquery',
  'underscore',
  'backbone',
  'collections/blogs',
  'views/blog'
], function ($, _, Backbone, Blogs, BlogView) {

  var BlogModule = Backbone.View.extend({

    tagName : 'div',

    className : 'blog-widget',

    initialize : function () {
      _.bindAll(this, 'add', 'restore', 'render');

      //Bind Collection Events
      Blogs.on('add', this.add);
      Blogs.on('reset', this.restore);
      Blogs.on('refresh', this.restore);

      //Get Persistent Blogs from Store
      Blogs.fetch();
    },

    add : function (blog) {
      var view = new BlogView({model : blog}),
        viewEl = view.render().el;

      this.$el.prepend(viewEl);
      $(viewEl).fadeIn();
    },

    //Restore All The Blogs From Persistent Store
    restore    : function () {
      Blogs.each(this.add);
    },

    close : function() {
      this.remove();
      $(this.el).unbind();
    }

  });
  return BlogModule;
});
