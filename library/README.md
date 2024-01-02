# Takeaways

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