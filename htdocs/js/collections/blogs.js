/*jshint latedef:false */
/*global define:true */

define([
  'underscore',
  'backbone',
  'localstorage',
  'models/blog'
  ], function(_, Backbone, Store, Blog){

	var BlogsCollection = Backbone.Collection.extend({

    model: Blog,

    localStorage: new Store("Blogs"),

    //compare on created timestamp
    comparator: function(blog) {
      return blog.get('created');
    }

  });
  var blogs = new BlogsCollection();
  blogs.fetch();
  return blogs;
});
