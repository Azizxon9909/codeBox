const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.render("index", {
    title: "index sahifa",
    eIndex: true,
    style: "index"
  });
});

module.exports = router;