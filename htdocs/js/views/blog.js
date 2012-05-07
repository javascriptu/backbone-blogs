define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/blog.html'
], function ($, _, Backbone,  blogTemplate) {
  var BlogView = Backbone.View.extend({

    tagName : "div",

    className : "span3", //Using Twitter Bootstrap Classes

    template : _.template(blogTemplate),

    single : false, //Is it a single blog view

    events : {
      "click span.blog-remove" : "clear",
      "click #blog-list .blog-title" : "singleView"
    },

    initialize : function (options) {
      if (options.type === 'single') this.single = true;

      _.bindAll(this, 'render', 'remove');
      this.model.bind('change', this.render);
      this.model.bind('destroy', this.remove);
    },

    singleView : function(e) {
      Backbone.history.navigate("!/blog/" + this.model.attributes.id,{trigger: true});
    },

    render : function () {
      //If Single View Remove Grid Class
      if (this.single) this.el.className = 'single';

      $(this.el).html(this.template(this.model.toJSON()));
      return this;
    },

    clear : function (e) {
      e.preventDefault();
      this.model.clear();
    },

    close : function() {
      this.remove();
      this.model.unbind("change", this.render);
    }

  });
  return BlogView;
});
