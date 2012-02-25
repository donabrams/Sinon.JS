/**
 * Sinon core utilities. For internal use only.
 *
 * @author Christian Johansen (christian@cjohansen.no)
 * @license BSD
 *
 * Copyright (c) 2010-2011 Christian Johansen
 */
"use strict";
if (module && require){
	module.exports = require("./sinon/sinon-core");
   module.exports.spy = require("./sinon/spy");
   module.exports.stub = require("./sinon/stub");
   module.exports.mock = require("./sinon/mock");
   module.exports.collection = require("./sinon/collection");
   module.exports.assert = require("./sinon/assert");
   module.exports.sandbox = require("./sinon/sandbox");
   module.exports.test = require("./sinon/test");
   module.exports.testCase = require("./sinon/test_case");
   try {
		var util = require("util");
     sinon.format = function (value) {
     	return typeof value == "object" ? util.inspect(value) : value;
     };
	} catch (e) {
	  /* Node, but no util module - would be very old, but better safe than
	  	sorry */
	}
} else if (define) {
	define(["sinon/sinon-core", 
			"sinon/assert",
			"sinon/collection",
			"sinon/mock",
			"sinon/sandbox",
			"sinon/spy",
			"sinon/stub",
			"sinon/test",
			"sinon/testCase"], function(sinon) {
		return sinon;		
	});
}