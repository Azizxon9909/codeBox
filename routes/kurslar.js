const { Router } = require("express");
const router = Router();

router.get("/kurslar", (req, res) => {
  res.render("kurslar", {
    title: "kurslar sahifa",
    eKurslar: true,
    style: "index3"
  });
});

module.exports = router;