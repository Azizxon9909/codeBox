const { Router } = require("express");
const router = Router();

router.get("/xato", (req, res) => {
  res.render("xato", {
    title: "xato sahifa",
    eXato: true,
    //style: "index5"
  });
});

module.exports = router;