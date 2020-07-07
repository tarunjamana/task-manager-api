const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeMail = (email,name) =>{
 sgMail.send({
   to:email,
   from:'tarunjamana@gmail.com',
   subject:'Thanks for Registering ',
   text:`welcome to the prototype app , ${name} . App is currently is under production,You will recieve an update soon :-)`
 })
}

const sendPartingEmail = (email,name) =>{
  sgMail.send({
    to:email,
    from:'tarunjamana@gmail.com',
    subject:'Unsubcribing Alert',
    text:`It seems you have unsubscribed our service , ${name} . write to us what went wrong and how we could have kept you onboard :-)`
  })
}


module.exports = {
  sendWelcomeMail,
  sendPartingEmail
}