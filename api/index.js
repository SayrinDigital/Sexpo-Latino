const express = require('express')
const bodyParser = require("body-parser");
const config = require("./flow/config.json");
const FlowApi = require("./flow/es");
const app = express()
var nodemailer = require('nodemailer');
app.use(express.json());


app.post('/sendInformationMail', (req, res) => {
  

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'joscri2698@gmail.com',
      pass: 'joscri2698'
    }
  });

  const mailOptions = {
    from: 'SexPositive <hola@sexpositive.cl>',  // sender address
    to: 'hola@sexpositive.cl', // list of receivers
    subject: '[Sensual Experience] Área de Soporte Sexpositive', // Subject line
    html: '<div  style="padding: 20px; background-color: #fcfcfc;" class="main-container"><img style="margin-bottom: 20px;" class="logo" width="150" src="http://localhost:3100/imgs/home/SEXPOSITIVE-white.png" /><div style="background: #fff;padding: 20px;border: 1px solid rgba(0,0,0,0.1);" class="container"><h2 style="font-family: Open Sans, sans-serif; font-weight: 300;">Área de Soporte Sexpositive</h2><h3  style="font-family: Open Sans, sans-serif; font-weight: 300;">Estimado, se envía información proporcionada dentro del formulario de Sensual Experience:</h3><p  style="font-family: Open Sans, sans-serif; font-weight: 300;">Nombre: ' + req.body.name + '</p><p  style="font-family: Open Sans, sans-serif; font-weight: 300;">¿Trabajas en el rubro?: ' + req.body.worksRubro + '</p><p  style="font-family: Open Sans, sans-serif; font-weight: 300;">Comuna: ' + req.body.comuna + '</p><p  style="font-family: Open Sans, sans-serif; font-weight: 300;">¿Publicado en otro portal?: ' + req.body.isPublished + '</p><p  style="font-family: Open Sans, sans-serif; font-weight: 300;">¿Interés en workshops?: ' + req.body.isInterestedInWorkshops + '</p><p  style="font-family: Open Sans, sans-serif; font-weight: 300;">Whatsapp: ' + req.body.whatsapp + '</p></div></div>'
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error)
      res.send(error)
    else
      res.send(info)
  });


})

app.post('/sendContactMail', (req, res) => {
  

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'joscri2698@gmail.com',
      pass: 'joscri2698'
    }
  });

  const mailOptions = {
    from: 'SexPositive <hola@sexpositive.cl>',  // sender address
    to: 'hola@sexpositive.cl', // list of receivers
    subject: '[Contacto] Área de Soporte Sexpositive', // Subject line
    html: '<div  style="padding: 20px; background-color: #fcfcfc;" class="main-container"><img style="margin-bottom: 20px;" class="logo" width="150" src="http://localhost:3100/imgs/home/SEXPOSITIVE-white.png" /><div style="background: #fff;padding: 20px;border: 1px solid rgba(0,0,0,0.1);" class="container"><h2 style="font-family: Open Sans, sans-serif; font-weight: 300;">Área de Soporte Sexpositive</h2><h3  style="font-family: Open Sans, sans-serif; font-weight: 300;">Estimado, se envía información proporcionada dentro del formulario de Contacto:</h3><p  style="font-family: Open Sans, sans-serif; font-weight: 300;">Nombre: ' + req.body.name + '</p><p  style="font-family: Open Sans, sans-serif; font-weight: 300;">Email: ' + req.body.email + '</p><p  style="font-family: Open Sans, sans-serif; font-weight: 300;">Teléfono: ' + req.body.phone + '</p><p  style="font-family: Open Sans, sans-serif; font-weight: 300;">Mensaje: ' + req.body.message + '</p></div></div>'
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error)
      res.send(error)
    else
      res.send(info)
  });


})

app.post('/', (req, res, next) => {

  res.send('API');

})

app.post('/flow/create_order', async(req, res) => {
  try {
      const optional = {
        rut: "9999999-9",
        otroDato: "otroDato"
      };
      // Prepara el arreglo de datos
      const params = {
        commerceOrder: Math.floor(Math.random() * (2000 - 1100 + 1)) + 1100,
        subject: "Compra Tienda",
        currency: "CLP",
        amount: req.body.price,
        email: req.body.email,
        paymentMethod: 1,
        urlConfirmation: config.baseURL + "/api/flow/payment_confirm",
        urlReturn: config.baseURL + "/tienda/venta",
        ...optional
      };
      // Define el metodo a usar
      const serviceName = "payment/create";
  
      // Instancia la clase FlowApi
      const flowApi = new FlowApi(config);
      // Ejecuta el servicio
  
      let response = await flowApi.send(serviceName, params, "POST");
  
      //Prepara url para redireccionar el browser del pagador
      redirect = response.url + "?token=" + response.token;
      res.json({
        redirect,
        token: response.token
      });
    } catch (error) {
      res.json({ error: error.message });
    }
})

app.post("/flow/result", async (req, res) => {
  try {
    const params = {
      token: req.body.token
    };
    let serviceName = "payment/getStatus";
    const flowApi = new FlowApi(config);
    let response = await flowApi.send(serviceName, params, "GET");
    //Actualiza los datos en su sistema
    // console.log(response);
    
    res.json({
      response
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});

module.exports = {
   path: '/api',
   handler: app
}