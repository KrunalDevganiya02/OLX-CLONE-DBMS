// ovtp muie ymwr rdwe

const express = require("express");
const app = express();
const PORT = 8000;
const mysql = require("mysql");
const session = require("express-session");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const jwt = require("jsonwebtoken");
const cors = require("cors");
app.use(bodyParser.json());
app.use(cors());

const items = [];

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.post("/list", (req, res) => {
  let { name, description, starting_bid, img } = req.body;
  let item = { name, description, starting_bid, img };

  items.push(item);
  res.json({ message: "Item listed successfully" });
  console.log(name, description, starting_bid);
  console.log(items);
});

// Place bid
app.post("/bid", (req, res) => {
  let { item_name, bidder, bid } = req.body;
  console.log(item_name, bidder, bid);
  new_bid = Number(bid);
  console.log(item_name, bidder, new_bid);

  const item = items.find((i) => i.name == item_name);
  old_bid = Number(item.starting_bid);
  console.log(typeof item.old_bid);
  console.log(typeof new_bid);

  if (item) {
    if (new_bid > item.starting_bid) {
      item.starting_bid = new_bid;
      res.json("Bid placed successfully");
    } else {
      res.json("Bid amount must be higher than the current bid");
    }
  } else {
    res.json("Item not found");
  }
  console.log(item.name);
  console.log(items);
});

app.use("/show", (req, res) => {
  res.send(items);
  // res.send(items.starting_bid)
});

// ----------------------------------------------------------------------------------

// Dummy database for demonstration purposes (replace with a database in a real-world scenario)
const users = [];

// Passport local strategy for username/password login
passport.use(
  new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
    const user = users.find((user) => user.email === email);
    if (!user) {
      return done(null, false, { message: "Incorrect email." });
    }

    bcrypt.compare(password, user.password, (err, result) => {
      if (err) throw err;
      if (result) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Incorrect password." });
      }
    });
  })
);

// Passport serialize user
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  const user = users.find((user) => user.id === id);
  done(null, user);
});

// Set up Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "krunaldphoto@gmail.com",
    pass: "ovtp muie ymwr rdwe",
  },
});

// Endpoint for user signup
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  // Check if email already exists
  if (users.some((user) => user.email === email)) {
    return alert({ message: "Email already exists." });
    // res.status(400).json
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user
  const newUser = {
    id: users.length + 1,
    email,
    password: hashedPassword,
  };

  users.push(newUser);

  // Send email verification
  verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
  const mailOptions = {
    from: "krunaldphoto@gmail.com",
    to: email,
    subject: "OTP from Krunal",
    text: `Your verification code is: ${verificationCode}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Error sending email" });
    } else {
      console.log("Email sent: " + info.response);

      // Return a token for further authentication
      const token = jwt.sign({ userId: newUser.id }, "your_secret_key"); // Replace with a secure secret key
      res.json({
        message: "Email sent successfully. Please verify your email.",
        token,
      });
    }
  });
});

app.post("/very", (req, res) => {
  const { otp } = req.body;
  // console.log(global.verificationCode);

  if (global.verificationCode == otp) {
    // *************************************************
    return true;
  } else {
    // res.send("wrong otp");
    res.json({ message: "very UnSuccess, wrong otp" });
  }
});

// Endpoint for user login
app.post("/login", passport.authenticate("local"), (req, res) => {
  // If authentication is successful, return a token
  const token = jwt.sign({ userId: req.user.id }, "your_secret_key"); // Replace with a secure secret key
  res.json({ message: "Login successful", token });
});

// -------------------------------------------------------------------------------------

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(items);
  console.log(global.verificationCode);
});
