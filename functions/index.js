const functions = require("firebase-functions");
const GoogleSpreadsheet = require("google-spreadsheet");
const { promsify } = require("util");
const cred = require("../functions/google-sheet.json");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.accessSpreadsheet = functions.https.onRequest(async (request, response) => {
    try{
        const getAccess = () => {
            const doc = new GoogleSpreadsheet(
              "1y6_zgdIDH4Qk5cRsF5zicyjpE40HbpjZBmUHn0elTPI"
            );
            await promsify(doc.useServiceAccountAuth)(cred)
            const info = await promsify(doc.getInfo)()
            const sheet = info.worksheet[0]
            console.log(`Title : ${sheet.title} Rows : ${sheet.rowCount}`)
          };
    }
    catch{
      //@TODO error statement
    }
    finally {
     console.log('Done')   
    }
   
});


