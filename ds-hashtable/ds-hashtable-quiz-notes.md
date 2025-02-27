# ds-hashtable-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Briefly describe the Hash Table data structure.
  hashes the key and the index tells where the keys are stored

- What are some examples of when you would use a Hash Table?
  google search the word keys and values are document
  phone directory
  whenever having key/value table

- How do you read a key's value in a Hash Table? What is its time complexity?
  keys and the hash function get the keys and get us the value from bucket array
  how many keys stored in the bucket

- How do you add a key/value into a Hash Table? What is its time complexity?
  we just add key[index] = value and complexity is o(1)
  we send the key to the hash function that looks up the value in the bucket
  get index from hash and store it in bucket list
  hash function take input and put the value in bucket
  hash table in our exercise is only contain values, but the normal way is object in each index {key, value}
  hash table contains two things: hash function, and bucket list

- How do you update a key's value in a Hash Table? What is its time complexity?
  send the key to the hash function that returns the index(the value) that contains the value,
  O(1)
- How do you remove a key/value from a Hash Table? What is its time complexity?
  sends the key to hash functions that return a key, then delete

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
