const router = require("express").Router();
const User = require("../model/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const verify = require("./verifyToken");

const { registerValidation, loginValidation } = require("../validation");

router.post("/register", async (req, res) => {
  const validation = registerValidation(req.body);
  if (validation.error) {
    return res.status(400).send(validation.error.details[0].message);
  }

  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exists");

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });
  try {
    const savedUser = await user.save();
    res.send({ user: user._id });
  } catch (e) {
    res.status(400).send(err);
  }
});

router.post("/login", async (req, res) => {
  const validation = loginValidation(req.body);
  if (validation.error) {
    return res.status(400).send(validation.error.details[0].message);
  }

  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Email not found");

  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Password is wrong");

  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header("auth-token", token).send({ token: token });
});

router.get("/me", verify, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    res.json({ response: "success" });
  } catch (e) {
    res.send({ message: "Error in Fetching user" });
  }
});

module.exports = router;
