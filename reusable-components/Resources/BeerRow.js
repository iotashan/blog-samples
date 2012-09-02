/**
 * @author Shannon Hicks
 */

// detect screen density once because Ti.Platform.displayCaps calls are expensive
var retina = Ti.Platform.displayCaps.density == 'high';

var BeerRow = function(beer) {
	// create the Row UI
	var row = Titanium.UI.createTableViewRow({
		className:'beerRow',
		height:70,
		data:beer
	});

	var beerImage = Titanium.UI.createImageView({
		top:5,
		left:5,
		width:60,
		height:60,
		image:retina ? beer.image2x : beer.image,
		hires:retina,
	});
	row.add(beerImage);
	
	var beerName = Titanium.UI.createLabel({
		color:'#C36466',
		font:{fontSize:14,fontWeight:'bold', fontFamily:'Arial'},
		left:75,
		right:30,
		height:Ti.UI.SIZE,
		text:beer.name
	});
	row.add(beerName);
	
	// setters & getters
	row.pushBeer = function(_beer){
		// save the variable
		beer = _beer;
		
		// update views
		beerImage.image = retina ? beer.image2x : beer.image;
		beerName.text = beer.name;
	}
	
	row.pullBeer = function() {
		// return the variable
		return beer;
	}
	
	return row;
}

module.exports = BeerRow;