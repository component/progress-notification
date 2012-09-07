
# ProgressNotification

  Progress notification component with a clean slate to build off of.

  ![progress notification component](http://f.cl.ly/items/0R0k131Q41452x1D303u/Screen%20Shot%202012-09-07%20at%2011.30.02%20AM.png)

## Installation

```
$ component install component/progress-notification
```

## Features

  - all the features of [notification](http://github.com/component/notification)

## Example

```js
var notify = require('progress-notification');

var progress = notify('Uploading maru.png');
var n = 0;
setInterval(function(){
  progress.update(n++);
}, 50);
```

## API

### notify(msg)

  Notify with the given `msg` and no title.

### notify(title, msg)

  Notify with the given `msg` and `title`.

### ProgressNotification#update(n)

  Update percentage to `n`.

### ProgressNotification#size(n)

  Update progress indicator size to `n`.

## License

  MIT
