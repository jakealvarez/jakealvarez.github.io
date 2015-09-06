// alert($); this just checks the jquery is working properly. 

function askQuestions() {
	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?'); 
	var fullName = firstName + ' ' + lastName;
	console.log('User is called ' + fullName); 

	$('h2').text('Hello ' + fullName);


	var userAge = prompt('How old are you?');
	userAge = parseInt(userAge);
	if (userAge >= 18) {
		console.log('User is an adult');
	}
	else if (userAge >= 13) {
		console.log ('User is a teenager');
	}
	else {
		console.log('Go away child');
	}
}

// When the page loads 
$(function() {

	$('img').on('click', askQuestions);

	// Hide all the sections 
	$('h3').next().hide();


	// 2. When the user clicks an h3 element 
	$('h3').on('click',function(){


	// 3. Hide the next element 
	$(this).next().slideToggle(300);

});




// var firstName = prompt ('What is your first name?');
// var lastName = prompt ('What is your last name?');
// if (firstName.toLowerCase() === 'general' && lastName !== "Assembly") {
// 	console.log('Hello General')
// }
// else {
// 	console.log ('you are not the General')
// }


// 1. When the page is loads


});