# focus-follow

This library creates a node to pursue the `document.activeElement` state, allowing keyboard users to visualize their active `:focus` location and track the transition between two focusable nodes while interacting with a website as a keyboard user.

|                      Resources                       |
| :--------------------------------------------------: |
| [Example](https://codesandbox.io/s/focus-flow-f43m5) |

## Testing

Testing suite utilizes the [Jest](https://jestjs.io/) testing library and can be executed using `yarn test`

Source coverage target: **95%**

```sh
$ jest --coverage --no-cache
 PASS  src/script/helper/index.test.js
  Helper utility method
    ✓ renders empty string when set is undefined (2 ms)
    ✓ renders empty string when set is null
    ✓ renders empty string when set is empty string
    ✓ renders empty string when set isempty array
    ✓ renders empty string when set it empty string
    ✓ renders items of array
    ✓ renders items of array with prefix
    ✓ renders item of string with suffix

 PASS  src/module/icon/index.test.js
  Icon element module
    ✓ renders empty string when svgIconId is undefined (1 ms)
    ✓ renders empty string when svgIconId is null
    ✓ renders empty string when svgIconId is empty string
    ✓ renders icom string when svgIconId is reference (1 ms)
    ✓ renders icon string when svgIconId is id reference

 PASS  src/module/button/index.test.js
  Button element module
    ✓ renders empty string when undefined (1 ms)
    ✓ renders empty string when innerText is null (1 ms)
    ✓ renders empty string when innerText is empty string
    ✓ renders button string when innerText is string

 PASS  src/index.test.js
  App index
    ✓ App is defined (1 ms)

-------------------|---------|----------|---------|---------|-------------------
File               | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-------------------|---------|----------|---------|---------|-------------------
All files          |     100 |      100 |     100 |     100 |
 src               |     100 |      100 |     100 |     100 |
  index.js         |     100 |      100 |     100 |     100 |
 src/module/button |     100 |      100 |     100 |     100 |
  index.js         |     100 |      100 |     100 |     100 |
 src/module/icon   |     100 |      100 |     100 |     100 |
  index.js         |     100 |      100 |     100 |     100 |
 src/script/helper |     100 |      100 |     100 |     100 |
  index.js         |     100 |      100 |     100 |     100 |
-------------------|---------|----------|---------|---------|-------------------

=============================== Coverage summary ===============================
Statements   : 100% ( 8/8 )
Branches     : 100% ( 30/30 )
Functions    : 100% ( 4/4 )
Lines        : 100% ( 8/8 )
================================================================================
Test Suites: 4 passed, 4 total
Tests:       18 passed, 18 total
Snapshots:   0 total
Time:        0.747 s
Ran all test suites.
✨  Done in 1.10s.
```
