define([
  'jquery',
  'underscore',
  'backbone',
  'collections/blogs',
  'views/blog',
  "moment"
], function ($, _, Backbone, Blogs, BlogView,moment) {
  var AppView = Backbone.View.extend({

    el : $("#appContainer"),

    events : {
      "submit .blog-form" : "createBlog"
    },

    initialize : function () {
      _.bindAll(this, 'add', 'restore', 'render');

      //Bind Collection Events
      Blogs.bind('add', this.add);
      Blogs.bind('reset', this.restore);

      //Get Persistent Blogs from Store
      Blogs.fetch();
    },

    add : function (blog) {
      var view = new BlogView({model : blog}),
        viewEl = $(view.render().el),
        timestampDiv =  viewEl.find(".blog-timestamp"),
        timestamp = timestampDiv.text();

      timestampDiv.text(moment(timestamp).fromNow());
      this.$("#blog-list").prepend(viewEl);
      setTimeout(function() {
        viewEl.fadeIn();
      }, 100);
    },

    //Restore All The Blogs in Persistent Store
    restore    : function () {
      Blogs.each(this.add);
    },

    getBlogData : function () {
      return {
        title   : this.$("#new-blog-title").val(),
        content : this.$("#new-blog-content").val(),
        created : Math.round(new Date().getTime())
      };
    },

    createBlog : function (e) {
      e.preventDefault();
      if (Blogs.create(this.getBlogData())) {
        this.clearInputs();
      } else {
        this.handleError();
      }
    },

    handleError : function() {
      // @todo Error Creating Blog
      console.log("error");
    },

    clearInputs : function () {
      this.$("#new-blog-title").val('');
      this.$("#new-blog-content").val('');
    }

  });
  return AppView;
});
