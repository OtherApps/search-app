


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
	{textFiles[0].toString()}
        </div>
    )





function displayAFile(){



 


}
}
export default SearchParts
