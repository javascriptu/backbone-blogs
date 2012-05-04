define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/blog.html'
], function ($, _, Backbone, blogTemplate) {
  var BlogView = Backbone.View.extend({

    tagName : "div",

    className : "span3", //Using Twitter Bootstrap Classes

    template : _.template(blogTemplate),

    events : {
      "click span.blog-remove" : "clear"
    },

    initialize : function () {
      _.bindAll(this, 'render', 'remove');
      this.model.bind('change', this.render);
      this.model.bind('destroy', this.remove);
    },

    render : function () {
      $(this.el).html(this.template(this.model.toJSON()));
      return this;
    },

    clear : function () {
      this.model.clear();
    }

  });
  return BlogView;
});
