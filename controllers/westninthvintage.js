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

    <p>
      Thank you for reaching out and claiming your 20% discount on custom signage!
      We’re thrilled to help bring your vision to life with a unique design tailored
      to your specifications.
    </p>

    <p><b><u>Your inquiry details are as follows:</u></b></p>
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
<div>
    <div>
        <table cellpadding="0" width="500" style="border-collapse:collapse;font-size:11.5px">
            <tbody>
                <tr>
                    <td style="margin:0.1px;padding:0">
                        <table cellpadding="0" style="border-collapse:collapse">
                            <tbody>
                                <tr>
                                    <td style="border-left:1px solid #000000;margin:0.1px;padding:0 0 0 12px;font:11.5px/14.7px Arial,Helvetica,sans-serif;color:#000001"
                                        valign="top">
                                        <table cellpadding="0" style="border-collapse:collapse">
                                            <tbody>
                                                <tr>
                                                    <td
                                                        style="margin:0.1px;padding:0 0 8px;font:11.5px/14.7px Arial,Helvetica,sans-serif;color:#000001;font-weight:600">
                                                        <span style="color:#000001">Sales Manager</span></td>
                                                </tr>
                                                <tr>
                                                    <td
                                                        style="margin:0.1px;padding-top:3px;font:11.5px/14.7px Arial,Helvetica,sans-serif;color:#000001">
                                                        <span
                                                            style="color:#000000;font-weight:600">Phone:&nbsp;</span><a
                                                            href="tel:+1%20332%20250%204309"
                                                            style="color:#000001;text-decoration:none;font-family:Arial,Helvetica,sans-serif"
                                                            target="_blank">332-250-4309</a></td>
                                                </tr>
                                                <tr>
                                                    <td
                                                        style="margin:0.1px;padding:0;font:11.5px/14.7px Arial,Helvetica,sans-serif;color:#000001">
                                                        <a href="tel:+17854969633"
                                                            style="color:#000001;text-decoration:none;font-family:Arial,Helvetica,sans-serif"
                                                            target="_blank"></a></td>
                                                </tr>
                                                <tr>
                                                    <td
                                                        style="margin:0.1px;padding-top:3px;font:11.5px/14.7px Arial,Helvetica,sans-serif;color:#000001">
                                                        <span
                                                            style="color:#000000;font-weight:600">Website&nbsp;</span><a
                                                            href="https://westninthvintage.net/"
                                                            style="color:#000001;text-decoration:none;font-family:Arial,Helvetica,sans-serif"
                                                            target="_blank"
                                                            data-saferedirecturl="https://www.google.com/url?q=https://westninthvintage.net/&amp;source=gmail&amp;ust=1730963613226000&amp;usg=AOvVaw3Bq7sVr_sgFimYLFKoZ6bE">www.westninthvintage.net</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td
                                                        style="margin:0.1px;padding-top:3px;font:11.5px/14.7px Arial,Helvetica,sans-serif;color:#000001">
                                                        <span
                                                            style="color:#000000;font-weight:600">Email:&nbsp;</span><a
                                                            href="mailto:neon@westninthvintage.net"
                                                            style="color:#000001;text-decoration:none;font-family:Arial,Helvetica,sans-serif"
                                                            target="_blank">neon@westninthvintage.net</a></td>
                                                </tr>
                                                <tr>
                                                    <td
                                                        style="margin:0.1px;padding:12px 0 0;font:11.5px/14.7px Arial,Helvetica,sans-serif;color:#000001">
                                                        <table cellpadding="0" style="border-collapse:collapse">
                                                            <tbody>
                                                                <tr>
                                                                    <td
                                                                        style="margin:0.1px;padding:0 5px 0 0;font:11.5px/14.7px Arial,Helvetica,sans-serif;color:#000001">
                                                                        <a href="https://www.instagram.com/westninth_vintage/"
                                                                            target="_blank"
                                                                            data-saferedirecturl="https://www.google.com/url?q=https://www.instagram.com/westninth_vintage/&amp;source=gmail&amp;ust=1730963613226000&amp;usg=AOvVaw0houOq_THXm7sKt_B31vWo"><img
                                                                                style="display:block;min-width:22px"
                                                                                width="22"
                                                                                src="https://ci3.googleusercontent.com/meips/ADKq_Nb1iFznMThF7egUqfP6n_9h0O1b0TFKf5F1sNE0KmaSDaak8RkcD60s9UzuEhwpkf8bCWoCYUhFRMDwqiA2wJT8iH-HNtgr7lDIJcbanHERUV7e-YUa6_ylBt8v25SJFSw=s0-d-e1-ft#https://img.mysignature.io/s/e/a/7/ea7d81f7-b6c4-5193-b32a-171b2a157f87.png"
                                                                                alt="Instagram Manhattan Neons"
                                                                                class="CToWUd" data-bit="iit"></a>
                                                                    </td>
                                                                    <td
                                                                        style="margin:0.1px;padding:0 5px 0 0;font:11.5px/14.7px Arial,Helvetica,sans-serif;color:#000001">
                                                                        <a href="https://www.youtube.com/@westninthvintage9993"
                                                                            target="_blank"
                                                                            data-saferedirecturl="https://www.google.com/url?q=https://www.youtube.com/@westninthvintage9993&amp;source=gmail&amp;ust=1730963613226000&amp;usg=AOvVaw3-MG33YNou4pIyTVAQB80N"><img
                                                                                style="display:block;min-width:22px"
                                                                                width="22"
                                                                                src="https://ci3.googleusercontent.com/meips/ADKq_Nb084AmPwmha4cXp7pzuE-a-zXtGCZuvjXjdpdHEnTC04HqPrzKzU1pjUxzQssKMUT_SEuGUUrXI4M216_L-WS2a8eqVkNFZXExbfxdfGXaiZPnBznHPD1T7wVcQ1tB8Ew=s0-d-e1-ft#https://img.mysignature.io/s/8/4/0/84036ee9-547e-511e-a498-7977f0388933.png"
                                                                                alt="Youtube Manhattan Neons"
                                                                                class="CToWUd" data-bit="iit"></a>
                                                                    </td>

                                                                    <td
                                                                        style="margin:0.1px;padding:0 5px 0 0;font:11.5px/14.7px Arial,Helvetica,sans-serif;color:#000001">
                                                                        <a href="https://www.facebook.com/Westnithvintage/"
                                                                            target="_blank"
                                                                            data-saferedirecturl="https://www.google.com/url?q=https://www.facebook.com/Westnithvintage/&amp;source=gmail&amp;ust=1730963613226000&amp;usg=AOvVaw2AqXP32vMGfYJ0OkELp3sj"><img
                                                                                style="display:block;min-width:22px"
                                                                                width="22"
                                                                                src="https://ci3.googleusercontent.com/meips/ADKq_NYybpQ0IKJa5UsuWvzZFFGqm8DmlWq5DUnwQrOeZm1un2ax4JzXpITRS21fBI5EXRPcubRUdUMFJ5wJDVx5HQk9Phc-xecYSWwelOjllo8J6f1uT7YBXBq959Euwnq_OB0=s0-d-e1-ft#https://img.mysignature.io/s/c/c/6/cc6f08f4-6c1f-548c-852b-8b1dcc2770da.png"
                                                                                alt="Facebook" class="CToWUd"
                                                                                data-bit="iit"></a>
                                                                    </td>

                                                                </tr>

                                                            </tbody>
                                                        </table>

                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>



    <div>


        <table width="500" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr>
                    <td style="margin:0.1px;line-height:1px;font-size:1px;height:1px">&nbsp;
                    </td>
                </tr>
            </tbody>
        </table>

    </div>



    <table cellpadding="0" style="border-collapse:collapse">
        <tbody>
            <tr>
                <td style="margin:0.1px;display:block;padding:15px 0 0 0">
                </td>
            </tr>
            <tr>
                <td style="margin:0.1px;border-top:1px solid #eeeeee;padding-top:5px;font-size:10px;font-family:Arial">
                    <a href="https://westninthvintage.net" style="color:#000001;text-decoration:none" target="_blank"
                        data-saferedirecturl="https://www.google.com/url?q=https://westninthvintage.net&amp;source=gmail&amp;ust=1730963613226000&amp;usg=AOvVaw3suZkJvsNdZOii1Wu4eNZO"><img
                            width="100" src="https://westninthvintage.net/cdn/shop/files/new2_140x.png?v=1671103090"
                            alt="westninthvintage.net" class="CToWUd" data-bit="iit"></a>
                </td>
            </tr>
        </tbody>
    </table>
    <div class="yj6qo"></div>
    <div class="adL">


    </div>
</div>
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
