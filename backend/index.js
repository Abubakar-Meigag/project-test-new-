require("dotenv").config();
const express = require("express");
const app = express();

const cors = require("cors");
const port = process.env.PORT || 5999;
const pool = require("./database/db");
const bodyParser = require("body-parser");

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || origin === "http://localhost:3001") {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
pool.connect();

app.listen(port, () => {
  console.log(`Server is running on Port: ${port}`);
});

app.get("/", (req, res) => {
  res.send(`Welcome to test Project server on port  ${port}`);
});

app.post("/api/storeUser", async (req, res) => {
  try {
    const { name, email, picture, sub } = req.body;
    const existingUserQuery = "SELECT * FROM users WHERE email = $1";
    const existingUserResult = await pool.query(existingUserQuery, [email]);
    const existingUser = existingUserResult.rows[0];
    
      if (existingUser) {
        console.log("User already exists. You might want to update the existing record.");
        return res.status(400).send("User already exists.");
      }
    
    const insertQuery =
      "INSERT INTO users (name, email, picture, sub) VALUES ($1, $2, $3, $4) RETURNING *";

    const result = await pool.query(insertQuery,
      [ name, email, picture, sub ]);

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});
