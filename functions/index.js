const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });
const express = require('express');

const { createDocument } = require('./handlers/createDocument');
const { updateDocument } = require('./handlers/updateDocument');
const { deleteDocument } = require('./handlers/deleteDocument');
const { getDocuments } = require('./handlers/getDocuments');
const { getRegistrations } = require('./handlers/getRegistrations');
const { registeration } = require('./handlers/registeration');
const { MiddleWare } = require('./utils/MiddleWare');

const app = express();
app.use(cors);

app.post('/createDocument', MiddleWare, createDocument);
app.post('/registeration', registeration);
app.put('/updateDocument', MiddleWare, updateDocument);
app.delete('/deleteDocument', MiddleWare, deleteDocument);
app.get('/getDocuments', getDocuments);
app.get('/getRegistrations', getRegistrations);

exports.api = functions.https.onRequest(app);
