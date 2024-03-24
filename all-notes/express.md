# Express Notes

- While creating an express server this 2 lines we always have to write.

```javascript
const express = require("express");

const app = express(); // Creating our own app

app.listen(3000); // listening to a specific port which has to be different if we are running different local https at a time from our machine.
```

So if we enter localhost:3000 on our machine we will get an error as routes are not setup.
