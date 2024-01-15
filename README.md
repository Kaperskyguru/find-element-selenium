# Introduction to Selenium Find Element.

It's only possible to interact with any element of a web page using the Selenium web driver by locating the element using the methods provided by Selenium.

Selenium defines two methods for accessing and identifying web elements:

- findElement: This method returns a reference to the first element found within a given context.
- findElements: It's used to get the references to all the elements that match the locator rather than just the first one. This method returns a collection of element references. If there are no matches, an empty list is returned.

Now that we know the two methods to find elements in Selenium, let's understand their differences.

## Difference between findElement vs findElements in Selenium.

Next, let's go in-depth and explore the differences between findElement and findElements in Selenium.

### FindElement Method.

- The findElement method returns the first matching web element if the locator discovers multiple web elements
- Also, it throws NoSuchElementException if the element is not found.
- It detects a unique web element.
- The method is used to access a single element on a web page.

### FindElements Method.

- The method uniquely identifies a web page's list of web elements.
- It returns an empty list if the element doesn't exist on the page.
- It returns a collection of matching elements.

Next, let's explore these methods and see how we can use them to access and identify elements on the web page using Selenium in JavaScript.

Read more here.
