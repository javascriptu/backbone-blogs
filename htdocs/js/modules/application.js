/*jshint latedef:false */
/*global define:true */

define([
  "underscore",
  "backbone",
  "views/app"
], function (_, Backbone, AppView) {

  function initialize() {
    var app = new AppView();

    if (Backbone.history) {
      Backbone.history.start();
    }
  }

  return {
    initialize : initialize
  };
});
