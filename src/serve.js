function createServe(filePath, port) {
  const express = require("express");
  const fs = require("fs");
  const path = require("path");
  const app = express();

  const svgDirPath = path.resolve(process.cwd(), filePath);

  app.set("view engine", "ejs");
  app.set("views", path.resolve(__dirname, "./views"));

  const svgList = [];
  function isSvg(file) {
    return file.split(".").slice(-1)[0] === "svg";
  }

  function readSvg(svgDirPath) {
    if (!fs.existsSync(svgDirPath)) {
      console.error(`${svgDirPath} not found.`);
      return;
    }
    const svgs = fs.readdirSync(svgDirPath);
    svgs.forEach((svg) => {
      const svgPath = path.join(svgDirPath, svg);
      const stat = fs.statSync(svgPath);
      if (stat.isDirectory()) {
        readSvg(svgPath);
      }
      if (stat.isFile() && isSvg(svgPath)) {
        const svgFile = fs.readFileSync(svgPath, "utf8");
        const { name } = path.parse(svgPath);
        svgList.push({
          name: name,
          value: svgFile,
        });
      }
    });
  }
  readSvg(svgDirPath);
  console.log(svgList);
  app.get("/", function (req, res) {
    res.render("svg", {
      svgList: svgList,
    });
  });
  app.listen(port, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", port);
  });
}
module.exports = {
  createServe: createServe,
};
