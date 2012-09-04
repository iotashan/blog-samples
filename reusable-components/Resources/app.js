// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

//
// include our reusable component
//
var BeerRow = require('BeerRow');

//
// create root window
//
var win = Titanium.UI.createWindow({  
    title:'My Table',
    backgroundColor:'#fff',
});

//
// stub some data
//
var beers = [
	{
		name:'Samuel Adams Utopias',
		image:'http://beerimages.pintley.com/4078/samadamsutopias_mobileThumb.png',
		image2x:'http://beerimages.pintley.com/4078/samadamsutopias_web.png',
	},
	{
		name:'Samuel Adams Black & Brew Coffee Stout',
		image:'http://beerimages.pintley.com/21939/ee22c5f5%2D357d%2D404a%2D84fe%2Dffbeb85bd737_mobileThumb.png',
		image2x:'http://beerimages.pintley.com/21939/ee22c5f5%2D357d%2D404a%2D84fe%2Dffbeb85bd737_web.png',
	},
	{
		name:'Samuel Adams The Vixen',
		image:'http://beerimages.pintley.com/21354/Vixen%5FBottle_mobileThumb.png',
		image2x:'http://beerimages.pintley.com/21354/Vixen%5FBottle_web.png',
	},
	{
		name:'Samuel Adams Norse Legend',
		image:'http://beerimages.pintley.com/23476/Norse%2DLegend%2DBody%2DLabel%2D575_mobileThumb.png',
		image2x:'http://beerimages.pintley.com/23476/Norse%2DLegend%2DBody%2DLabel%2D575_web.png',
	},
];

//
// create table and add it to window
//
var beerTable = Ti.UI.createTableView({
	top:0,
	bottom:0,
	left:0,
	right:0,
});

win.add(beerTable);
win.open();

var tableRows = [];

//
// create our rows
//
for (var i in beers) {
	var newRow = new BeerRow(beers[i]);
	
	newRow.addEventListener('click',function(e){
		alert('You clicked on '+e.row.pullBeer().name);
	});
	
	tableRows.push(newRow);
}

//
// add our rows to the table
//
beerTable.data = tableRows;

