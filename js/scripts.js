// JavaScript Document
//keeps count of elements added to canvas and is used to assign each an id, later used to delete.
var count = 0;
var countDeco = 0;


//makes cake items draggable
function makeDraggable()
{	
	console.log("enter makeDraggable")
	window.addEvent('domready',function() 
	{
		var z = 2;
		
		$$('.draggable').each(function(el)
		{
			var drag = new Drag.Move(el,
			{
				grid: false,
				preventDefault: true,
				onStart: function()
				{
					el.setStyle('z-index',z++).fade(0.5);
				},
				onComplete: function()
				{
					el.fade(1);
				}
			});
		});
	});
}


function makeCake(shape, size)
{	
	//dynamically create new img and make draggable
	
	var cake = document.createElement('img');	
	cake.src = 'images/panel/level3/'+shape+'/'+size+'.png';
	
	cake.id = count;
	count++;

	cake.className = 'draggable';
	//cake.onmouseover = 'makeDraggable(cake.id)';
	
	document.getElementById('canvas').appendChild(cake);
	
	//make them draggable
	makeDraggable();
}

function makeDeco(shape)
{	
	//dynamically create new img and make draggable
	var deco = document.createElement('img');
	deco.src = 'images/panel/level2/deco/draw'+shape+'.png';
	
	deco.id = countDeco;
	countDeco++;
	
	deco.className = 'draggable';
	
	deco.onmouseover = 'makeDraggable(deco.id)';

	document.getElementById('canvas').appendChild(deco);
	
	//make them draggable
	makeDraggable();
}