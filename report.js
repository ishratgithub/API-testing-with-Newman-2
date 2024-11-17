const newman = require('newman');
require('dotenv').config();
newman.run({
    collection:'https://api.postman.com/collections/32576823-639498cb-f90a-4408-8173-4417dcefcc2f?access_key=${process.env.access_key}',
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html1',
        }
    }
}, function (err){
    if(err){
        throw err;
    }
    console.log('collection run complete!');
});