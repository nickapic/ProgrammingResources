import axios from "axios";

function QueryBuilder(OptionsArr: string[]){ //TODO for later automation
    let URL: string = "";
    let UrlBase = "http://"
}

async function SendRequest(){
    let URL: string = "http://resourceshare.herokuapp.com/api/stacks";

    let Response = await axios.get(URL).then(function(response){
        //console.log(response.data.stacks); //for debug
        return response.data.stacks;
    });
    const ArrLength: number = Response.length;
    console.log(Response);
    return Response;
}

SendRequest(); //for testing will move to QueryBuilder later