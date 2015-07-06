// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};
// Loads the map module, which can be referenced by Alloy.Globals.Map
Alloy.Globals.Map = require('ti.map');

///////////////////////////////////////////////////////////////////////////////
//
// Unit tests
//
///////////////////////////////////////////////////////////////////////////////

/**
 * Unit test runner
 */
if (!ENV_PRODUCTION) {

	// if tests are enabled in config, execute test runner
	if (Alloy.CFG.run_logic_tests) {
		require('specs/spec_runner');
	}
}