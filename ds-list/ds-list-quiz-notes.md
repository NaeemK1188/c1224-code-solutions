# ds-list-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Briefly describe the List data structure.

  a contiguous block of data with the same size with allocated certain memory size
  we can put a reference point to a memory location
  so what is stored is a reference to variable, object, but not the actual variable of object

- What are some examples of when you would use a List?
  queue
  link-list
  stack
  todo list
  grocery list

- How do you read an element of a List given its index? What is its time complexity?
  element in a list can be located in memory by multiplying the index by the element size and adding the memory location of the first element in the list. time complexity o[1]
  using bracket notation
  3(indexes) \* 4(size of each element) = 12 + 500(offset) = 512 memory location
  no search so its O(1). it doesn't consider the size of the list. so its constant time complexity

- How do you add an element into a List at a given index? What is its time complexity?
  we add it at the end of the list, by going linearly through the list so its O(n)
  we do the same math 3(indexes) \* 4(size of each element) = 12 + 500(offset) = 512 memory location
  then add the new one and push the previous one to the top or shift the old one one spot
  O(n) because the shifting everything over to add the new one

- How do you update an element in a List at a given index? What is its time complexity?
  locate the item in the list by iterating through the list and update the value based on its index
  , then updating is O(1)
  3(indexes) \* 4(size of each element) = 12 + 500(offset) = 512 memory location
  then update the value so its O(1)
  writing new value on the top of the old one

- How do you remove an element from a List at a given index? What is its time complexity?
  search the item in the list O(1) then removing from the list o(1)
  how to remove, calculate the offset, then add 5 at index 2 then shifting everything up and down so its linear
  then remove one at 2 index so we shift everything down so its O(n)

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
