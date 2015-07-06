// liberated from https://github.com/appersonlabs/ticonf2014testappdemo/blob/master/testapp/Development/default_test.js
// slightly modified.

var fakeModule = {
    active: true,
    age: 21,
	name:"John Smith"
};


describe('ti-mocha Vanilla', function(){
  describe('Testing Values', function(){

    it('user should be active', function(){
      fakeModule.active.should.equal(true);
    });
    it('user should be 21', function(){
       fakeModule.age.should.equal(21);
       });

    it('user should be named John Smith', function(){
        fakeModule.name.should.equal("John Smith");
    });

  });

});
