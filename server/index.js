const express = require('express');
const messages = require('./controller/messages_controller')
const app = express();
app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));

console.log(messages.create)
app.post('/api/messages', messages.create);
app.get('/api/messages', messages.read);
app.put('/api/messages/:id', messages.update);
app.delete('/api/messages/:id', messages.delete);

const port = 3001;

app.listen(port, () =>{
    console.log(`Server listening on port ${port}`)
});




