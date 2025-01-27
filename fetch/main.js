'use strict';
async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users'); // default for fetch() is GET method
    if (!response.ok) {
      throw new Error(`HTTP error status:${response.status}`);
      // using template literal lets us avoid the error type here
    }
    // console.log(response); // here output the status is 200 okay
    // console.log(response.ok); // return true because ok is boolean
    // const data:Data[] = (await response.json()) as Data; //using Data[] to access each index
    const data = await response.json();
    console.log(data); // the output is not organized as the data model on the top when we collapse each array element ?
    // console.log(data[0].company.catchPhrase); // accessing the array data
  } catch (error) {
    console.error('Error:', error);
  }
}
console.log(fetchData());
// const newData = fetchData();
// console.log(newData); // unable to access the data ?
