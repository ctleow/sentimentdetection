exports.handler = async function(context, event, callback) {

const { GoogleSpreadsheet } = require("google-spreadsheet");
const fs = require("fs");
const credentials = JSON.parse(
  fs.readFileSync(Runtime.getAssets()["/credentials.json"].path, "utf8")
);

//Get Text Body from Studio
const textMsg = event.textMsg.toLowerCase();

const doc = new GoogleSpreadsheet(context.GOOGLE_SPREADSHEET_KEY);
await doc.useServiceAccountAuth(credentials);
await doc.loadInfo();
const sheet = doc.sheetsByIndex[0];//First sheet
const sheet2 = doc.sheetsByIndex[1]; //Second sheet
const rows = await sheet.getRows();

var word = "";
var position = "";

for (let i = 0; i < rows.length; i++){

  word = rows[i].Words.toLowerCase();
  position = textMsg.search(word);

   if (position >= 0){
    rows[i].Count = Number(rows[i].Count) + 1; // update a value
    await rows[i].save(); // save updates
    await sheet2.addRow({ Word: word, TextMsg: textMsg }); //record negative message
   
    return callback(null, "Negative Sentiment word :'" + word + "' found in sentence: '" + textMsg + "'");

  }//end if
}//end for loop

  return callback(error, "No Match");

};