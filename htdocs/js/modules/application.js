/*jshint latedef:false */
/*global define:true */

define([
  "underscore",
  "backbone",
  "router/router"
], function (_, Backbone, Router) {

  function initialize() {
    //Force Hash
    if (document.location.hash === "") document.location.hash = "#!/";
    var router = new Router();
    Backbone.history.start();

  }

  return {
    initialize : initialize
  };
});