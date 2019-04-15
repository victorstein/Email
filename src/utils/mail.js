'use strict'
const nodemailer = require('nodemailer')
require('dotenv').config()

const { EMAIL_USER, EMAIL_PASSWORD } = process.env

const mailer = async ({
  to = 'carlos@topfloormarketing.net',
  agent = '',
  calls = '',
  TalkTime = '',
  formattedDate = '',
  cc = '',
  agentType = ''
}) => {
  try {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      secure: false,
      auth: {
        user: EMAIL_USER, // generated ethereal user
        pass: EMAIL_PASSWORD // generated ethereal password
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    // setup email data with unicode symbols
    let mailOptions = {
      from: EMAIL_USER,
      to: to,
      subject: `${agentType === 'SW' ? 'Llamadas' : 'Calls'} ${formattedDate}`,
      cc: cc,
      html: `
        <b>Hello ${agent}!</b>
        <br/>
        <br/>
        <table style='border:1px solid black;border-spacing: 20px'>
          <tr style='margin-bottom:10px'>
            <td>As per John's request!! You have </td>
            <td><b style='border-bottom:2px solid black; padding-bottom:5px'>${calls} </b></td>
            <td>dials so far for today</td>
          </tr>
          <tr>
            <td style='float:right'>and </td>
            <td><b style='border-bottom:2px solid black; padding-bottom:5px'>${TalkTime} </b></td>
            <td>total talk time</td>
          </tr>
          <tr style='margin-top:-15px'>
            <td><p>Kind Regards,</p><p>I.T.</p></td>
          </tr>
        </table>
      `
    }

    // send mail with defined transport object
    let info = await transporter.sendMail(mailOptions)

    console.log('Message sent: %s', info.messageId)
    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
  } catch (e) {
    console.error(e)
  }
}

export default mailer
