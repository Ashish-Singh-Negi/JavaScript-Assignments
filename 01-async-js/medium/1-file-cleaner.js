// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require('fs');
const path = require('node:path');

async function clearFile() {

    // read form file
    await fs.readFile(path.join(__dirname, "a.txt"), "utf-8", async (err, data) => {
        if (err) {
            console.error(err)
            return
        }

        if (!data) {
            console.log(data)
            console.log("file is empty")
            return
        }

        const cleanData = data.replace(/\s+/g, " ").trim()

        // write file with cleanData
        await fs.writeFile(path.join(__dirname, "a.txt"), cleanData, (err) => {
            if (err) {
                console.error(err)
                return
            }

            console.log("File cleaned successfully.");
        })

    })


}

clearFile()