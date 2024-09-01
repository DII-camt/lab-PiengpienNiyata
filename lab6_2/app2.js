const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
//ไม่มี file user.jsonให้สร้างไฟล์
app.use((req, res, next) => {
  const indexPath = path.join(dirname, "user.json");
  fs.access(indexPath, fs.constants.F_OK, (err) => {
    if (err) {
      fs.writeFile(indexPath, JSON.stringify([{ id: 1, name: "A" }]), (err) => {
        if (err) {
          console.error(err);
          res.status(500).send("Error creating index.html");
          return;
        }
        console.log("index.html created successfully");
        next(); // ส่งต่อไปยัง middleware ถัดไปหรือเส้นทางต่อไป
      });
    } else {
      next();
    }
  });
});
app.get("/getUsers", (req, res) => {
  const json_user = JSON.parse(
    fs.readFileSync(path.join(dirname, "user.json"))
  );
  res.json(json_user);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  //console.log(Server is running on port ${PORT});
});

// PUT update data
//localhost:3000/Users:2
app.get('/Users/:id', (req, res) => {
    const itemId = req.params.id;
    const updatedItem = req.body;

    let data = fs.readFileSync(path.join(__dirname, 'user.json'));
    let items = JSON.parse(data);

    console.log(items);

    let result = [];

    // index = -1 not found
    // const index = items.findIndex(item => item.id === itemId);
    // items[index] = { ...items[index], ...updatedItem };
    // items[index] = updatedItem; //กรณีนี้ทับเลย
    //--code here—
    res.json();
    });