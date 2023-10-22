import User from '../models/UserModel.js';

class UserManager {
  static id = 0;

  createUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({
        statusCode: 400,
        message: 'Missing email or password',
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.json({ statusCode: 400, message: 'Invalid email address' });
    }

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
      return res.json({
        statusCode: 400,
        message:
          'Invalid password. Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, one numeric digit, and one special character.',
      });
    }

    try {
      const userExists = await User.exists({ email });

      if (userExists) {
        return res.json({
          statusCode: 403,
          message: 'User with the same email already exists.',
        });
      }

      const newUser = await User.create({ email, password });

      res.json({
        email: newUser.email,
        message: 'User created successfully',
      });
    } catch (error) {
      console.error(error);
      res.json({
        statusCode: 500,
        message: 'Server Error - user',
      });
    }
  };
}

const users = new UserManager();

export default users;
