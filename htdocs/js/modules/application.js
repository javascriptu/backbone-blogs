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

    //Instantiate Router
    var router = new Router();

    //Start Monitoring Hashchange events and Dispatching Routes.
    Backbone.history.start();
  }

  return {
    initialize : initialize
  };
});
