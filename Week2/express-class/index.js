// Creating an http server
// Express

const express = require("express");

const app = express();

// Get request for Sum
function sum(n) {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    ans += i;
  }
  return ans;
}

app.get("/", (req, res) => {
  const n = req.query.n; // this line will fetch the query parameter of n
  const ans = sum(n);
  res.send("Hi, your answer is " + ans);
});

const users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: true,
      },
    ],
  },
];

// Get and Post request for Kidneys health
app.get("/healthy-kidneys", (req, res) => {
  const johnKidneys = users[0].kidneys;
  const numbersOfKidneys = johnKidneys.length;
  let numbersOfHealthyKidneys = 0;
  for (let i = 0; i < numbersOfKidneys; i++) {
    if (johnKidneys[i].healthy) {
      numbersOfHealthyKidneys += 1;
    }
  }
  const numbersOfUnhealthyKidneys = numbersOfKidneys - numbersOfHealthyKidneys;
  res.json({
    numbersOfKidneys,
    numbersOfHealthyKidneys,
    numbersOfUnhealthyKidneys,
  });
});

// This middleware is needed to make the post request
app.use(express.json());

app.post("/healthy-kidneys", (req, res) => {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Done!",
  });
});

app.listen(3000);
