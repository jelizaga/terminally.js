////////////////////////////////////////////////////////////////////////////////////////////////////
// terminally.js ///////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
//
// AUTHOR: Joel Elizaga, 2020
// LICENSE: MIT
// terminally.js is a JavaScript library intended for simulating terminal-like
// animation behavior in HTML elements of your choice. Have fun!
//
// /////////////////////////////////////////////////////////////////////////////////////////////////
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
// associated documentation files (the "Software"), to deal in the Software without restriction, 
// including without limitation the rights to use, copy, modify, merge, publish, distribute, 
// sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is 
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all copies or 
// substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT
// NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, 
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
//
////////////////////////////////////////////////////////////////////////////////////////////////////

// DEFAULTS ////////////////////////////////////////////////////////////////////////////////////////
// Can be modified by end-user, but these are the defaults.
const DEFAULT_TYPING_DELAY = 50;
var defaultTypingDelay = 50;
var defaultCursor = "&block;"
var defaultUser = "~$"
const DEFAULT_C = 0;
const DEFAULT_STR = "";
// lineCnt
// Beginning at 0, how many lines have been added to a terminal. Used for creating unique IDs per 
// line.
var lineCnt = 0;
// terminalScript
// Object containing the 'script' of the terminal to be ran upon the execution of runTerminal().
var terminalScript;

// terminalInput ///////////////////////////////////////////////////////////////////////////////////
// Simulates user input of the given text into the given terminal.
//   terminalID - ID of the terminal HTML element.
//   text - Text to animate into the terminal.
//   delay - Delay occurring before this animation runs in milliseconds. Defaults to '0.'
//   typingDelay - Delay occurring between printed characters in milliseconds.
function terminalInput(terminalID, text, typingDelay) {
	// We're adding to the last line typed, so we grab the last line's unique ID.
	lineID = terminalID.substring(1) + "-line-" + lineCnt;
	// If the typingDelay wasn't specified, default to the defaultTypingDelay.
	if (typeof typingDelay == "undefined") {
		typingDelay = defaultTypingDelay;
	}
	setTimeout(terminalTypeAnimation, typingDelay, lineID, text, str, c, cursor, typingDelay);
}

// terminalInputLine
// Simulates user input of the given text into the given terminal, then starts a new line.
// This is the equivalent of a terminal operator typing in a line and pressing 'enter' or 'return.'
//   terminalID - ID of the terminal HTML element.
//   text - Text to animate into the terminal.
//   typingDelay - Delay occurring between printed characters in milliseconds.
//   user - 
function terminalInputLine(terminalID, text, typingDelay, user) {
	// Append new line to the specified term with a unique ID.
	lineCnt++;
	lineID = term.substring(1) + "-line-" + lineCnt;
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

// terminalOutput
// 
function terminalOutputLine(term, txt) {
	// Append new line to the specified term with a unique ID.
	lineCnt++;
	lineID = term.substring(1) + "-line-" + lineCnt;
	lineCnt++;
	$(term).append("<p id='" + lineID + "'></p>");
}

// changeDefaultCursor /////////////////////////////////////////////////////////////////////////////
// Changes the default terminal cursor to something else.
//   cursor - String representing the HTML element to replace the default cursor with. The default
//   cursor is "&block;".
function changeDefaultCursor(cursor) {
	defaultCursor = cursor;
}

// changeDefaultUser ///////////////////////////////////////////////////////////////////////////////
// Changes the default terminal user to something else.
//   user - String representing the user to default to for terminal input. The default user is "~$."
//   The 'user' part of terminal input has a default class, 'terminal-user.'
function changeDefaultUser(user) {
	defaultUser = user;
}

// changeDefaultTypingDelay ////////////////////////////////////////////////////////////////////////
// Changes the default typing delay to something else.
//   delay - Integer representing the delay occuring between typed characters when terminal user
//   inputs. The default delay is 50.
function changeDefaultTypingDelay(delay) {
	changeDefaultTypingDelay = delay;
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

// runTerminal /////////////////////////////////////////////////////////////////////////////////////
// Executes the animation script you loaded into terminally.js.
function runTerminal() {
	for (terminalLine in terminalScript) {

	}
}