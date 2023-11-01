const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1 style="text-align: center;">We are here for docker!</h1>'
        + '<p style="text-align: center;">I am enjoying learning this. '
        + 'I hope I do not get any sleep issues for staying up so late.</p>'
        + '<p style="text-align: center;">I think I will also be learning nodejs for BE Dev.</p>');
});


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
