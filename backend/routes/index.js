const emailVerifierController = require("../controllers/index")

module.exports = function (app) {
  app.post("/api/verify", emailVerifierController.emailVerifier)
}
