const { Router } = require("express");
const router = Router();

router.get("/dashboard", (req, res) => {
  res.render("dashboard", {
    title: "dashboard sahifa",
    eDashboard: true,
    style: "dashboard"
  });
});

module.exports = router;