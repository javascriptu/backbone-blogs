({
  appDir  : "htdocs/", //The main app dir
  baseUrl : "modules/", //The Module dir
  dir     : "htdocs-build", //The Post Build Dir

  paths : {
    jquery       : 'vendor/jquery/jquery-1.7.2',
    backbone     : 'vendor/backbone/backbone-0.9.2-amd',
    underscore   : 'vendor/underscore/underscore-1.3.2',
    text         : 'vendor/require/text-1.0.8',
    localstorage : "vendor/backbone/localstorage",
    moment       : "vendor/moment/moment-1.6.1"
  },

  locale   : "en-us", //Used to inline i18n resources into the built file.
  optimize : "uglify",
  uglify   : {
    toplevel   : false, //mangle names in the toplevel scope too
    ascii_only : true, //encode non-ASCII characters as \uXXXX sequences
    beautify   : false //output indented code
  },

  skipPragmas             : false, //Skip processing for pragmas.
  optimizeCss             : "standard", //@import inlining, comment removal and line returns.
  useStrict               : false, //not all browsers can process and give errors on code for ES5 strict mode
  inlineText              : true, //Inlines the text for any text! dependencies,
  preserveLicenseComments : true,
  logLevel                : 0

})
