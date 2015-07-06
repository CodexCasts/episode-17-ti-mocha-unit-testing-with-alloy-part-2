Alloy.Globals.Map = require('ti.map');
Alloy.Globals.tabGroup = $.tabGroup;

function doClick(e) {
    alert($.label.text);
}

Ti.API.info('seeded: ' + Ti.App.Properties.hasProperty('seeded'));
//determine if the database needs to be seeded
if (!Ti.App.Properties.hasProperty('seeded')) {

    // add all items to collection
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
    Alloy.Globals.tabGroup

    Ti.App.Properties.setString('seeded', 'yuppers');
	Alloy.Collections.Fugitive.fetch();

    $.tabGroup.open();

} else {
	Alloy.Collections.Fugitive.fetch();

  $.tabGroup.open();

}

// force tables to update
