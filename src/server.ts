import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.json({ hello: 'world'});
})

export const server = async() => {
    app.listen(8080);
    console.log(`Server started at http://localhost:${8000}`);
    console.log('Press Ctrl+c to quit');    
};

