const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");

/*
 * update user details
 * */
router.put("/:id", async (req,res) => {
    if (req.body.userId === req.params.id) {
        if (req.body.password)
        /* update password */
    {
        const salt = await bcrypt.genSalt(5);
        req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true}
        );
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json(err);
    }
    } else {
        res.status(401).json("you can only update the account you own");
        console.log("can't update")
    }
});


/*
 * delete an account
 * */
router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            try {
                await Post.deleteMany({ username: user.username}); /* deletes all posts under that user */
                await User.findByIdAndDelete(req.params.id);
                res.status(200).json("user deleted");
            } catch (err) {
                res.status(500).json(err);
            }
        } catch (err) {
            res.status(404),json("user not found");
        }
    } else {
        res.status(401).json("can't delete user");
    }
});

/*
 * get single user by id
 * */
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err);
    }
}); 

module.exports = router;