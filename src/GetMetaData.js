
const base64 = require('base64-js');
const mm = require('music-metadata');
const util = require('util');
const fs = require('fs');

function GetMetaData(newfilename){
(async () => {
  try {
    const metadata = await mm.parseFile(newfilename);
const data2 = (util.inspect(metadata, { showHidden: true, depth: null }));
/*
const data3 = data2.split("}")
var i =0; 

var parts3 = data3[20].split("data:");

'data:' + props.common.picture[0].format + ';base64,' + base64js.fromByteArray(props.common.picture[0].data.data);


console.log('data'+metadata.common.picture[0].format +';base64'+base64.fromByteArray(metadata.common.picture[0].data))


*/



const fileContents = new Buffer(metadata.common.picture[0].data, 'base64')
fs.writeFile("./cover/"+metadata.common.title+".jpg", fileContents, (err) => {
  if (err) return console.error(err)
  console.log('file saved to ', "./cover/"+metadata.common.title+".jpg")
})




  } catch (error) {
    console.error(error.message);
  }
})();

}

readFileList();

function readFileList(){


fs.readdirSync("J:/cc_projects/mp3").forEach(file => {
if(file.indexOf(".mp3") <0 )return;

GetMetaData( "J:/cc_projects/mp3/"+file)


});


}
