const fs = require("fs");
const [, , sourcePath, targetPath] = process.argv;

fs.readFile(sourcePath, "utf8", (err, data) => {
  const filteredData = data
    .split("\n")
    .filter(
      line =>
        line
          .split(",")[2]
          .trim()
          .toLowerCase() !== "yes"
    )
    .join("\n");

  fs.writeFile(targetPath, filteredData, err => {
    console.log(`Marked lines deleted`);
    console.log(`New file saved to "${targetPath}"`);
  });
});
