const Verifier = require("email-verifier")

const controller = {
  emailVerifier: async function (req, response) {
    const { email } = req.body

    function verify(email) {
      let verifier = new Verifier(process.env.API_KEY)
      verifier.verify(email, (err, data) => {
        if (err) throw err
        console.log(data)
        if (data.smtpCheck === "true") {
          response.send("Valid Email Address.")
        } else {
          response.send("Invalid Email Address.")
        }
      })
    }

    if (!email) {
      response.status(400).send({ error: "Bad Data" })
    } else {
      verify(email)
    }
  },
}
module.exports = controller
