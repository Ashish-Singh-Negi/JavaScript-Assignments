// ## Write to a file

// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');
const path = require('node:path');

async function write() {

    await fs.writeFile(path.join(__dirname, "a.txt"), "Hello world for 4-write-to-file", "utf-8", (err) => {
        console.log(err)
    })
}

write()