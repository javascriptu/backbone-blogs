/*jshint latedef:false */
/*global define:true */

define([
  "underscore",
  "backbone"
], function (_, Backbone) {

  function showMainView(view) {
    //Call Cleanup Methods on Views
    if (this.current && this.current.close()) this.current.close();
    this.current = view;
    $('#mainInner').html(this.current.render().el);
  }

  return {
    showMainView : showMainView
  };
});
