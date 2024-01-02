# Takeaways

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

## Classes

- `class` keyword does the exact same thing as object constructors and prototypes.
	- May be considered a syntactic sugar over prototype-based constructors. But there are differences!
- The given name of a JavaScript `class` is a function whose code is provided by the `constructor`.
	- Methods, getters, and setters are written to the prototype of the `class` name.
- The body of a class is executed in strict mode.
- Methods are defined on the prototype of each class instance.
- Can declare public and privcate class fields. 
	- Set on individual objects instead of the prototype.
- Implement inheritance with `extends`.