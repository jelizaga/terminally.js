// DEFAULTS ///////////////////////////////////////////////////////////////////////////////////////
const DEFAULT_TYPING_DELAY = 50;
const DEFAULT_CURSOR = "&block;"
const DEFAULT_C = 0;
const DEFAULT_STR = "";
var lineCnt = 1;

function type(term, txt, str, dir, typingDelay, c) {
	lineID = term.substring(1) + "-line-" + lineCnt;
	lineCnt++;
	$(term).append("<p id='" + lineID + "'></p>");

	if (typeof str == "undefined") {
		str = DEFAULT_STR;
	}
	if (typeof c == "undefined") {
		c = DEFAULT_C;
	}
	if (typeof typingDelay == "undefined") {
		typingDelay = DEFAULT_TYPING_DELAY;
	}
	if (typeof cursor == "undefined") {
		cursor = DEFAULT_CURSOR;
	}
	
	setTimeout(terminalTypeAnimation, typingDelay, lineID, txt, str, c, cursor, typingDelay);
}

// terminalTypeAnimation ///////////////////////////////////////////////////////////////////////////
// Simulates the input into a terminal.
// id - String representing the id of the element to type into.
// txt - String representing the text to type out.
// str - The "beginning" of the input; typically an empty string, "".
// c - Index of the character from txt to begin typing from. Typically '0.'
function terminalTypeAnimation(id, txt, str, c, cursor, typingDelay) {
	console.log("id = " + id);
	console.log("txt = " + txt);
	console.log("str = " + str);
	console.log("delay = " + typingDelay);
	console.log("c = " + c);
	console.log("cursor = " + cursor);
	if (c < txt.length) {
		str = str + txt.charAt(c);
		$("#" + id).html(str + cursor);
		c++;
		setTimeout(terminalTypeAnimation, typingDelay, id, txt, str, c, cursor, typingDelay);
	}
}

////////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function() {
	type("#terminally-terminal", "BUTTTTTTTT");
	type("#terminally-terminal", "yolo")
});