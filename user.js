const fs = require('fs');
const axios = require('axios');

const url ='https://jsonplaceholder.typicode.com/users';

function use (url){
    axios.get(url).then((entry)=>{
        let list =entry.data
        list.forEach(element => {
            console.log(`${element.name}`);
            console.log(`Address: ${element.address.street} ${element.address.suite}`);
            console.log(`${element.address.city} ${element.address.zipcode}`);
            console.log(`Phone: ${element.phone}`);
            console.log(`Email: ${element.email}`);
            console.log(' ')
        });
    
    
    }).catch((err)=> console.log(err))
}

use(url)


fs.writeFile('addressList.json',(err)=>{
    if(err){
        console.log('There is no data in the file')
    }

})