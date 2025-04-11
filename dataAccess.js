function processInfo(firstName, lastName, cell, email, qORc) {
	var order = createOrder();
	var dbString = stringify(firstName, lastName, cell, email, order, qORc);
	localStorage.setItem(cell, dbString);
}


function stringify(firstName, lastName, cell, email, order, qORc) {
	var firstNameStr = 'firstName: ' + firstName;
	var lastNameStr = 'lastName: ' + lastName;
	var cellstr = 'cell: ' + cell;
	var emailstr = 'email: ' + email;
	var questionORconcerns = 'questions or concerns: ' + qORc;
	
	var orderStr = 'order: [';
    for (var i = 0; i < order.length; i++) {
       
        var door = order[i];
        orderStr += '[' + door[0] + ', ' + door[1] + ', ' + door[2] + ', ' + door[3] + ']';
        if (i < order.length - 1) {
            orderStr += ', ';
        }
    }
    orderStr += ']';

	var dbStr = '{'+ firstNameStr + ',' + lastNameStr + ',' + cellstr + ',' + emailstr + ','  + orderStr;

	if (qORc != ''){
		dbStr += ',' + questionORconcerns;
	}

	dbStr += '}';

	return dbStr;	
}