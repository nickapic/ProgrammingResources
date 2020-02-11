import axios, {AxiosResponse} from "axios";

/*
function QueryBuilder(OptionsArr: string[]){ //TODO for later automation
    let URL: string = "";
    let UrlBase = "http://"
}
*/

async function SendRequest(){
    //Response.data.stacks is an array
    let URL: string = "http://resourceshare.herokuapp.com/api/stacks";

    try {
        var Response: AxiosResponse = await axios.get(URL);    
    }
    catch (ex) {
        console.error("ERROR SendRequest(): " + ex)
    }
    //console.log(Response.data.stacks); //for debug
    return Response;
    
}

//SendRequest(); //for debug

/*
to use the data remove console.log() and pass data as parameter
SendRequest().then(function(Response){console.log(Response.data.stacks)});
*/