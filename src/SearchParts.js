


var outPut =""; 
const cache = {};
function SearchParts() {
    //listAllfiles()

	function importAll(r) {
    r.keys().forEach((key) => (cache[key] = r(key)
	));
}	
		
		importAll(require.context("../closeCaption", false, /\.(txt)$/));
		const textFiles = Object.entries(cache).map(module => module[1].default);
		
    return (
        <div>
    <h1>Will display files here.</h1>
	{displayAFile(textFiles[0])}
        </div>
    )



function occurrences(string, subString, allowOverlapping) {

    string += "";
    subString += "";
    if (subString.length <= 0) return (string.length + 1);

    var n = 0,
        pos = 0,
        step = allowOverlapping ? 1 : subString.length;

    while (true) {
        pos = string.indexOf(subString, pos);
        if (pos >= 0) {
            ++n;
            pos += step;
        } else break;
    }
    return n;
}

function displayAFile(filename){

fetch(filename)
            .then(function(response){
                return response.text();
            }).then(function (data) {
            console.log(data);
        })

 


}
}
export default SearchParts
