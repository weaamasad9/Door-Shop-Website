google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
	// Set Data
	var data = google.visualization.arrayToDataTable([
		['Door engrave', 'Mhl'],
		['Duo-panel',1567],
		['longitudinal-lines',1338],
		['width-lines',1251],
		['smooth',1844],
	]);

	// Set Options
	var options = {
		title:'Door sales 2024',
		backgroundColor: '#f1f0f0'
	};

	// Draw
	var chart = new google.visualization.PieChart(document.getElementById('myChart'));
	chart.draw(data, options);

}

function changeImageDouPanel() {
    if (document.getElementById("color-duo-panel").value == "white")			
        document.getElementById("duo-panel-door").src = "duo-panel-white.png";
    else
		document.getElementById("duo-panel-door").src = "duo-panel-cream.png";
}

function changeImageLongLines() {
    if (document.getElementById("color-long-lines").value == "white")			
        document.getElementById("long-lines-door").src = "long-lines-white.png";
    else
		document.getElementById("long-lines-door").src = "long-lines-cream.png";
}

function changeImageWidthLines() {
    if (document.getElementById("color-width-lines").value == "white")			
        document.getElementById("width-lines-door").src = "width-lines-white.png";
    else
		document.getElementById("width-lines-door").src = "width-lines-cream.png";
}

function changeImageSmooth() {
    if (document.getElementById("color-smooth").value == "white")			
        document.getElementById("smooth-door").src = "smooth-white.png";
    else
		document.getElementById("smooth-door").src = "smooth-cream.png";
}

function GetClientAndOrderInfo(){
	var firstName = document.getElementById('fname').value;
	var lastName = document.getElementById('lname').value;
	var cell = document.getElementById('cell').value;
	var email = document.getElementById('email').value;
	var qORc = document.getElementById('text').value;

	var alertMsg = "";
	
	if(firstName == ''){
		alertMsg = alertMsg + "Please enter your first name";
	}
	
	else{
		for (let i = 0; i < firstName.length; i++) {
			if (!isNaN(firstName[i])) {
				alertMsg = alertMsg + "\nPlease enter a valid first name";
				break;
			}
		}
	}
	
	
	if(lastName == ''){
		alertMsg = alertMsg + "\nPlease enter your last name";
	}
	
	else{
		for (let i = 0; i < lastName.length; i++) {
			if (!isNaN(lastName[i])) {
				alertMsg = alertMsg + "\nPlease enter a valid last name";
				break;
			}
		}
	}
	
	
	if(cell == ''){
		alertMsg = alertMsg + "\nPlease enter your cell number";
	}
	
	else{
		if(cell.length === 10 && cell[0] === '0' && cell[1] === '5') {

			for (let i = 2; i < cell.length; i++) {
				if (isNaN(cell[i])) {
					alertMsg = alertMsg + "\nPlease enter a valid cell number";
				}
			}
		}
		else{
		alertMsg = alertMsg + "\nPlease enter a valid cell number";
		}
	}
	
	
	if(email == ''){
		alertMsg = alertMsg + "\nPlease enter your email";
	}
	

	if(alertMsg != ''){
		alert(alertMsg);
	}
	else{
		processInfo(firstName, lastName, cell, email, qORc);
		cleanForm();
	}
}


function createOrder() {
    var doorNames = ["duo-panel", "long-lines", "width-lines", "smooth"];
    var order = [];

    
    for (var i = 0; i < 4; i++) {
        var width = document.getElementById(`width-${doorNames[i]}`).value;
        var quantity = document.getElementById(`quantity-${doorNames[i]}`).value;
        var color = document.getElementById(`color-${doorNames[i]}`).value;
		var type = document.getElementById(`type-${doorNames[i]}`).value;

        if (parseInt(quantity) > 0) {
            order.push([doorNames[i], width, quantity, color, type]);
        }
    }
    return order;
}




function cleanForm(){
	document.getElementById('fname').value = '';
	document.getElementById('lname').value = '';
	document.getElementById('cell').value = '';
	document.getElementById('email').value = '';
	document.getElementById('width-duo-panel').value = '63';
	document.getElementById('width-long-lines').value = '63';
	document.getElementById('width-width-lines').value = '63';
	document.getElementById('width-smooth').value = '63';	
	document.getElementById('color-duo-panel').value = 'white';	
	document.getElementById('color-long-lines').value = 'white';	
	document.getElementById('color-width-lines').value = 'white';
	document.getElementById('color-smooth').value = 'white';	
	document.getElementById('quantity-duo-panel').value = '0';
	document.getElementById('quantity-long-lines').value = '0';
	document.getElementById('quantity-width-lines').value = '0';
	document.getElementById('quantity-smooth').value = '0';
}


