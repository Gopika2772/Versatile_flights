const db = require("../db");
const bcrypt = require("bcrypt");


export const register = (req, res) => {
    var q = "SELECT * FROM user WHERE email = ? OR username = ?";

    db.query(q, [req.body.email, req.body.username], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length) return res.status(409).json("User already exists!");


        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        q = "INSERT INTO user(`username`,`email`,`password`) VALUES (?)";
        const values = [req.body.username, req.body.email, hash];

        db.query(q, [values], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json("User has been created.");
        });
    });
}
export const login = (req, res) => {
    const query = "SELECT * FROM  user WHERE email=? "
    db.query(q, [req.body.username], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length === 0) return res.status(404).json("User not found!");


        const isPasswordCorrect = bcrypt.compareSync(
            req.body.password,
            data[0].password
        );

        if (!isPasswordCorrect)
            return res.status(400).json("Wrong username or password!");
    });
};