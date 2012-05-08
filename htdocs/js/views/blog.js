define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/blog.html',
  'moment'
], function ($, _, Backbone,  blogTemplate,moment) {
  var BlogView = Backbone.View.extend({

    tagName : "div",

    className : "span3", //Using Twitter Bootstrap Classes

    template : _.template(blogTemplate),

    single : false, //Is it a single blog view

    events : {
      "click span.blog-remove" : "clear",
      "click .item .blog-title" : "singleView"
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
      var model = this.model.toJSON();
      if (this.single)  {
        //If Single View Remove Grid Class
        this.el.className = 'single';
        //Long Format Date
        model.created = moment(model.created).format('dddd, MMMM Do YYYY, h:mm:ss a');
      } else {
        //From Now Date
        model.created = moment(model.created).fromNow();
      }
      $(this.el).html(this.template(model));
      return this;
    },

    clear : function (e) {
      e.preventDefault();
      this.model.clear();
    },

    close : function() {
      this.remove();
      $(this.el).unbind();
    }

  });
  return BlogView;
});
