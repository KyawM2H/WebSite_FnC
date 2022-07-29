let i = 0;
let txt = 'Hi there, I created this website to showcase my application for FAC skills bootcamp.'
let speed = 250;
let _INTERVAL_VAL;


const typingEffect = () =>{
    if(i<txt.length){
      document.getElementById("typing_effect").innerHTML += txt.charAt(i);
      i++;
     }
    
    if (i === txt.length){
        
        clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 50);
		}, 1000);
    }

}

// Implements deleting effect
function Delete() {
	// Get substring with 1 characater deleted
	let text =  txt.substring(0, i - 1);
    console.log(text);
	document.getElementById("typing_effect").innerHTML = text;
	i--;

	// If sentence has been deleted then start to display the next sentence
	if(text === '') {
		clearInterval(_INTERVAL_VAL);

		// Start to display the next sentence after some time
		setTimeout(function() {
			
			_INTERVAL_VAL = setInterval(typingEffect, 100);
		}, 200);
	}
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(typingEffect, speed);


