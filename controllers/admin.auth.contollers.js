const db = require("../db");
const bcrypt = require("bcrypt");


export const register = (req, res) => {
    var q = "SELECT * FROM admin WHERE email = ? OR adminName = ? OR adminId=?";

    db.query(q, [req.body.email, req.body.adminName, req.body.adminId], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length) return res.status(409).json("Admin already exists!");


        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        q = "INSERT INTO admin(`adminId`,`adminName`,`email`,`password`) VALUES (?)";
        const values = [req.body.adminId, req.body.adminName, req.body.email, hash];

        db.query(q, [values], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json("Admin Authorized.");
        });
    });
}
export const login = (req, res) => {
    const query = "SELECT * FROM  admin WHERE adminId=? OR adminName=? "
    db.query(q, [req.body.adminName, req.body.adminId], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length === 0) return res.status(404).json("Admin not found!");

        const isPasswordCorrect = bcrypt.compareSync(
            req.body.password,
            data[0].password
        );
        if (isPasswordCorrect(req.body.password)) {
            res.status(200).json("Admin Logged in");
        }

        if (!isPasswordCorrect)
            return res.status(400).json("Wrong  Admin username or password!");
    });
};