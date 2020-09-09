/*****************************************
File: Asgn8_Nguyen.html
Author: Thuy Tien Nguyen
Assignment: 8
Create Date: 7/27/2019
Last Modified: 8/5/2019
****************************************/

var $ = function (id) 
{
    return document.getElementById(id);
}

//handles processDate() event
function processDate ()
{
	//Initialize variable for date format
	var today = new Date();   
	var todaymm  = today.getMonth() + 1;
	var todaydd  = today.getDate();
	var todayyyy = today.getFullYear();
	var todayformatted = todaymm + '/' + todaydd + '/' + todayyyy;
	
	var myText = document.createTextNode(todayformatted);
	var date =  $("today");
	 
	date.appendChild(myText);
}

//handles click event to add items
var addItem = function ()
{
	var inputElement = document.createElement("input");
	var brElement = document.createElement("br");
	
	inputElement.setAttribute("type", "text");
	inputElement.setAttribute("class", "listitem");
	
	var list = $("todolist");
	list.appendChild(inputElement);
	list.appendChild(brElement);
	
}

//handles click event to sort items
var sortItem = function ()
{
	//reset "displayitems"	
	$("displayitems").innerHTML = "";
	
	var myDisplay = $("displayitems");
	
	var items = document.getElementsByClassName("listitem");
	
	//unsorted array
	var listItemValues = new Array();
		
	for (var i=0; i<items.length; i++)
	{
		listItemValues[i] = items[i].value;
		
	}

	//sorts array of listed items
	listItemValues.sort(); 
	
	
	//builds sorted list into the myDisplay variable
	for (index in listItemValues)
	{
		
		var spanElement = document.createElement("span");
	    var brElement = document.createElement("br");
		var myText = document.createTextNode(listItemValues[index]);
		spanElement.appendChild(myText);
		myDisplay.appendChild(brElement);
	    myDisplay.appendChild(spanElement);

	}
	
}

window.onload = function () 
{
    processDate();
	$("additem").onclick = addItem;
	$("sortitems").onclick = sortItem;
	
}
