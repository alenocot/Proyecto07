const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./routes/rest_categorias.js']

swaggerAutogen(outputFile, endpointsFiles)