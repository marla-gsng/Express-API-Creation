import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const wonderland = [
  {
    id: 1,
    name: "Alice",
    kind: "human",
    description: "Alice is a curious and imaginative girl.",
  },
  {
    id: 2,
    name: "Mad Hatter",
    kind: "human",
    description: "The Mad Hatter is a hat maker who is always drinking tea.",
  },
  {
    id: 3,
    name: "Cheshire Cat",
    kind: "cat",
    description:
      "The Cheshire Cat is a mischievous cat who can disappear and reappear at will.",
  },
  {
    id: 4,
    name: "Queen of Hearts",
    kind: "human",
    description:
      "The Queen of Hearts is a tyrannical ruler who loves to play croquet.",
  },
  {
    id: 5,
    name: "White Rabbit",
    kind: "rabbit",
    description: "The White Rabbit is always in a hurry and is often late.",
  },
  {
    id: 6,
    name: "Caterpillar",
    kind: "caterpillar",
    description: "The Caterpillar is a wise creature who smokes a hookah.",
  },
  {
    id: 7,
    name: "Duchess",
    kind: "human",
    description: "The Duchess is an antagonist to the Queen of Hearts",
  },
  {
    id: 8,
    name: "Tweedledee",
    kind: "human",
    description: "Tweedledee is a twin who loves to recite poetry.",
  },
  {
    id: 9,
    name: "Tweedledum",
    kind: "human",
    description: "Tweedledum is the other twin who loves to recite poetry.",
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
  console.log(req.body);
  const character = {
    id: wonderland.length + 1,
    name: req.body.name,
    kind: req.body.kind,
  };
  wonderland.push(character);
  res.send(character);
});

app.use(express.json());

app.put("/api/wonderland/:id", (req, res) => {
  let { id } = req.params;
  const character = wonderland.find((e) => e.id === parseInt(id));
  character.name = req.body.name;
  res.send(character);
});

app.delete("/api/wonderland/:id", (req, res) => {
  let { id } = req.params;
  const character = wonderland.find((e) => e.id === parseInt(id));
  const index = wonderland.indexOf(character);
  wonderland.splice(index, 1);
  res.send(character);
});

app.listen(port, () => {
  console.log(`Server is listening in on port ${port}`);
});
