var express = require('express');
var router = express.Router();
const db = require('../database');


/* GET users listing. */
router.get('/', (req, res, next) => {
  db.query('SELECT * from daftar_mhs', (err, results, fields) => {
    if (err) {
      console.log('Database Error');
    }
    const data = { daftar_mhs: results };
    res.render('users', data)
  })
});


router.get('/add-form', (req, res, next) => {
  res.render('add')
})


router.post('/add', (req, res, next) => {
  db.query('INSERT INTO daftar_mhs SET ?', req.body,
    (err, results,) => {
      if (err) {
        console.log("Add error!");
      }
      console.log(results);
    })

  res.redirect("/users")
})

router.get('/edit-form/:nim', (req, res, next) => {
  const id = req.params.nim

  db.query(`SELECT * FROM daftar_mhs WHERE nim = "${id}"`,
    (err, results) => {
      res.render('update', { data: results[0] });
      if (err) {
        console.log("Edit get error!");
      }
      console.log(results);
    })
})

router.post('/edit-form/:nim', (req, res, next) => {
  const id = req.params.nim

  db.query(
    `UPDATE daftar_mhs SET ? WHERE nim = '${id}'`, req.body,
    (err, results) => {
      if (err) {
        console.log("Edit post error!");
      }
      console.log(results)
    }
  )

  res.redirect("/users")
})

router.get("/remove/:nim", (req, res) => {
  const id = req.params.nim;

  db.query(`DELETE FROM daftar_mhs WHERE nim ='${id}'`,
    (err, results) => {
      if (err) {
        console.log("Delete error!");
      }
      console.log(`'${id}' deleted`);
    }
  )
  res.redirect("/users")
})

module.exports = router;
