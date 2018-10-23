const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const axios = require('axios');
const cache ={};

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));


app.use(morgan('combined'));

app.get('/api', function(req, res){
    console.log('input from front end: ', req.query.movie);
    axios.get(`http://www.omdbapi.com/?s=${req.query.movie}&apiKey=af2385d3`)
        .then(response => {
            console.log('response', response.data);
            res.send(response.data);
        })
        .catch(err => console.log(err));
})

app.get('/details', function(req, res){
    console.log('input from front end: ', req.query.id);
    axios.get(`http://www.omdbapi.com/?i=${req.query.id}&apiKey=af2385d3`)
        .then(response => {
            console.log('response', response.data);
            res.send(response.data);
        })
        .catch(err => console.log(err));
})






    //    if(cache[req.query.i]){
//        res.send(cache[req.query.i])
//    }
//    if(cache[req.query.t]){
//        res.send(cache[req.query.t]);
//     }
//              if(req.query.i){
//                 var movieId = `i=${req.query.i}`;
//                 axios.get('http://www.omdbapi.com/?' + movieId + '&apikey=8730e0e')
//                     .then((response)=>{ 
//                         res.send(response.data);
//                         cache[req.query.i] = response.data;
                        
                        
//                     })
//                     .catch(err =>console.log(err));
                    
//             } 
//             if(req.query.t){
//                     res.send(req.query.t)
//                     //console.log('inside t')
//                     var movieTitle = `/?t=${req.query.t}`.replace(' ','%20');
//                     console.log(movieTitle, req.url)
//                     axios.get('http://www.omdbapi.com' + req.url + '&apikey=8730e0e')
//                     .then((response)=>{
//                         res.send(response.data);
//                         cache[req.query.t] = response.data;
                        
//                     })
//                     .catch(err =>console.log(err));
                    

//             }
        
//     //console.log('this is the cache:' + cache);
    
// })






// When making calls to the OMDB API make sure to append the '&apikey=8730e0e' parameter


module.exports = app;
