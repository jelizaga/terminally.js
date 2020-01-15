# terminally.js
Spruce up your site with my JavaScript library for *emulating terminal-like behavior!*

**Depends on jQuery.js.**

## How-To
**terminally.js** is pretty straightforward.

Pick any ID'd HTML element as your terminal. For example, a `<div>` with `id='terminal'`.

Imagine this simulated 'terminal' as a stage. Write the 'script' for the terminal's animation using
the library's commands (terminalInput(), terminalInputLine(), and terminalOutput()), then order the
animation to run with **runTerminal().**

### Scripting the Terminal

#### terminalInput()
Simulate terminal user input with the terminalInput() function:

#### terminalInputLine()
Simulate terminal user input and line execution with the terminalInputLine() function:

#### terminalOutput()
Simulate a line of terminal output with the terminalOutput() function:

### Changing Defaults

#### changeDefaultCursor()
Change the default cursor to a different HTML element. The default cursor is a `"&block;"`:

#### changeDefaultUser()
Change the default user to a different string. The default user is `"~$"`:

#### changeDefaultTypingDelay()
Change the default typing delay to a different integer. Delay is measured in milliseconds. The
default typing delay is `50`:

### Running the Terminal

#### runTerminal()
Once you've written your terminal's 'script' with the above commands, execute the runTerminal()
command to have it all perform sequentially!

## Misc.
Make sure your **terminally.js** text is in a **monospace font** for maximum authenticity. Or don't,
if you're feeling creative.

## License
```
Copyright 2020 Joel Elizaga

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and 
associated documentation files (the "Software"), to deal in the Software without restriction,
including without limitation the rights to use, copy, modify, merge, publish, distribute,
sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial
portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT
NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES
OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```