# Takeaways

- **`npm`**: Node package manager.
- **`package.json`**: Manages project's dependencies and makes your build reproducible.
	- **`devDependencies`**: Packages used during development.
	- **`dependencies`**: Packages available duing development and production.
- **ES6 module**: File of JavaScript code that are used to import or export.
	- Everything inside a module is private by default! 
- **Bundler**: Bundle things into 1 static file; combine JavaScript code files into one loadable file for the browser.
	- Performs **dependency resolution** to generate a dependency graph. Shows the relationship between all files.
		- Benefits: Detects unused files. Prevents naming conflicts. Retrieves functions when a browser requests them.
	- Performs **packing** to deliver static assets for browser processing. 
		- Benefits: Returns a single executable bundle loadable by the browser. Combines multiple files into fewer files to decrease amount of HTTP requests.
- **Webpack**: Used to bundle modules.
	- Uses **loaders** to compile other non-JavaScript resources as modules that can be imported and used as dependencies.