//normally I am super against these because ti calabash makes this pointless, but I'll do this one as a demonstration
// also I feel like it blocks should have a platform flag.


describe('Fugitive Window', function() {

	if(OS_IOS){
		it("Should have a tab icon on iOS ", function() {
			$ = Alloy.createController('index', {});

			//not actually needed, hence why I commented out.
			//	$.tabGroup.open();

			 //console.log(JSON.stringify($.__views.tabGroup.tabs[0].icon));
			// to access a view directly we need to access __views object first since our views are nested inside.
			// we are using a match statement because if we inspect this object
			// we will find an absolute path that is not predictable due to containerization on iOS

	        $.__views.tabGroup.tabs[0].icon.should.match(/fugitives.png/);
			$.__views.tabGroup.tabs[1].icon.should.match(/captured.png/);
		});
	}

	if(OS_ANDROID){
		it("Should have an actionBar ", function() {

			// this is left as an exercise to the viewer :-D

		});
	}


});
