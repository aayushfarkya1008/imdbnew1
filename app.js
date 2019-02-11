var request=require('request');
var express=require('express');
var posterpath;
var title;
var budget;
var overview;
var app=express();
app.get('/',(req,response)=>{
    //res.send('server is running');
    var movienumber=req.query.movienumber !=undefined? req.query.movienumber:551;
    request.get('https://api.themoviedb.org/3/movie/'+movienumber+'?api_key=b4510126df82c5b0422e0682ca2ecbda',{json:true},(err,res,body)=>{
    if(err)
    {
        console.log('Failed');
        
    }
    //console.log(respo);
    title=body.title;
    overview=body.overview;
    posterpath=body.poster_path;
    

    var myhtml='<html>\
                <title>MYAPP</title>\
                    <body>\
                        <form action="\" method ="get">\
                        Enter Movie Number:<br>\
                        <input type="text" name="movienumber">\
                        <input type="submit" value="submit">\
                        </form>\
                        <P>Title: '+title+'</P><br>'+overview+'</p>\
                        <img src= "https://image.tmdb.org/t/p/w185/'+posterpath+'">\
                    </body>\
                </html>';
    response.send(myhtml);
})
    
   // res.send(budget);
   // res.status(200);
})

app.listen(3000);