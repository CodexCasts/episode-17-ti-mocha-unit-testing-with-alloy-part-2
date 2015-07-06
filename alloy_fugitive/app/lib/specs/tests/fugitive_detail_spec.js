// Honestly, I'd do this with Ti Calabash instead.

// I wanted to show an example of a stub here, but backbone has some strangeness to it
// I will do a later episode where I get into Mocks, Stubs, Fixtures, and Factories

beforeEach(function(){
	//liberated & modified from https://gist.github.com/aaronksaunders/5066608
	//CLEAN THAT DATABASE

   var cleardb = "DELETE FROM fugitives" ;
   db = Ti.Database.open("_alloy_");
   db.execute(cleardb);
   db.close();
	// end liberation



	Alloy.Collections.Fugitive.reset([{
		"name" : "Codex Labs",
		"captured" : 1,
		"url" : "/no/image.png",
		"capturedLat" : "35.8962940",
		"capturedLong" : "-86.866539086"
	}]);

	// save all of the elements
	Alloy.Collections.Fugitive.each(function(_m) {
		_m.save();
	});
	Alloy.Collections.Fugitive.fetch();


});

describe('Fugitive Detail Controller', function(){
  it('Should be able to see a fugitive detail page with filled in info', function(){

    //since we only have one model (aka column in SQLite) we can get away with this
    $ = Alloy.createController('FugitiveDetail',{data: Alloy.Collections.Fugitive}).getView();

      // if you are confused by what $ returned un comment the next line.
			//console.log("FugitiveDetail window object " +JSON.stringify($));

			// remember we did not open this up in a tab, so the object hierarchy is going to be a single object.
      $.id.should.match("detailWindow");
      $.title.should.match('Fugitive Detail Page');
  });
});

afterEach(function () {
	//liberated & modified from https://gist.github.com/aaronksaunders/5066608
	//CLEAN THAT DATABASE

   var cleardb = "DELETE FROM fugitives" ;
   db = Ti.Database.open("_alloy_");
   db.execute(cleardb);
   db.close();
	// end liberation

	// I am probably cargo culting here.
	//I should confirm this.
	Alloy.Collections.Fugitive.fetch();
});
