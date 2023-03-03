import User from "../mongodb/models/user.js";
const createUser = async (req, res) => {
  try {
    const { username, password, rememberMe } = req.body;

    const userExists = await User.findOne({ username });

    if (userExists) return res.status(200).json(userExists);

    const newUser = await User.create({
      username,
      password,
      rememberMe,
    });

    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {createUser} ;
