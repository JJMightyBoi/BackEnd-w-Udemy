# BackEnd-w-Udemy
___
เป็น Repo สำหรับ ฝึกการเขียน Backend มา จาก **The Complete 2024 Web Development Bootcamp** ใน Udemy
[link course here](https://www.udemy.com/course/the-complete-web-development-bootcamp/?couponCode=ST20MT111124A)
ไม่มีอะไร กูแค่อยากฝึก up ขึ้น github บ้าง **¯\\__(ツ)_/¯**

### 2024-11-29
- ได้เรียนรู้การใช้ EJS (Embbed Javascript templates)
- มีปัญหาเรื่องการใช้รูป ES Module [type:module] กับ CommonJS [type:commonjs] การใช้งานพวก import กับ require มันต่างกัน เช่น

|ES module  |CommonJS  |
|--|--|
|`import { dirname, join } from  "path";`  |`const  path  =  require('path');`  |
|		`const  __dirname  =  dirname(fileURLToPath(import.meta.url));` |	`app.set('views', path.join(__dirname, 'views copy'));`								|
> แม่งเรียกใช้ไม่เหมือนกัน งงชิบหาย 🤔🤔🤔
- ExpressJS เวลาใช้ res.render(); เหมือนจะเจาะจงให้ใช้ folder ที่มีชื่อว่า `views` เท่านั้น ถ้าใช้folderขื่ออื่น ต้องไป app.set()... `ตัวอย่างที่ ./4.0 EJS_2nd/index.js`

> Written with [StackEdit](https://stackedit.io/).

### 2024-11-21
 - เรียนรู้ middlewares การส่งระหว่าง app.post(req,res)... app.get(req,res)... 
 - การ import package มาใช้
 - typo คือปัญหาหลักในการเขียนโค้ดมาก (พิมพ์มั่วชิบหาย)
 - รู้จัก check package แล้ว
 - ควรหันใช้พวก boolean เยอะๆ
 **❕Note** 3.5 Secrets Project ไฟล์ index_sample.js เป็นไฟล์แรกที่ทำ+ ก็อป solutionมาดัดแปลง

### 2024-11-15
- เรียนรู้พวกการสร้างServer HTTP request ด้วย Express.js 
- สร้าง REST API ,request method และ response status code ต่างๆ 
- การใช้ postman ร่วมการเทส อ้างอิง [link Postman](https://www.postman.com/material-participant-17611053/learning-webdev/overview)