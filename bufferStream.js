const fs = require("fs")

const ourReadStream = fs.createReadStream(`./myFile.txt`, "utf-8")

ourReadStream.on("data", (data) => {
    console.log(data);
})