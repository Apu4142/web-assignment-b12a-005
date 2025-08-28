### ans - 1
#  getElementById("id")
* Returns the element with the specified id.

# getElementsByClassName("class")
* Returns all elements with the specified class.

# querySelector("selector")
* Uses a CSS selector and returns the first matching element.

# querySelectorAll("selector")
* Uses a CSS selector and returns all matching elements.


### ans -2
* document.createElement("tagName") --> Creates a new element.

* element.textContent / innerHTML --> Adds content inside the element.

* parent.appendChild(child) --> Inserts the element into the DOM.

### ans - 3
* Event Bubbling is when an event (like click) happens on an element,
  it first works on that element, and then gradually moves up to its 
  parent --> grandparent --> all the way up to the document.

### ans - 4
* Event Delegation allows us to efficiently handle events for many elements by placing a listener only on their parent.

* Fewer event listeners are needed in the DOM.

* Works even when new child elements are added.

* Makes the code easier to manage.

### ans -5
* preventDefault()	Stops the default browser action

* stopPropagation()	Prevents the event from bubbling up to the parent element
