({
  appDir : "htdocs/",
  baseUrl: "modules/",
  dir    : "htdocs-build",

  paths : {
    jquery       : 'vendor/jquery/jquery-1.7.2',
    backbone     : 'vendor/backbone/backbone-0.9.2-amd',
    underscore   : 'vendor/underscore/underscore-1.3.2',
    text         : 'vendor/require/text-1.0.8',
    localstorage : "vendor/backbone/localstorage",
    moment       : "vendor/moment/moment-1.6.1"
  },

  locale : "en-us",

  optimize    : "uglify",

  uglify      : {
    toplevel   : false,
    ascii_only : true,
    beautify   : false
  },

  optimizeCss : "standard",

  inlineText  : true,

  useStrict                  : false,

  skipPragmas                : false,

  optimizeAllPluginResources : false,

  findNestedDependencies     : false,

  logLevel : 0,
  preserveLicenseComments : true
})
