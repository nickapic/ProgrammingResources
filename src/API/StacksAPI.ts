import axios, { AxiosResponse } from 'axios';

/*
function QueryBuilder(OptionsArr: string[]){ //TODO for later automation
    let URL: string = "";
    let UrlBase = "http://"
}
*/

<<<<<<< Updated upstream
async function sendRequest() {
=======
export const SendRequest = async () => {
>>>>>>> Stashed changes
  //Response.data.stacks is an array
  let URL: string = 'http://resourceshare.herokuapp.com/api/stacks';

  try {
    var Response: AxiosResponse = await axios.get(URL);
<<<<<<< Updated upstream
    console.log(Response);
=======
>>>>>>> Stashed changes
    return Response;
  } catch (ex) {
    console.error('ERROR SendRequest(): ' + ex);
  }
  //console.log(Response.data.stacks); //for debug
<<<<<<< Updated upstream
}
=======
};
>>>>>>> Stashed changes

sendRequest(); //for testing will move to QueryBuilder later

<<<<<<< Updated upstream
export default sendRequest;
=======
/*
to use the data remove console.log() and pass data as parameter
SendRequest().then(function(Resp){console.log(Resp.data.stacks)});
*/
>>>>>>> Stashed changes
