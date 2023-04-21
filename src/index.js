class EventTarget {
  // Write your code here.
  constructor() {
    this.listner = {};
  }

  addEventListener(name, callback) {
    // Write your code here.
    if (!this.listner.hasOwnProperty(name)) {
      this.listner[name] = new Set();
    }
    this.listner[name].add(callback);
  }

  removeEventListener(name, callback) {
    // Write your code here.
    this.listner[name]?.delete(callback);
  }

  dispatchEvent(name) {
    // Write your code here.
    this.listner[name]?.forEach((callback) => {
      callback();
    });
  }
}

const eventTarget = new EventTarget();

const hello = () => {
  console.log("Hello clicked");
};
const world = () => {
  console.log("world clicked");
};

// {
//   hello: Set(1) { [Function: hello] },
//   world: Set(1) { [Function: world] }
// }

//add event
eventTarget.addEventListener("hello", hello);
eventTarget.addEventListener("world", world);

//disptach
eventTarget.dispatchEvent("hello");
eventTarget.dispatchEvent("world");

console.log(eventTarget.listner);
//remove
eventTarget.removeEventListener("hello", hello);

console.log(eventTarget.listner);

//disptach
eventTarget.dispatchEvent("hello");
eventTarget.dispatchEvent("world");

/*
//add event
eventTarget.addEventListener('hello', () => {console.log("Hello clicked")});
eventTarget.addEventListener('world',  () => {console.log("world clicked")});

This creates anonoumous functions therefore not working
{
  hello: Set(1) { [Function (anonymous)] }, 
  world: Set(1) { [Function (anonymous)] }
}

//disptach
eventTarget.dispatchEvent('hello');
eventTarget.dispatchEvent('world');

console.log(eventTarget.listner)
//remove
eventTarget.removeEventListener('hello', () => {console.log("Hello clicked")});

console.log(eventTarget.listner)

//disptach
eventTarget.dispatchEvent('hello');
eventTarget.dispatchEvent('world');
*/
