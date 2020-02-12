import axios, {AxiosResponse} from "axios";


function QueryBuilder(InputID: number): string{ //TODO for later automation
    //let UrlParams: string = ""; //for future use
    let UrlBase :string= "http://resourceshare.herokuapp.com/api/stacks"
    const FinalUrl :string = UrlBase + "/" + InputID;
    //console.log(FinalUrl)
    return FinalUrl;
}


async function SendRequest(InputID: number){
    //Response.data.stacks is an array
    const Url: string = QueryBuilder(InputID);

    try {
        var Response: AxiosResponse = await axios.get(Url);    
    }
    catch (ex) {
        console.error("ERROR SendRequest(): " + ex)
    }
    console.log(Response.data.resources); //for debug
    return Response;
    
}

SendRequest(1); //for debug

/*
to use the data remove console.log() and pass data as parameter
SendRequest().then(function(Response){console.log(Response.data.stacks)});
*/


//SendRequest(1).then(function(Response){console.log(Response.data.stacks)});