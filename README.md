# block-quote
simple indent sanitization for multi line strings.

## Installation

    npm install --save @cdxoo/block-quote

## Usage

```javascript
const bq = require('@cdxoo/block-quote');
    
let str = bq`
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
// and string are nested; e.g.:
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
let str = bq`
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

