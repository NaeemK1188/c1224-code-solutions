# ds-bst-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Briefly describe the Binary Search Tree data structure.
  each node has a value. the value on the right is less that the current node root
  start at root if it equals no, check right branch, then left branch

- What are some examples of when you would use a Binary Search Tree?

  calendar or everything in order. oBject not in order,

- How do you determine if an element is in a Binary Search Tree? What is its time complexity?
  Every steps we remove the other side. So, we check if the right branch
  its greater than the current value, and if its right, we check only the right branch
  If the value is leas than the current value we only check the right branch
  complexity is o(log n)
- How do you add an element into a Binary Search Tree? What is its time complexity?
  navigate down to put it its O(log n)
  once we find it its O(1) so its O(log n)

- How do you remove an element from a Binary Search Tree? What is its time complexity?
  locate one we want to remove, then remove it O(log n), then removing its O(1)

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
