const axios = require('axios');

const url ='https://jsonplaceholder.typicode.com/users';

function use (url){
    axios.get(url).then((entry)=>console.log(entry.data)).catch((err)=> console.log(err))
}

use(url)