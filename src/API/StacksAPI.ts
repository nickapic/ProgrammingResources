import axios, {AxiosResponse} from "axios";

/*
function QueryBuilder(OptionsArr: string[]){ //TODO for later automation
    let URL: string = "";
    let UrlBase = "http://"
}
*/

async function SendRequest(){
    let URL: string = "http://resourceshare.herokuapp.com/api/stacks";

    //Response.data.stacks is an array
    let Response: AxiosResponse = await axios.get(URL);
    //console.log(Response.data.stacks); //for debug

    try {
        return Response;
    }
    catch (ex) {
        console.error("unable to return Promise (GetRequest();)")
    }
}

SendRequest(); //for testing will move to QueryBuilder later