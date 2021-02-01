const { Router } = require("express");
const router = Router();

router.get("/tolovlar", (req, res) => {
  res.render("tolovlar", {
    title: "tolovlar sahifa",
    eTolovlar: true,
    style: "tolovlar"
  });
});

module.exports = router;