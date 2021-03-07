let info = {
  food: "apple",
  pay: 1000,
  happy: true,
};

//create firist then export. NOTE: there cn be only one default export per file.
export default info;

//create and export tgt. NOTE: you can have many named exports
export let i = 1;
export let greeting = "hello";

/*this is how you use to export with / without default keyword. for exporting without 'default' keyword, u must use the export keyword during creation of variables. with 'default', u must only export AFTER creation. else it gives error.

Technically, we may have both default and named exports in a single module, but in practice people usually don’t mix them. A module has either named exports or the default one.
*/
