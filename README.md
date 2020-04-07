# block-quote
Simple indent sanitization for multi line strings via tag for template literals in es6.

## Installation

    npm install --save @cdxoo/block-quote

## Usage

```javascript
const bq = require('@cdxoo/block-quote');
    
let str1 = bq`
    alice
        foo
        bar
    bob
        baz
`;
//    | <- beginning of the line
// => |alice
//    |    foo
//    |    bar
//    |bob
//    |    baz

// also works when code itself is indented deeper
// and placeholders are used; e.g.:
let getInner = () => (
    (
        (
            bq`
                inner {
                    foo
                    bar
                }
            `
        )
    )
);
let str1 = bq`
    outer {
        ${ getInner() }
    }
`;
// => |outer {
//    |    inner {
//    |        foo
//    |        bar
//    |    }
//    |}
```

