import axios, { AxiosResponse } from 'axios';

/*
function QueryBuilder(OptionsArr: string[]){ //TODO for later automation
    let URL: string = "";
    let UrlBase = "http://"
}
*/

async function sendRequest() {
  //Response.data.stacks is an array
  let URL: string = 'http://resourceshare.herokuapp.com/api/stacks';

  try {
    var Response: AxiosResponse = await axios.get(URL);
    console.log(Response);
    return Response;
  } catch (ex) {
    console.error('ERROR SendRequest(): ' + ex);
  }
  //console.log(Response.data.stacks); //for debug
}

sendRequest(); //for testing will move to QueryBuilder later

export default sendRequest;
