/*const express = require("express");
const bodyParser = require("body-parser");
const config = require("../flow/config.json");
const FlowApi = require("../flow/es");


const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/api/flow/create_order', async(req, res) => {
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
          urlReturn: config.baseURL + "/api/flow/result",
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

app.post("/api/flow/payment_confirm", async (req, res) => {
    try {
      let params = {
        token: req.body.token
      };
      let serviceName = "payment/getStatus";
      const flowApi = new FlowApi(config);
      let response = await flowApi.send(serviceName, params, "GET");
      //Actualiza los datos en su sistema
      // console.log(response);
      res.json(response);
      
    } catch (error) {
      res.json({ error });
    }
  });

  app.get("/api/flow/result", async (req, res) => {
    try {
      let params = {
        token: req.body.token
      };
      let serviceName = "payment/getStatus";
      const flowApi = new FlowApi(config);
      let response = await flowApi.send(serviceName, params, "GET");
      //Actualiza los datos en su sistema
      // console.log(response);
      res.redirect(config.baseURL + '/tienda/venta?response=' + string);
      res.json(response);
    } catch (error) {
      res.json({ error });
    }
  });

  app.post("/api/flow/create_email", async (req, res) => {
    //Prepara los parámetros
    const params = {
      commerceOrder: Math.floor(Math.random() * (2000 - 1100 + 1)) + 1100,
      subject: "pago prueba cobro Email",
      currency: "CLP",
      amount: 2000,
      email: "efuentealba@json.cl",
      paymentMethod: 9,
      urlConfirmation: config.baseURL + "/payment_confirm",
      urlReturn: config.baseURL + "/result",
      forward_days_after: 1,
      forward_times: 2
    };
    const serviceName = "payment/createEmail";
    try {
      const flowApi = new FlowApi(config);
  
      let response = await flowApi.send(serviceName, params, "POST");
  
      res.json({
        response
      });
    } catch (error) {
      console.log(error);
      res.json({ error: error });
    }
});

module.exports = app*/

const express = require('express')
const bodyParser = require("body-parser");
const config = require("./flow/config.json");
const FlowApi = require("./flow/es");
const app = express()
app.use(express.json());
//app.use(bodyParser.urlencoded({ extended: false }));

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