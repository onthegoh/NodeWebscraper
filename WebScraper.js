var cheerio = require('Cheerio');
var request = require('Request');
var fs = require('fs');

//Sales Cloud Quickstart
var url = "SOME URL"

request(url,function(err,response,body){

  if(response.statusCode == 200 && !err ){
    console.log("Status: "+ response.statusCode);
    $ = cheerio.load(body);

    $("a").each(function(index,value){
      console.log(index + ": "+$(this).text());
    });

  }

});


$ = cheerio.load('')
