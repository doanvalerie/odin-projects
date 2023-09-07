# odin-projects
## Projects Overview

Takeaways and relevant skills are noted under each project section in the following document.  
If any bugs are encountered, feel free to reach out! 

### Foundations Course

| Project             | Topic             | Link                                                                                   |
| ------------------- | ----------------- | -------------------------------------------------------------------------------------- |
| Landing Page        | Flexbox           | [Landing Page](https://doanvalerie.github.io/odin-projects/landing-page/)              |
| Rock Paper Scissors | JavaScript Basics | [Rock Paper Scissors](https://doanvalerie.github.io/odin-projects/rock-paper-scissors) |
| Etch-A-Sketch       | JavaScript Basics | [Etch-A-Sketch](https://doanvalerie.github.io/odin-projects/etch-a-sketch)             |
| Calculator          | JavaScript Basics | [Calculator](https://doanvalerie.github.io/odin-projects/calculator)                   |

### Full Stack JavaScript Course

| Project         | Topic                                                     | Link                                                                           |
| ----------------| --------------------------------------------------------- | ------------------------------------------------------------------------------ |
| Sign Up Form    | Forms                                                     | [Sign Up Form](https://doanvalerie.github.io/odin-projects/sign-up-form)       |
| Admin Dashboard | Grid                                                      | [Admin Dashboard](https://doanvalerie.github.io/odin-projects/admin-dashboard) |
| Library         | Organizing your JavaScript Code (Objects & Constructors)  | [Library](https://doanvalerie.github.io/odin-projects/library)                 |
| Tic Tac Toe     | Organizing your JavaScript Code (The Module Pattern)      | [Tic Tac Toe](https://doanvalerie.github.io/odin-projects/tic-tac-toe)         |


## Foundations Course
### Landing Page

<table>
  <tr>
    <th>Link</th>
    <th>Skills</th>
  </tr>
  <tr>
    <td>
      <a href="https://doanvalerie.github.io/odin-projects/landing-page/">Landing Page</a>
    </td>
    <td>
      <ul>
        <li>HTML
          <ul>
            <li>Introduction to HTML elements and tags</li>
            <li>Box model</li>
            <li>Flexbox layouts</li>
          </ul>
        </li>
        <li>CSS
          <ul>
            <li>Introduction to CSS selectors</li>
            <li>The cascade</li>
          </ul>
        </li>
      </ul>
    </td>
  </tr>
</table>

**Takeaways**
- **HTML elements**: Content wrapped in opening and closing HTML tags. 
- **Semantic HTML**: Usage of correct elements to reinforce meaning of web page content.
- **The cascade**: A determination of which rules get applied to our HTML based on the specificity of the CSS declaration.
	- Specificity is based on ID selectors (1), class selectors (2), and type selectors (3).
- **CSS selectors**: A determination of which HTML elements to which CSS rules apply.
- **Inheritance**: CSS properties, such as those of typography, can be inherited by an element's descendants.
- **The box model**: Everything on a web page is a rectangular box! Layouts involve nesting and stacking boxes. 
	- Boxes consist of content, padding, border, and margin area. 
- **Inner display type**: Defines how elements inside the box are laid out. 
	- Default: **Normal flow** where elements behave as blocks or inline boxes. 
- **`box-sizing: border-box`**: Account for border and padding sizes in the element's width and height. 
- **Flexbox**: Arrangement of items in rows or columns.
	- Items grow or shrink based on defined rules.
	- **`flex-grow`**: Flex item's growth factor
	- **`flex-shrink`**: Flex item's shrink factor
	- **`flex-basis`**: Set the initial size of a flex item
		- **`flex-basis: auto;`** Check for a width declaration (flex rows) or height declaration (flex columns).

### Rock Paper Scissors

<table>
  <tr>
    <th>Link</th>
    <th>Skills</th>
  </tr>
  <tr>
    <td>
      <a href="https://doanvalerie.github.io/odin-projects/rock-paper-scissors">Rock Paper Scissors</a>
    </td>
    <td>
      <ul>
        <li>HTML
          <ul>
            <li>Flexbox layouts</li>
          </ul>
        </li>
        <li>CSS
          <ul>
            <li>Selectors</li>
            <li>The cascade</li>
          </ul>
        </li>
        <li>JavaScript
          <ul>
            <li>JavaScript fundamentals</li>
            <li>DOM manipulation and events</li>
          </ul>
        </li>
      </ul>
    </td>
  </tr>
</table>

**Takeaways**
- **DOM**: Document Object Model. Representation of objects that make up the structure of a web document.
	- Document is represented as a tree of nodes and objects.
	- **Node**: An object with properties and methods.
		- The document, elements, text, and comments.
- HTML code parsed by browser -> Converted to the DOM.
- **Query selector**: Uses CSS-style selectors to target nodes and returns corresponding references.
- **Events**: Actions that occur on the webpage.
	- Add event listeners/handlers to react to these events.
	- **Callbacks**: Functions passed into other functions as arguments.

During the workings of my first code in JavaScript, I wanted modularity and structure, thus turning 
to classes to encapsulate this project's data. However, upon its completion, I felt OOP principles 
were not as relevant in this context, having yet to study the common design patterns in modern JavaScript 
code: Javascript objects and object constructors, factory functions and the module pattern, ES6 
modules, and of course, JS classes. In the future, I hope to return to this project, possibly 
refactoring the code after learning important JavaScript concepts. 

### Etch-A-Sketch

<table>
  <tr>
    <th>Link</th>
    <th>Skills</th>
  </tr>
  <tr>
    <td>
      <a href="https://doanvalerie.github.io/odin-projects/etch-a-sketch">Etch-A-Sketch</a>
    </td>
    <td>
      <ul>
        <li>HTML
          <ul>
            <li>Flexbox layouts</li>
          </ul>
        </li>
        <li>CSS
          <ul>
            <li>Selectors</li>
            <li>The cascade</li>
          </ul>
        </li>
        <li>JavaScript
          <ul>
            <li>JavaScript fundamentals</li>
            <li>DOM manipulation and events</li>
          </ul>
        </li>
      </ul>
    </td>
  </tr>
</table>

During the workings of my second code in JavaScript, I wanted modularity and structure, thus turning 
to classes to encapsulate this project's data. However, upon its completion, I felt OOP principles 
were not as relevant in this context, having yet to study the common design patterns in modern JavaScript 
code: Javascript objects and object constructors, factory functions and the module pattern, ES6 
modules, and of course, JS classes. In the future, I hope to return to this project, possibly 
refactoring the code after learning important JavaScript concepts. 

### Calculator

<table>
  <tr>
    <th>Link</th>
    <th>Skills</th>
  </tr>
  <tr>
    <td>
      <a href="https://doanvalerie.github.io/odin-projects/calculator">Calculator</a>
    </td>
    <td>
      <ul>
        <li>HTML
          <ul>
            <li>Flexbox layouts</li>
          </ul>
        </li>
        <li>CSS
          <ul>
            <li>Selectors</li>
            <li>The cascade</li>
          </ul>
        </li>
        <li>JavaScript
          <ul>
            <li>JavaScript fundamentals</li>
            <li>DOM manipulation and events</li>
          </ul>
        </li>
      </ul>
    </td>
  </tr>
</table>

## Full Stack JavaScript Course
### Sign Up Form

<table>
  <tr>
    <th>Link</th>
    <th>Skills</th>
  </tr>
  <tr>
    <td>
      <a href="https://doanvalerie.github.io/odin-projects/sign-up-form">Sign Up Form</a>
    </td>
    <td>
      <ul>
        <li>HTML
          <ul>
            <li>Flexbox layouts</li>
			<li>Forms</li>
          </ul>
        </li>
        <li>CSS
          <ul>
            <li>Selectors</li>
            <li>The cascade</li>
			<li>Variables</li>
          </ul>
        </li>
        <li>JavaScript
          <ul>
            <li>DOM manipulation and events</li>
			<li>Form validation</li>
          </ul>
        </li>
		<li>Extra
          <ul>
            <li>Regular Expressions</li>
          </ul>
        </li>
      </ul>
    </td>
  </tr>
</table>

**Takeaways**
- **Forms**: The user's gateway into the backend!
- **Form control elements**: Elements that the user interacts with on the form (e.g. text boxes, dropdowns, 
checkboxes, and buttons).
	- Certain form controls are more difficult to style. 
- **Regular expressions**: A sequence of characters that represents a match pattern in a string. 
	- Incredibly useful for input validation!

### Admin Dashboard

<table>
  <tr>
    <th>Link</th>
    <th>Skills</th>
  </tr>
  <tr>
    <td>
      <a href="https://doanvalerie.github.io/odin-projects/admin-dashboard">Admin Dashboard</a>
    </td>
    <td>
      <ul>
        <li>HTML
          <ul>
            <li>Grid layouts</li>
			<li>Flexbox layouts</li>
          </ul>
        </li>
        <li>CSS
          <ul>
            <li>Selectors</li>
            <li>The cascade</li>
			<li>Variables</li>
          </ul>
        </li>
      </ul>
    </td>
  </tr>
</table>

**Takeaways**
- Grids are an incredibly useful 2D layout system that can be either static or responsive. 
- Use fractional units to make grid tracks dynamic. 
- In this project, I began playing slightly around with media queries. At this moment, I have 
not extensively studied responsive website design. After learning proper practices, I hope to
return to this project and prior designs to make them responsive. 

### Library

<table>
  <tr>
    <th>Link</th>
    <th>Skills</th>
  </tr>
  <tr>
    <td>
      <a href="https://doanvalerie.github.io/odin-projects/library">Library</a>
    </td>
    <td>
      <ul>
        <li>HTML
          <ul>
            <li>Grid layouts</li>
			<li>Flexbox layouts</li>
          </ul>
        </li>
        <li>CSS
          <ul>
            <li>Selectors</li>
            <li>The cascade</li>
          </ul>
        </li>
		<li>JavaScript
          <ul>
            <li>DOM manipulation and events</li>
			<li>Form validation</li>
			<li>Objects & object constructors</li>
          </ul>
        </li>
      </ul>
    </td>
  </tr>
</table>

**Takeaways**
- JavaScript is a prototype based language, where all objects have a **`prototype`**.
- **`prototype`**: Another object that has properties and functions, which the original object will inherit. 
- JavaScript determines which properties exist or do not exist on an object by traversing the prototypal chain
to find the property or function.
- Prototypal chain ends at **`Object.prototype`**, from which every **`prototype`** object inherits properties and functions.

**`this`** in JavaScript
- **`this`**: Context of a function invocation.
- **Context**: Value of `this`.
	- Function invocation: `alert('Hello World!)`
		- `this` is the global object (`window` in a browser).
		- `this` is `undefined` in strict mode.
	- Method invocation: `console.log('Hello World!')`
		- `this` is the object that owns the method.
	- Constructor invocation: `new RegExp('\\d')`
		- `this` is the newly created object.
	- Indirect invocation: `alert.call(undefined, 'Hello World!')`
		- `this` is the first argument of `.call()` and `.apply()`.
	- Bound function: `myFunction.bind(thisArg)`
		- `this` is the first argument of `.bind()`.
		- Returns a new function that is not invoked right away unlike `.apply()` or `.call()`.
		- Makes a permanent context link.
	- Arrow function: Lexically binds the context.
		- `this` is the enclosing context where the arrow function is defined.

### Tic Tac Toe

<table>
  <tr>
    <th>Link</th>
    <th>Skills</th>
  </tr>
  <tr>
    <td>
      <a href="https://doanvalerie.github.io/odin-projects/tic-tac-toe">Tic Tac Toe</a>
    </td>
    <td>
      <ul>
        <li>HTML
          <ul>
            <li>Grid layouts</li>
			<li>Flexbox layouts</li>
          </ul>
        </li>
        <li>CSS
          <ul>
            <li>Selectors</li>
            <li>The cascade</li>
			<li>Variables</li>
          </ul>
        </li>
		<li>JavaScript
          <ul>
            <li>DOM manipulation and events</li>
			<li>Factory functions</li>
			<li>The module pattern</li>
          </ul>
        </li>
      </ul>
    </td>
  </tr>
</table>

**Takeaways**
- `var` variables are **function scoped** whereas `let` and `const` variables are **block scoped**.
- **Factory**: JavaScript function that returns an object.
- Public and private scope can be emulated through **closures**.
	- **Closures**: Functions that retain their scope despite being called outside of their scope. Created
	every time a function is created.
- **Lexical scope**: Scope of a function or variable based on where it was defined in the source code. 
	- Inner functions have access to the scope in the outer function.
- **Scope chain**: Used to resolve variables by starting at the innermost scope and searching outwards.
- **The Module Pattern**: A way of organizing JavaScript code in modules to emulate public and private encapsulation.
	- Define a module that returns namespaced public methods or variables that are accessible in the global scope.
	- Emphasis on closures, scopes, and **IIFE (Immediately-Invoked Function Expressions)**
	- **IIFE**: Function that is executed once defined. Wraps an anonymous function with lexical scope.
	- Benefit: Avoid polluting the global namespace and name collision.
	- Commonly used as single style objects with one instance in existence. 

### Classes

**Takeaways**
- `class` keyword does the exact same thing as object constructors and prototypes.
	- May be considered a syntactic sugar over prototype-based constructors. But there are differences!
- The given name of a JavaScript `class` is a function whose code is provided by the `constructor`.
	- Methods, getters, and setters are written to the prototype of the `class` name.
- The body of a class is executed in strict mode.
- Methods are defined on the prototype of each class instance.
- Can declare public and privcate class fields. 
	- Set on individual objects instead of the prototype.
- Implement inheritance with `extends`.