// const { compareSync } = require("bcrypt");
// const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const PORT = 8000;
const path = require("path");
const nodemailer = require("nodemailer");
const mysql = require("mysql2");
const cors = require("cors");
app.use(express.json());
app.use(cors());
const { sendOTPByEmail } = require("./emailSender");

const multer = require("multer");
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "2002",
  database: "dbms",
});

// --------------------------------------------------------------------------------------
app.post("/signup", (req, res) => {
  const { email, password } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000); // Generate a random

  const sql = "INSERT INTO log (email, password, otp) VALUES (?, ?, ?)";
  db.query(sql, [email, password, otp], (err, result) => {
    if (err) {
      res.status(500).send({ message: "Signup failed" });
    } else {
      sendOTPByEmail(email, otp); // Send OTP via email
      res.status(200).send({ message: "Signup successful" });
    }
  });
});

app.post("/verify-otp", (req, res) => {
  const { email, otp } = req.body;
  const ooo = "SELECT otp FROM log WHERE email = ?";
  db.query(ooo, [email, otp], (err, result) => {
    if (err) {
      res.status(500).send({ message: "OTP verification failed" });
    } else {
      if (otp == result[0].otp) {
        res.status(200).send({ message: "OTP verification successful" });
      } else {
        res.status(500).send({ message: "wrong verification..........." });
      }
    }
  });
});

// Login API
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM log WHERE email = ? AND password = ?";
  db.query(sql, [email, password], (err, result) => {
    if (err) {
      res.status(500).send({ message: "Login failed" });
    } else if (result.length > 0) {
      res.status(200).send({ message: "Login successful" });
    } else {
      res.status(400).send({ message: "Invalid email or password" });
    }
  });
});

// ------------------------------------------------------------------------------------
app.get("/", (req, res) => {
  console.log("this is home");
  return res.json("this is home");
});

app.get("/i/:Name", (req, res) => {
  const q = "SELECT * FROM items where catagory = ?";
  const itemName = req.params.Name;

  db.query(q, [itemName], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    } else {
      // console.log(data);
      return res.json(data);
    }
  });
});

app.get("/items", (req, res) => {
  const q = "SELECT * FROM items";

  db.query(q, (err, data) => {
    if (err) {
      // console.log(err);
      return res.json(err);
    } else {
      // console.log(data);
      return res.json(data);
    }
  });
});

app.post("/items", upload.single("cover"), (req, res) => {
  const q =
    "INSERT INTO items (`Name`,`Description`,`Price`,`cover`,`catagory`,`year`,`condition`,`color`,`more`) VALUES (?)";

  const value = [
    req.body.Name,
    req.body.Description,
    req.body.Price,
    req.file.filename,
    req.body.catagory,
    req.body.year,
    req.body.condition,
    req.body.color,
    req.body.more,
  ];

  db.query(q, [value], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    } else {
      return res.json("added successfulyy");
    }
  });
});

app.delete("/items/:ID", (req, res) => {
  const itemID = req.params.ID;
  const q = "DELETE FROM items WHERE ID = ?";

  db.query(q, [itemID], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json("deleted successfulyy");
    }
  });
});

app.put("/items/:ID", (req, res) => {
  const itemID = req.params.ID;

  const q = "UPDATE items SET `Name`=?,`Description`=?,`Price`=? WHERE ID = ?";

  const value = [req.body.Name, req.body.Description, req.body.Price];

  db.query(q, [...value, itemID], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    } else {
      console.log(data);
      return res.json("Updated successfulyy");
    }
  });
});

app.put("/buy/:ID", (req, res) => {
  const itemID = req.params.ID;

  const q =
    "INSERT INTO buy (`Name`,`mail`,`mobile`,`address`,`city`,`state`,`pin`) VALUES (?)";

  const value = [
    req.body.name,
    req.body.mail,
    req.body.mobile,
    req.body.address,
    req.body.city,
    req.body.state,
    req.body.pin,
  ];

  db.query(q, [value], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json("Updated successfulyy");
    }
  });
});

app.get("/search", (req, res) => {
  const searchTerm = req.query.term;
  const query = `SELECT * FROM items WHERE Name LIKE '%${searchTerm}%'`;

  db.query(query, (err, results) => {
    if (err) {
      console.log(err);
      return res.json(err);
    } else {
      // console.log(results);
      return res.json(results);
    }
  });
});

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  // You can perform validation on the incoming data if necessary
  const q = "INSERT INTO contact (name, phone, msg) VALUES (?, ?, ?)";

  db.query(q, [name, email, message], (err, result) => {
    if (err) {
      console.error("Error sending message:", err);
      res.status(500).json({ error: "Failed to send message" });
      return;
    }
    res.json({ message: "Message sent successfully" });
  });
});

app.get("/view/:id", (req, res) => {
  const id = req.params.id;

  const q = "SELECT * FROM items WHERE ID = (?)";

  db.query(q, [id], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    } else {
      // console.log(data);
      return res.json(data);
    }
  });
});

app.listen(PORT, () => {
  console.log(`port is running on ${PORT}`);
});
