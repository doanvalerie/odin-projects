# Takeaways

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