require("dotenv").config();
const express = require("express")
const app = express()

// Get all members
app.get("/api/v1/members", (req, res) => {
    res.status(200).json({
        status: "success",
        data: {
            member: ["philip", "dakota", "user321"],
        },
    });
});

// Get a member
app.get("/api/v1/members/:memberid", (req, res) => {
    console.log(req.params);
    //res.status(200).json({
    //    status: "success",
    //    data: {
    //        member: ["philip", "dakota", "user321"],
    //    },
    //});
});

// Create a member
app.post("/api/v1/members", (req, res) => {
    console.log(req);
});

const port = 3005
app.listen(port, () => {
    console.log(
        `server is up and listening on port ${port}`);
});

