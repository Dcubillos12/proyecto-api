const server = require("./src/app");
const { coon } = require("./src/db");

const PORT = 3001;

server.listen(PORT, () => {
    coon.sync({ force: true });
    console.log(`Server running on port ${PORT}`)
})