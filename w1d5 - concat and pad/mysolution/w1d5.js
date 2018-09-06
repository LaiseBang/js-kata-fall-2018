"use strict";

//define variable
const text = "image#";
const hastag = /#/gi;
const number = [];

//call the function
concatNPad();
//make function init

//make function concatNPad
function concatNPad() {
  //recive text string
  //const hastag = text.substring(5);
  console.log(text.replace(hastag, number));
}
/*Make a function that receives a 'pattern'-string and a number.  
It returns a string based on the pattern, with # replaced by the number, padded to atleast two digits.

Examples:

```javascript
concatNPad("image#.jpg", 3);
```

would return `'image03.jpg'`

Test the function directly in the console, call it with various patterns and numbers.

#### Hints

Use some or more of these String-methods:

- `.indexOf`
- `.substring`
- `.replace`
- `.padStart`
- `.padEnd`

#### Test

Test the function with these inputs, and make sure you get the corresponding output:

| Pattern           | Number | Output               |
| ----------------- | -----: | -------------------- |
| 'image#.jpg'      |      3 | 'image03.jpg'        |
| 'image#.jpg'      |     12 | 'image12.jpg'        |
| 'image#.jpg'      |    123 | 'image123.jpg'       |
| '#\_chapter.txt'  |      1 | '01_chapter.txt'     |
| '#\_chapter.txt'  |     10 | '10_chapter.txt'     |
| 'myfile_backup.#' |      8 | 'myfile_backup.08'   |
| 'myfile_backup.#' |     39 | 'myfile_backup.39'   |
| 'myfile_backup.#' |   2018 | 'myfile_backup.2018' |
*/
