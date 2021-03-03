/* javascript Observer Patterns

The Observer pattern offers a subscription model in which objects subscribe to an event and get notified when the event occurs. This pattern is the cornerstone of event driven programming, including JavaScript.

The observer pattern is a software design pattern in which an object, called the subject, maintains a list of its dependents, called observers, and notifies them automatically of any state changes, usually by calling one of their methods.
*/

function EventObserver()
{
  this.observers = [];
}

EventObserver.prototype = {
  subscribe: function (fn)
  {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${ fn.name }`)
  },

  unsubscribe: function (fn)
  {
    //filter out from the list whatever matches the callback function. if there is no match, the callback gets to stay on the list. the filter returns a new list and reassigns the list of observers
    this.observers = this.observers.filter(function (item)
    {
      if (item !== fn) {
        return item;
      }
    });
    console.log(`You are now unsubscribed from ${ fn.name }`);
  },

  fire: function ()
  {
    this.observers.forEach(function (item)
    {
      item.call();
    });
  }
}

//create an instance
const click = new EventObserver();

//create subscribe event
document.querySelector('.sub-ms').addEventListener('click', function ()
{
  click.subscribe(getCurrMs);
})

//create unsubscribe event
document.querySelector('.unsub-ms').addEventListener('click', function ()
{
  click.unsubscribe(getCurrMs);
})

//create fire event
document.querySelector('.fire').addEventListener('click', function ()
{
  click.fire();
})

const getCurrMs = function ()
{
  console.log(`Current milliseconds: ${ new Date().getMilliseconds() }`);
}