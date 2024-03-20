import express from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is listening in on port ${port}`);
});

const wonderland = [
  {
    id: 1,
    name: "Alice",
    kind: "human",
  },
  {
    id: 2,
    name: "Mad Hatter",
    kind: "human",
  },
  {
    id: 3,
    name: "Cheshire Cat",
    kind: "cat",
  },
  {
    id: 4,
    name: "Queen of Hearts",
    kind: "human",
  },
  {
    id: 5,
    name: "White Rabbit",
    kind: "rabbit",
  },
  {
    id: 6,
    name: "Caterpillar",
    kind: "caterpillar",
  },
  {
    id: 7,
    name: "Duchess",
    kind: "human",
  },
  {
    id: 8,
    name: "Tweedledee",
    kind: "human",
  },
  {
    id: 9,
    name: "Tweedledum",
    kind: "human",
  },
];

app.get("/api/wonderland", (req, res) => {
  res.send(wonderland);
});

app.get("/api/wonderland/:id", (req, res) => {
  let id = req.params.id;
  let character = wonderland.find((character) => character.id == parseInt(id));
  res.send(character);
});

app.post("/api/wonderland", (req, res) => {
  const character = {
    id: wonderland.length + 1,
    name: req.body.name,
    kind: req.body.kind,
  };
  wonderland.push(character);
  res.send(character);
});

app.use(express.json());

// app.put("/api/wonderland/:id", (req, res) => {
//   let { id } = req.params;
//   const character = wonderland.find((e) => e.id === parseInt(id));
//   character.name = req.body.name;
//   res.send(character);
// });
