define([
  'jquery',
  'underscore',
  'backbone',
  'collections/blogs',
  'text!templates/create.html'
], function ($, _, Backbone, Blogs, createTemplate) {

  var CreateView = Backbone.View.extend({

    template : _.template(createTemplate),

    events : {
      "submit .blog-form" : "createBlog"
    },

    initialize : function() {
      _.bindAll(this, 'render','close');
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
      //Calling the create function passes the data
      // to the models validation method
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
    },

    render : function() {
      $(this.el).html(this.template());
      return this;
    },

    //Still playing with this...
    close : function() {
      this.remove();
      this.unbind();
   }

  });
  return CreateView;
});
