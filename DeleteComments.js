//Delete Facebook comments by a certain user 
//Credits: http://webapps.stackexchange.com/questions/49062/quickly-delete-all-messages-and-comments-by-a-given-user-in-a-facebook-group

/*
https://developers.facebook.com/tools/explorer/ 
Often asked but little known tricks (and thanks to facebook's API you can do a lot more than you think automatically)
 to delete a spammers comments from your statuses, go to the link above and choose FQL,
  get an access token and run the following query to get the ID of the user:
  SELECT fromid, text from comment where object_id in (select status_id from status where uid=me())  
Then use:

SELECT id from comment where object_id in (select status_id from status where uid=me() limit 0,100) and fromid=[id of user to delete comments]  

or 

SELECT id from comment where object_id in (select link_id from link where owner=me() limit 0,100) and fromid=[id of user to delete comments]  


Then open your debugger console in the browser (usually F12) then fill in and paste the following javascript:

var acc=""; //put access token in here
var dat=""; //put data returned in here
for (var obj in dat.data) 
{ var xhr = new XMLHttpRequest(); 
  xhr.open("GET", "https://graph.facebook.com/v2.0/" + dat.data[obj].id + "?access_token=" + acc + "&format=json&method=delete&pretty=0&suppress_http_code=1");
  xhr.send(); xhr.responseText; 
 }
*/

//936599793026326 - eli veliyev id-si


var acc=""; //put access token in here
var dat=
{
  "data": [
      {
      "id": "1249134981903_476487"
    }, 
    {
      "id": "1249133661870_476484"
    }
  ]
}
for (var obj in dat.data) 
{ var xhr = new XMLHttpRequest(); 
 xhr.open("GET", "https://graph.facebook.com/v2.0/" + 
 	dat.data[obj].id + "?access_token=" 
 	+ acc 
 	+ "&format=json&method=delete&pretty=0&suppress_http_code=1"); 
 xhr.send(); xhr.responseText; }




