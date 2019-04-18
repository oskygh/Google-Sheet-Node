const functions = require("firebase-functions");
const GoogleSpreadsheet = require("google-spreadsheet");
const { promsify } = require("util");
const cred = require("../functions/google-sheet.json");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
