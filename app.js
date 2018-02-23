var express = require('express');
var app = new app();

var userController = require('./userController.js');

app.use('/api',userController);

// Start the server
app.listen(16117, function () {
	console.log('Application is running at http://localhost:16117');

});
