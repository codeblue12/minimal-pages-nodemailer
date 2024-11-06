const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  requireTLS: true,
  logger: true,
  debug: true,
  auth: {
    user: "info@westninthvintage.net",
    pass: "pxfz duqz vifj hfgs",
  },
});

const westninthvintage = async (req, res) => {
  try {
    const nameInUpperCase = req.body.name.toUpperCase();
    let mailOptions = {
      from: "WestNinthVintage <info@westninthvintage.net>",
      to: req.body.email,
      subject: `${nameInUpperCase}, Thank You for Requesting a Custom Signage Quote!`,
      html: ` <p>Dear ${nameInUpperCase},</p>
      <br/>
      <br/>

    <p>
      Thank you for reaching out and claiming your 20% discount on custom signage!
      We’re thrilled to help bring your vision to life with a unique design tailored
      to your specifications.
    </p>
    <br/>
      <br/>

    <p><b><u>Your inquiry details are as follows:</u></b></p>
    <br/>
    <p>
      <span><b>Name:</b> ${nameInUpperCase}</span><br />
      <span><b>Email:</b> ${req.body.email}</span><br />
      <span><b>Custom Text:</b> ${req.body.customText}</span><br />
      <span><b>Color Preference:</b> ${req.body.color}</span><br />
    </p>

    <p>
      We are excited to craft another unique piece just for you! Our expert team is ready to provide the best experience and design options.
    </p>

    <p><b>Here’s what to expect next:</b></p>

    <p>
      <b>1) Confirmation</b>: Our team will verify your requirements and reach out if any additional details are needed.
    </p>
    <p>
      <b>2) Design Mockups</b>: Within the next 24 hours, you’ll receive custom design mockups directly in your inbox.
      Please check your spam or junk folder if you don’t see it.
    </p>
    <p>
      <b>3) Finalizing</b>: We will provide you with the best designs, so you can make an informed decision for your signage.
    </p>
    <p>
      <b>4) Revisions</b>: Once you’ve reviewed the initial mockups, simply reply to this email if you'd like any adjustments
      to the design, colors, or sizes.
    </p>

    <p>
      Questions or additional info to share? Just hit reply or call our support team at:
      <br /><b>Sales Support: 332-250-4309</b>
    </p>
    <br/>
      <br/>
      Best Regards.

            `,
    };

    // Verify the transporter before sending the email
    await transporter.verify();
    let info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);

    return res.send({
      type: "success",
      message: "Message Sent Successfully",
    });
  } catch (err) {
    console.error("Error:", err);

    return res.status(500).send({
      type: "error",
      message: "Internal Server Error",
      error: err,
    });
  }
};

module.exports = { westninthvintage };
