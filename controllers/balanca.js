exports.exampleFunction = (req, res) => {
    console.log(req.body);
    res.send("Example Return Value").status(200);
}