var nodemailer = require('nodemailer');

/* se configura con gmail la constraseña segura se obtiene en la opcion de seguridad de la cuenta activando la autenticacion de 2 pasos*/ 
var userMail ="";
var password ="";
var transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: userMail,
    pass: password
  }
});


var template = `<template here>`;

var mailOptions = {
  from: userMail,
  to: '',
  subject: '',
  html: template
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});