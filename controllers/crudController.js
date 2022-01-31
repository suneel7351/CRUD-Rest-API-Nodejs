const User = require("../models/user");

function crudController() {
  return {
    async create(req, res) {
      const { name, email, phone } = req.body;

      try {
        if (!name || !email || !phone) {
          return res.status(500).send("All field are mandatory");
        } else {
          const user = new User({ name, email, phone });
          const save = await user.save();
          if (save) {
            console.log("Created successfully");
            res.status(200).json({ message: "created successfully" });
          } else {
            console.log("something went wrong");
            res.status(500).json({ message: "something went wrong" });
          }
        }
        console.log(name, email, phone);
      } catch (error) {
        console.log(error);
      }
    },
    async update(req, res) {
      let ID = String(req.query.id);

      const { name, email, phone } = req.body;
      try {
        const updateUser = await User.updateOne(
          { _id: ID },
          {
            name,
            email,
            phone,
          }
        );
        if (updateUser) {
          return res.send({ message: "update successfully" });
        }
        return res.json({ error: "something went wrong" });
      } catch (error) {
        console.log(error);
      }
    },
    async delete(req, res) {
      const dltUser = await User.deleteOne({ _id: req.query.id });
      if (dltUser) {
        res.json({ message: "Deleted successfully" });
      } else {
        res.json({ message: "some problem occured" });
      }
    },
    async read(req, res) {
      const allUser = await User.find({});
      // console.log(allUser);
      res.send(allUser);
    },
    async find(req, res) {
      console.log(req.query.id);
      try {
        if (!req.query.id) {
          return res.json({ error: "id required" });
        } else {
          const user = await User.findOne({ _id: req.query.id });
          if (user) {
            res.send(user);
            console.log(user);
          } else {
            return res.json({ error: "user not found" });
          }
        }
      } catch (error) {
        return res.json({ message: "something went wrong" });
      }
    },
  };
}

module.exports = crudController;
