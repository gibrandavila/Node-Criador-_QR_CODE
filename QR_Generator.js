import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      type: "input",
      name: "urlLink",
      message: "Type in the URL link:",
    },
  ])
  .then((answers) => {
    let qrPNG = qr.image(answers.urlLink, { type: "png" });
    qrPNG.pipe(fs.createWriteStream("QR_code.png"));
    console.log("sua QR image foi criada"); 
     fs.writeFile("LinkIserido", answers.urlLink, (err) => {
      if (err) throw err;
      console.log("the file has been saved");
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("error");
    } else {
      console.log("error");
    }
  });
