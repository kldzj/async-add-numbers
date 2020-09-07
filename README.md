## async-add-numbers
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fkldzj%2Fasync-add-numbers.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fkldzj%2Fasync-add-numbers?ref=badge_shield)


### Usage

Installation: `npm i --save async-add-numbers`

```javascript
const addNumbers = require('async-add-numbers')

addNumbers(1, 2)
  .then(answer => console.log(answer)); // 3

addNumbers(-1, -2)
  .then(answer => console.log(answer)); // -3
  
addNumbers("a", -1)
  .then(answer => console.log(answer))
  .catch(error => console.error(error)); // Either 'a' or 'b' is not a number
```


| Be sure to check out our even more useful REST API at [nmbr.dev](https://nmbr.dev/) |
| --- |

## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fkldzj%2Fasync-add-numbers.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fkldzj%2Fasync-add-numbers?ref=badge_large)