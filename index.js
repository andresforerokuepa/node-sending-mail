var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: 'saquerrigan@gmail.com',
    pass: 'vrcekmqkdmszickv'
  }
});


var template = `
<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <style type="text/css">
        body {
            font-style: normal;
            background-color: #FFF;
            padding: 0px;
            width: 40%;
            max-width: 600px;
            display: block;
            margin: 0px auto;
        }

        .header-image {
            width: 100%;
            display: block;
            margin: 0px auto;
            text-align: center;
            margin-bottom: 2rem;
            border-radius: 8px;
        }

        .background-image {
            width: 100%;
            background-color: #FAFAFA;
            border-radius: 8px;
            padding-top: 1.5rem;
            padding-bottom: 1.5rem;
        }

        .body {
            margin: 0px auto;
            padding: 15px;
            margin-bottom: 30px;

            background: #FFFFFF;
            border-radius: 12px;

        }

        a {
            text-decoration: none;
            width: 100%;
            text-align: center;
        }

        button {
            margin: 10px auto;
            min-height: 40px;
            max-width: 100%;
            width: 100%;
            border-radius: 8px;
            border: 0px;
            background: #fff;
            border-radius: 8px;
            text-align: center;
            text-transform: uppercase;
            font-weight: 700;
            font-size: 16px;
            line-height: 19px;
            color: #F26724;
            border: 1px solid #F26724;

        }


        .center {
            width: 100%;
            display: block;
            margin: 0px auto;
            text-align: center;
        }

        h2 {
            margin-top: 30px;
            min-height: 22px;
            font-weight: 700;
            font-size: 1rem;
            line-height: 22px;
            text-align: start;

            padding-left: 0.5rem;
            color: #8F989D;

        }

        .footer {
            font-size: 0.75rem;
            font-weight: 400;
            line-height: 15px;
            letter-spacing: 0em;
            text-align: center;
            color: rgba(0, 0, 0, 0.6);
        }

        .container-footer {
            width: calc(100% - 1rem);
            padding: 1rem;
        }

        .footer {
            color: #292929;
            font-weight: 400;
            font-family: 'Nunito', sans-serif;
        }

        .text-orange {
            color: #FD531E;
        }


        /* CONTENIDO */


        .container-info-program {
            display: flex;
        }

        .computer-man-image {
            width: 100px;
        }

        .container-resume {
            max-width: 246px;
            width: 100%;
            display: flex;
            justify-content: center;
        }

        .text2 {
            max-width: 133px;
        }

        .resume-payment {
            display: flex;
            width: 50%;
            margin: 1rem auto 0px;
            border-radius: 8px;
            flex-wrap: wrap;
            justify-content: center;
        }

        .resume-payment p {
            margin-top: 4px;
            margin-bottom: 4px;
            font-size: 0.75rem;
            line-height: 1rem;
            letter-spacing: 0em;
            text-align: center;
        }

        .text {
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 19px;
            width: 100%;
        }

        .grid {
            width: 50%;
        }

        .img-header {
            height: 80px;
            width: auto;
            margin: 0 auto;
            display: block;
            padding-top: 19px;
            padding-bottom: 19px;
        }

        .subject {
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 28px;
            line-height: 33px;
            align-items: center;
            text-align: center;
            text-transform: uppercase;
            color: #0A499C;
            padding-bottom: 22px;
        }

        .text1 {
            font-family: 'Nunito', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 19px;
            text-align: left;
            color: rgba(46, 51, 58, 0.9);
            background-clip: text;
            padding: 0 8%;
        }

        .img-left {
            display: block;
            margin: 0;
        }

        .text1.fix {
            text-align: left;
            padding: 0;
        }

        table {
            background: #4e4e50;
            display: block;
        }

        tbody {
            display: block;
        }

        .tr1 {
            background-color: #ffffff;
            display: block;
            width: 85%;
            margin: 0 auto;
            margin-bottom: 16px;
            border-radius: 0px 0px 8px 8px;
        }

        .td1 {
            width: 100%;
            display: block;
        }

        .tr1.fix {
            margin-bottom: 0px;
            border-radius: 8px 8px 0px 0px;
        }

        .footer-container {
            background-color: #F6F7F9;
            display: block;
            width: 100%;
            text-align: center;
        }

        .td2 {
            display: block;
            padding: 3px 0;
        }

        .item {
            background-color: #FFFFFF;
            width: 91%;
            display: block;
            margin: 0 auto;
            border-radius: 12px;
            margin-bottom: 16px;
        }

        .title-card {
            font-family: 'Barlow', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 24px;
            text-align: center;
            /* primary/dark */
            margin: 0;
            margin-top: 20px;
            color: #292929;
        }

        .inner-table {
            background-color: #FFFFFF;
            border: 1px solid #e9e9e9;
            border-radius: 12px;
            box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.0784314);
        }

        .number {
            font-family: 'Barlow', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 40px;
            line-height: 48px;
            padding-left: 31px;
            color: #0A499C;
            padding-right: 26px;

        }

        .labels {
            font-family: 'Barlow', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 19px;

            /* primary/dark */
            display: block;
            color: #292929;

        }


        .info {
            font-family: 'Nunito', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
            /* identical to box height */


            /* primary/dark */

            color: #292929;
        }
    </style>
</head>


<body>
    <table align="center" width="600px" boderder="0" cellpadding="0" cellspacing="0">
        <tbody>
            <tr class="tr1" colspan="2" style=" background-color: #FFFFFF;">
                <td class="td1" colspan="2">
                    <img class="img-header" align="center"
                        src="https://uploads-kuepa.s3.us-west-2.amazonaws.com/alliance/files/Logo_Nueva_America.png"
                        alt="" srcset="">
                </td>
            </tr>

            <tr class="tr1 fix" colspan="2" style=" background-color: #FFFFFF;margin-bottom: 0px;border-radius: 8px 8px 0px 0px;">
                <td style="width:65%">
                    <p class="text1"><b>Hola {{param.name}}</b>, ingresar a tu correo institucional y plataforma LMS es muy fácil, a continuación cesarias para hacerlo:</p>
                </td>
                <td style="with:35%">
                   <img src="https://uploads-kuepa.s3.us-west-2.amazonaws.com/alliance/files/frame2.png" alt="">



                </td>
            </tr>

            <tr class="tr1" style=" background-color: #FFFFFF; padding-bottom: 10px;">
                <td colspan="2" class="item" align="center">
                    <table class="inner-table">
                        <tbody>
                            <tr style="width: 100%;display: block;">
                                <td style="width: 100%;display: block;">
                                    <p class="title-card">Ingresa a tu correo institucional</p>
                                </td>
                            </tr>
                            <tr style="width: 100%;display: block;">
                                <td style="width:15%"><b class="number">1</b></td>
                                <td style="width:20%;position: relative;">
                                    <b class="labels" style="padding-top: 3px;">Acceso:</b>
                                    <b class="labels" style="padding-top: 40px;">Usuario:</b>
                                    <b class="labels" style="padding-top: 17px;">Contraseña:</b>
                                </td>
                                <td style="width:65%;padding-right: 10%;padding-left: 5%;">


                                    <a href="{{params.url_mail}}">
                                        <button type="submit">abrir correo</button>
                                    </a>
                                    <p class="info">{{params.userMail}}</p>
                                    <p class="info">{{params.passMail}}</p>



                                </td>
                            </tr>

                        </tbody>
                    </table>




                </td>
                <td colspan="2" class="item" align="center">
                    <table class="inner-table">
                        <tbody>
                            <tr style="width: 100%;display: block;">
                                <td style="width: 100%;display: block;">
                                    <p class="title-card">Ingresa a la plataforma LMS</p>
                                </td>
                            </tr>
                            <tr style="width: 100%;display: block;">
                                <td style="width:15%"><b class="number">2</b></td>
                                <td style="width:20%;position: relative;">
                                    <b class="labels" style="padding-top: 3px;">Acceso:</b>
                                    <b class="labels" style="padding-top: 40px;">Usuario:</b>
                                    <b class="labels" style="padding-top: 17px;">Contraseña:</b>
                                </td>
                                <td style="width:65%;padding-right: 10%;padding-left: 5%;">


                                    <a href="{{params.url_lms}}">
                                        <button type="submit">abrir lms</button>
                                    </a>
                                    <p class="info">{{params.lassMail}}</p>
                                    <p class="info">{{params.lassMail}}</p>



                                </td>
                            </tr>

                        </tbody>
                    </table>




                </td>

            </tr>
            <tr colspan="2" class="footer-container">
                <td colspan="2" class="td2">
                    <p class="footer">
                        <strong class="text-orange">Te enviamos este e-mail a {{params.email}}</strong><br>
                        Administrar preferencias de e-mails <br>
                        <strong class="text-orange">Conoce</strong> cómo cuidamos tu Privacidad y <strong
                            class="text-orange">visita
                            los</strong> Términos y Condiciones de Nueva America
                    </p>
                </td>
            </tr>
        </tbody>
    </table>
</body>

</html>
`;

var mailOptions = {
  from: 'saquerrigan@gmail.com',
  to: 'acamiloforero@gmail.com',
  subject: 'accept documents nueva americas',
  html: template
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});