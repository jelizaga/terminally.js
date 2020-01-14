// The default delay between characters typed into the terminal is 50 milliseconds.
var typingDelay = 50;
// The default text cursor is a block.
var txtCursor = "&block;"
var c = 0

function type(term, txt, str, dir, typingDelay) {
	$(term).append("<p>BUTT</p>");
	console.log("ran type");
	//setTimeout(terminalTypeAnimation, 800, txt, str, dir, "", typingDelay);
}

// terminalTypeAnimation ///////////////////////////////////////////////////////////////////////////
// Simulates the input into a terminal.
// id - String representing the id of the element to type into.
// txt - String representing the text to type out.
// str - The "beginning" of the input; typically an empty string, "".
// c - Index of the character from txt to begin typing from. Typically '0.'
function terminalTypeAnimation(id, txt, str, typingDelay, c) {



	if (c < txt.length) {
		str = str + txt.charAt(c);
		$(id).html(str + txtCursor);
		c++;
		setTimeout(terminalTypeAnimation, typingDelay, id, txt, str, c);
	} else {

	}
}

////////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function() {
	type("#terminally-terminal");
});