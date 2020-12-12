// Start your es6 scripts here
import express from 'express';

const app = express()

// a bare minimum express get request
app.get('/', (req,res) => {
    res.send("Up and running with graphql")
});

// determine the port to listen to
app.listen(8000, () => console.log("Running at 8000"));