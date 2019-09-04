var x=prompt("Enter Y to enter the page! This is for security reasons ;)");
while(x!=="Y") {
	var x = prompt("Please enter valid command!");
}

alert("Thanks for visiting the website!");
console.log("Thanks for visiting the website!");

function validate()
{
	if(document.getElementById('button').clicked == true) {
		swal("Thank You" , "Your response has been recorded" , "success");
	}
}