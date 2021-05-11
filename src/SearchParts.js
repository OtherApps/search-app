import listReactFiles from 'list-react-files'


function SearchParts() {
    return (
        <div>
        {outPut}    
        </div>
    )


function listAllfiles(){

var outPut; 

    listReactFiles("./closeCaption/").then(files =>
        
        outPut = outPut + files);
        

        




}

}
export default SearchParts
