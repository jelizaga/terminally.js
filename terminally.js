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
const DEFAULT_DELAY = 0;
var defaultTypingDelay = 50;
var defaultCursor = "&block;"
var defaultUser = "~$"
// currentLine
var currentLineID = 0;
// currentC
// The current index of the character being typed into the terminal line.
var currentC = 0;
const DEFAULT_C = 0;
const DEFAULT_STR = "";
// lineCnt
// Beginning at 0, how many lines have been added to a terminal. Used for creating unique IDs per 
// line.
var lineCnt = 0;
// terminalScript
// Object containing the 'script' of the terminal to be ran upon the execution of runTerminal().
var terminalScript = [];

// terminalInput ///////////////////////////////////////////////////////////////////////////////////
// Simulates user input of the given text into the given terminal.
//   terminalID - ID of the terminal HTML element.
//   text - Text to animate into the terminal.
//   delay - Delay occurring before this animation runs in milliseconds. Defaults to '0.'
//   typingDelay - Delay occurring between printed characters in milliseconds.
function terminalInput(terminalID, text, delay, typingDelay) {
	// Set an undefined delay to 0 milliseconds.
	if (typeof delay == "undefined") {
		delay = DEFAULT_DELAY;
	}
	// Set an undefined typingDelay to the defaultTypingDelay.
	if (typeof typingDelay == "undefined") {
		typingDelay = defaultTypingDelay;
	}
	// Package the animation as an object to be inserted into the terminalScript.
	var terminalAnimation = {
		terminalID : terminalID,
		text: text,
		delay : delay,
		typingDelay : typingDelay,
		animate : function() {
			animateTerminalInput(this.text, this.typingDelay, "");
		}
	};
	terminalScript.push(terminalAnimation);
}

function animateTerminalInput(text, typingDelay, str) {
	console.log("text = " + text);
	console.log("str = " + str);
	console.log("line = " + currentLineID);
	console.log("currentC (" + currentC + ") < text.length (" + text.length + "): ");
	console.log(currentC < text.length);
	// If the characters printed is less than the length of the text to animate...
	if (currentC < text.length) {
		console.log("adding " + text.charAt(currentC));
		// Add the next character to the text on the unique terminal line,
		str = str + text.charAt(currentC);
		$(currentLineID).html("<span class='terminal-prompt'>" + defaultUser + "</span> " + str + defaultCursor);
		// Increment the amount of characters printed.
		currentC++;
		// Wait the desired typingDelay before printing the next character on the terminal line.
		setTimeout(animateTerminalInput, typingDelay, text, typingDelay, str);
	} else {
		var defer = $.Deferred();
		defer.resolve();
		return defer;
	}
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

// initializeTerminal //////////////////////////////////////////////////////////////////////////////
// Initializes the terminal with a prompt.
// Without this, your terminal will begin blank, rather than with a prompt.
//   terminalID - The ID of the terminal to initialize.
function initializeTerminal(terminalID) {
	lineCnt++;
	var lineID = terminalID.substring(1) + "-line-" + lineCnt;
	$(terminalID).append("<p id='" + lineID + "'><span class='terminal-prompt'>~$</span> <span id='" + lineID + "-cursor'>" +
		defaultCursor + "</span></p>");
	// Set the current line ID to the first line's ID.
	currentLineID = "#" + lineID;
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

// runTerminal /////////////////////////////////////////////////////////////////////////////////////
// Executes the animation script you loaded into terminally.js.
function runTerminal(terminalID) {
	// Catch if terminal is undefined, produce console error.
	if (typeof terminalID == "undefined") {
		console.log("ERROR: runTerminal() must receive the ID of the HTML object terminal to run.")
	}
	// Initialize the received terminal.
	initializeTerminal(terminalID);
	playAction(0);
}

function playAction(i) {
	var action = terminalScript[i];
	setTimeout(function() { 
		action.animate(); 
	}, action.delay);

}