const express = require('express')
const app = express()

app.use(express.static('build'))
app.set('views', './build')

app.get('*', function (req, res) {
  res.sendFile(`${process.cwd()}/build/index.html`)
})

app.listen(3333, function(){
	console.log('Express Server is running on port 3333')
})