const { Router } = require("express");
const router = Router();

router.get("/bolimlar", (req, res) => {
  res.render("bolimlar", {
    title: "bolimlar sahifa",
    eBolimlar: true,
    style: "index4"
  });
});

module.exports = router;
