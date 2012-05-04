define([
  'underscore',
  'backbone'
], function (_, Backbone) {
  var BlogModel = Backbone.Model.extend({

    //Model Defaults
    defaults : {
      title   : '',
      content : ''
    },

    //Validate the Current Model
    validate : function() {
      var title = this.attributes.title,
        content = this.attributes.content;
      if (title.length < 1 && content.length < 1) {
        return "title-content";
      } else if (title.length < 1) {
        return "title";
      } else if (content.length < 1) {
        return "content";
      }
    },

    //Destroy The Current Model
    clear : function () {
      this.destroy();
    }

  });
  return BlogModel;
});
