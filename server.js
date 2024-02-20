
const app = require("./app")

require("dotenv").config()

const API_KEY = process.env.API_KEY;
const PORT = process.env.PORT;

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Server launched and listening on port ${port}`)
})