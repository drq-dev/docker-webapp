import express, { response } from "express";

import axios from "axios";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/", async (req, res) => {
  const jokesApiResponse = await axios(
    "https://v2.jokeapi.dev/joke/Any?lang=de&blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"
  );

  console.log(jokesApiResponse.data.joke);
  res.json({ joke: jokesApiResponse.data.joke });
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
