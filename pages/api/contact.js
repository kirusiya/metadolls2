export default function (req, res) {
  let nodemailer = require("nodemailer");

  console.log(req.body);

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "dytraxservice@gmail.com",
      pass: 'Cg0508electro332',
    },
    secure: true,
  });
  /*  console.log('transporter ')
    console.log(transporter)
    */
  const mailData = {
    from: "demo email",
    to: "carlos.gs.andres@gmail.com",
    subject: `Metadol white list new user${req.body.name}`,
    text:'New posible whitelist user',
    html: `<!doctype html>
    <html ⚡4email>
      <head>
        <meta charset="utf-8">
        <style amp4email-boilerplate>body{visibility:hidden}</style>
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <script async custom-element="amp-anim" src="https://cdn.ampproject.org/v0/amp-anim-0.1.js"></script>
      </head>
      <body>
        <p>Image: <amp-img src="https://cldup.com/P0b1bUmEet.png" width="16" height="16"/></p>
        <p>GIF (requires "amp-anim" script in header):<br/>
          <amp-anim src="https://cldup.com/D72zpdwI-i.gif" width="500" height="350"/></p>
      </body>
    </html>`,
  };
  console.log('maildata')
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200);
}
