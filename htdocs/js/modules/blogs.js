/*jshint latedef:false */
/*global define:true */

//Blogs Module Listing all Blogs In Persistent Storage

define([
  "underscore",
  "backbone",
  "router/router"
], function (_, Backbone, Router) {

  function initialize() {
    //Force HashBang
    if (document.location.hash === "") document.location.hash = "#!/";
    var router = new Router();
    Backbone.history.start();
  }

  return {
    initialize : initialize
  };
});
