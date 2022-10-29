/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable comma-spacing */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable semi */
/* eslint-disable indent */
/* eslint-disable quotes */
const functions = require("firebase-functions");
const admin=require('firebase-admin');
admin.initializeApp();
const database=admin.firestore();

// eslint-disable-next-line max-len
exports.WUpdate=functions.pubsub.schedule(` 5 * * * * `).onRun((context)=>{
    database.doc('Train/train').update({"Message": `hello world ${4*Math.random()}`});
    return console.log(`hello world ${Math.random()}`);
});

