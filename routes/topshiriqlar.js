const { Router } = require("express");
const router = Router();

router.get("/topshiriqlar", (req, res) => {
  res.render("topshiriqlar", {
    title: "topshiriqlar sahifa",
    eTopshiriqlar: true,
    style: "index5"
  });
});

module.exports = router;