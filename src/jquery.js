define([
	"./core",
	"./selector",
	"./callbacks",
	"./deferred",
	"./core/ready",
	"./traversing",
	"./data",
	"./queue",
	"./queue/delay",
	"./attributes",
	"./event",
	"./event/alias",
	"./manipulation",
	"./manipulation/_evalUrl",
	"./wrap",
	"./css",
	"./css/hidden-visible-selectors",
	"./serialize",
	"./ajax",
	"./ajax/xhr",
	"./ajax/script",
	"./ajax/jsonp",
	"./ajax/load",
	"./effects",
	"./effects/animated-selector",
	"./offset",
	"./dimensions",
	"./support",
	"./deprecated"
], function( jQuery ) {

// Expose jQuery and $ identifiers, even in
// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
return (window.jQuery = window.$ = jQuery);

});
