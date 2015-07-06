beforeEach(function(){
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

describe('Fugitive Model', function() {
  it('#insert - should let us insert a model into the database', function(){
    var criminal = Alloy.createModel("Fugitive", {
			       name : "Codex Labs",
			       captured : false
			   })
			Alloy.Collections.Fugitive.fetch();

				//console.log(JSON.stringify(criminal));
			criminal.get('name').should.equal('Codex Labs');
      //criminal.name.should.equal('Codex Labs');
  });

  it('#read fugitive list',function(){
    Alloy.Collections.Fugitive.reset([{
		        "name" : "Jeff Haynie"
		    }, {
		        "name" : "Nolan Wright"
		    }, {
		        "name" : "Don Thorp"
		    }, {
		        "name" : "Marshall Culpepper"
		    }, {
		        "name" : "Blain Hamon"
		    }]);

		    // save all of the elements
		    Alloy.Collections.Fugitive.each(function(_m) {
		        _m.save();
		    });

		// coming from the ruby world, multiple asserts makes me cringe badly.
		// However, it is for a good cause -- documentation.
		// Please limit the number of asserts per it block. Ideally to one object.
		// if you have a single object with multiple properties, then I supose
		// but only if it makes sense from a user story stand point.

		// Remember this is a backbone object
		Alloy.Collections.Fugitive.at(0).get('name').should.equal('Jeff Haynie');
		Alloy.Collections.Fugitive.at(1).get('name').should.equal('Nolan Wright');
		Alloy.Collections.Fugitive.at(2).get('name').should.equal('Don Thorp');
		Alloy.Collections.Fugitive.at(3).get('name').should.equal('Marshall Culpepper');
		Alloy.Collections.Fugitive.at(4).get('name').should.equal('Blain Hamon');
  });
  it('#destroy fugitive in collection',function(){
    // this should be refactored into a before block
			Alloy.Collections.Fugitive.reset([{
		        "name" : "Jeff Haynie"
		    }, {
		        "name" : "Nolan Wright"
		    }, {
		        "name" : "Don Thorp"
		    }, {
		        "name" : "Marshall Culpepper"
		    }, {
		        "name" : "Blain Hamon"
		    }]);

		    // save all of the elements
		    Alloy.Collections.Fugitive.each(function(_m) {
		        _m.save();
		    });
		Alloy.Collections.Fugitive.at(4).destroy();
		Alloy.Collections.Fugitive.fetch();

		// collections are strange. The at syntax is 0 index but the length is 1 indexed.
		//seriously check this out
		//console.log(JSON.stringify(Alloy.Collections.Fugitive));
		// if you uncomment out the above line you will see Blain Hamon does not exist.

		Alloy.Collections.Fugitive.should.have.length(4);
  });

  it('#capture fugitive in collection',function(){
    // this really should be done inside a promise

    		Alloy.Collections.Fugitive.reset([{
		        "name" : "Jeff Haynie"
		    }, {
		        "name" : "Nolan Wright"
		    }, {
		        "name" : "Don Thorp"
		    }, {
		        "name" : "Marshall Culpepper"
		    }, {
		        "name" : "Blain Hamon"
		    }]);

		    // save all of the elements
		    Alloy.Collections.Fugitive.each(function(_m) {
		        _m.save();
		    });

			//	console.log(JSON.stringify(Alloy.Collections.Fugitive.at(4)));
			var crim = Alloy.Collections.Fugitive.at(4);
			crim.set({captured:1}).save()
			//	console.log(JSON.stringify(Alloy.Collections.Fugitive.at(4)));
			Alloy.Collections.Fugitive.at(4).get('captured').should.equal(1);
  });

  it('#update fugitive with image',function(){
    // this really should be done inside a promise

  Alloy.Collections.Fugitive.reset([{
      "name" : "Jeff Haynie"
  }, {
      "name" : "Nolan Wright"
  }, {
      "name" : "Don Thorp"
  }, {
      "name" : "Marshall Culpepper"
  }, {
      "name" : "Blain Hamon"
  }]);

  // save all of the elements
  Alloy.Collections.Fugitive.each(function(_m) {
      _m.save();
  });

//	console.log(JSON.stringify(Alloy.Collections.Fugitive.at(3)));
var crim = Alloy.Collections.Fugitive.at(3);
crim.set({url:'/a/fake/image.png'}).save()
	//console.log(JSON.stringify(Alloy.Collections.Fugitive.at(3)));
Alloy.Collections.Fugitive.at(3).get('url').should.equal('/a/fake/image.png');
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
