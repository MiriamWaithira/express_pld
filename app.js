const express = require('express');

const app = express();

app.listen(4000);

app.get('/', (req, res) => {
    res.send('<h1>Hello Hello</h1>');
}
);

app.get('/about', (req, res) => {
    res.send('<h1>This is the about the about page</h1>');
}
);

app.get('/about/page', (req, res) => {
    res.send('<h1>This is an added page</h1>');
}
);