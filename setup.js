var CryptoJS = require("crypto-js");
const fs = require("fs");

if (
  typeof process.argv[2] !== "undefined" &&
  typeof process.argv[3] !== "undefined"
) {
  if (process.argv[2] === "encrypt") {
    var ciphertext = CryptoJS.AES.encrypt(
      process.argv[3],
      process.argv[4]
    ).toString();
    console.log(ciphertext);
    //store in a file
    fs.writeFileSync(__dirname + "/slackToken.txt", ciphertext, "utf8");
  } else {
    var originalText = fs.readFileSync(__dirname + "/slackToken.txt", "utf8");
    var bytes = CryptoJS.AES.decrypt(originalText, process.argv[3]);
    originalText = bytes.toString(CryptoJS.enc.Utf8);
    console.log(originalText); // 'my message'
  }
}
