function init(){
  var button = document.getElementById('entrybutton');
  button.addEventListener('click', displayText);
  
  function displayText(){
	  var userInput = document.getElementById('entryinput');
	  alert("Praneel Kabra: " + userInput.value);
	 	document.getElementById('textoutput').innerHTML = userInput.value;
	}

}
 
window.addEventListener('load', init);