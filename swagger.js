const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Student Teacher Course API",
      version: "1.0.0",
      description: "Complete API Documentation",
    },

    servers: [
      {
        url: process.env.BASE_URL || "http://localhost:5000",
      },
    ],

    // 🔥 Optional: JWT support (for future use)
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },

  apis: ["./Router/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

const swaggerDocs = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};



module.exports = swaggerDocs;
// const swaggerUi = require("swagger-ui-express");
// const swaggerJsdoc = require("swagger-jsdoc");

// const options = {
//   definition: {
//     openapi: "3.0.0",
//     info: {
//       title: "My API",
//       version: "1.0.0",
//       description: "Swagger Documentation",
//     },
//     servers: [
//       {
//         url: "http://localhost:5000",
//       },
//     ],
//   },
//   apis: ["./Router/*.js"], // yaha se comments read honge
// };

// const swaggerSpec = swaggerJsdoc(options);

// // function export karo
// const swaggerDocs = (app) => {
//   app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// };

// module.exports = swaggerDocs;