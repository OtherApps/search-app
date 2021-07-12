// Stand alone file

const base64 = require('base64-js');
const mm = require('music-metadata');
const util = require('util');
const fs = require('fs');

function GetMetaData(newfilename){
(async () => {
  try {
    const metadata = await mm.parseFile(newfilename);
const data2 = (util.inspect(metadata, { showHidden: true, depth: null }));

const fileContents = new Buffer(metadata.common.picture[0].data, 'base64')
 fs.writeFile("F:/covers/"+metadata.common.title+".jpg", fileContents, (err) => {
  if (err) return console.error(err)
  console.log('file saved to ', "./covers/"+encodeURI(metadata.common.title)+".jpg")

})

//console.log(metadata.common.picture[0].data)
/*
const fileContents = new Buffer(metadata.common.picture[0].data, 'base64')
 fs.writeFile("./covers/"+metadata.common.title+".jpg", fileContents, (err) => {
  if (err) return console.error(err)
  console.log('file saved to ', "./covers/"+metadata.common.title+".jpg")


*/



  } catch (error) {
    console.log(error.message);
  }
})();}







readFileList();

function readFileList(){


fs.readdirSync("F:/mp3/").forEach(file => {
if(file.indexOf(".mp3") <0 )return;

GetMetaData( "F:/mp3/"+file)


});


}
