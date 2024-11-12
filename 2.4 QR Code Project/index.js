/* 
1. Use the inquirer npm package to get user input. ✅
2. Use the qr-image npm package to turn the user entered URL into a QR code image. ✅
3. Create a txt file to save the user input using the native fs node module. ✅
*/

import inquirer from 'inquirer';
import qr  from 'qr-image';
import fs from 'node:fs';

const questions = [
    {
      type: 'input',
      name: 'src_qrcode',
      message: "Please put text want to generate to QR code",
    }
]

inquirer.prompt(questions)
.then((answers) => {
    // 🟥test what all of key & value in json
    // console.log(JSON.stringify(answers, null, '  '));
    // 🟥test printf out of key:src_qrcode
    // console.log(answers.src_qrcode);
    var qr_png = qr.image(answers.src_qrcode, { type: 'png' });
    qr_png.pipe(fs.createWriteStream((answers.src_qrcode).replace(/ /g,"_")+'.png'));

    fs.writeFile(
      (answers.src_qrcode).replace(/ /g,"_")+'.txt'
      ,answers.src_qrcode
      ,'utf8'
      , (err) => {
        if (err) throw err;
    })
   
  })
.catch((error) => {
    console.log(error.message)
  })
  ;



