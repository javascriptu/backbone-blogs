/*jshint latedef:false */
/*global define:true */

define([
  "underscore",
  "backbone"
], function (_, Backbone) {

  function showView(selector,view, type) {
    type = type || 'main';
    this.current = this.current || [];
    //Call Cleanup Methods on Views
    if (this.current && this.current[type] && this.current[type].close()) this.current[type].close();
    this.current[type] = view;
    $(selector).html(this.current[type].render().el);
  }

  return {
    showView : showView
  };
});
