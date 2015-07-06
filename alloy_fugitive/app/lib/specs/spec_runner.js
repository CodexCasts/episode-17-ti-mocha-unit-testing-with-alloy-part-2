
// mocha
require('specs/ti-mocha');
// should
var should = require('specs/should');

// q library for promises
Q = require("specs/q");
mocha.setup({reporter: 'ti-spec-studio'});

// specs
var require_path = 'specs/tests/';
var specs_dir = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory + require_path);
var spec_files = specs_dir.getDirectoryListing();
for (var i=0; i<spec_files.length; i++) {
	require(require_path + spec_files[i].replace('.js', ''));
}

// run
Ti.API.info("\n\n==============================\nRunning logic tests\n==============================\n\n");
mocha.run(function(){
	Ti.API.info("\n\n==============================\nCompleted logic tests\n==============================\n\n\n ");
	//Ti.App.fireEvent("logic_tests_complete");
	var ti_exit = require("com.sttts.exit");
	ti_exit.exit(1);
	// uninstall the app from the device or simulator/emulator
	   //???
});
