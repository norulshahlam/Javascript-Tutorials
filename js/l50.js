/*
A module is just a file. One script is one module. As simple as that.

Modules can load each other and use special directives export and import to interchange functionality, call functions of one module from another one:

export keyword labels variables and functions that should be accessible from outside the current module.
import allows the import of functionality from other modules.

https://javascript.info/modules-intro

there are 2 types of export: default and named export

Export default
https://javascript.info/import-export
*/

//this is from default export. u can give any name
import info from "../js/l50-2.js";

//this is from name export. u must use the same name when u exported
import { i } from "../js/l50-2.js";
import { greeting } from "../js/l50-2.js";
console.log(info);
console.log(i, greeting);
