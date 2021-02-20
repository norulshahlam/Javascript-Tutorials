/* The window object is a global object that has the properties pertaining to the current DOM document, which is what’s in the tab of a browser. The document property of the window object has the DOM document and associated nodes and methods that we can use to manipulate the DOM nodes and listen to events for each node. Since the window object is global, it’s available in every part of the application.
https://medium.com/better-programming/introducing-the-javascript-window-object-web-components-and-console-ac9ef42d454e


we will list some of the methods that is useful

outerHeight/width - Returns height/width of the BROWSER window, including toolbars/scrollbars

innerHeight/width -	Returns the height of the window's CONTENT AREA (viewport) including scrollbars

scroll - position of mouse
*/

var outerHeight = window.outerHeight;
var outerWidth = window.outerWidth;
var innerHeight = window.innerHeight;
var innerWidth = window.innerWidth;
var scrollY = window.scrollY; //scroll down to see changes
var scrollx = window.scrollX; //scroll right to see changes

console.log('outerheight: ' + outerHeight);
console.log('outerWidth: ' + outerWidth);
console.log('innerHeight: ' + innerHeight);
console.log('innerWidth: ' + innerWidth);
console.log('scrollY: ' + scrollY);
console.log('scrollx: ' + scrollx);
