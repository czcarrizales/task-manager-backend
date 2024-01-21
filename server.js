const express = require('express')
const app = express()

app.get('/api/v1/tasks', (req, res) => {
    res.send('getting all tasks!')
})

app.listen(3000, () => {
    console.log('listening from port 3000')
})