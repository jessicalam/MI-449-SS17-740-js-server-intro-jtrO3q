// Require Node's http module and assign it to a variable
var http = require('http')

// Create a new server that just says "Hi!!" at every route
var server = http.createServer(function (request, response) {
  if (request.url === '/') {
    response.end('<h1>HELLO</h1>')
  } else if (request.url === '/randomjoke') {
    // response.write('<h1>Get ready for an amazing joke!</h1>')
    var randomJoke = Math.random() * 4
    if (randomJoke === 1) {
      response.end('<p>Why did the donut visit the dentist? To get a new filling.</p>')
    } else if (randomJoke === 2) {
      response.end('<p>Why did the bee marry? He’s finally found his honey.</p>')
    } else if (randomJoke === 3) {
      response.end('<p>Why does it suck to be a penguin? Because even when you get angry, you still look cute.</p>')
    }
    response.end('<p>Return to the homepage <a href="/">here</a>!</p>')
  } else if (request.url === '/cuteness') {
    response.write('<img src="https://static.pexels.com/photos/8482/animal-dog-pet-indoors.jpg" alt="cute animal">')
    response.end('<p>Return to the homepage <a href="/">here</a>!</p>')
  } else {
    response.write('<h1>ERROR 404</h1><h3>The requested URL ' + request.url + ' could not be found!</h3></p>')
    response.end('<p>Return to the homepage <a href="/">here</a>!</p>')
  }
})

var port = process.env.PORT || 8080
server.listen(port)

// Output a friendly message to the terminal
console.log('Server running at http://localhost:' + port + '/')
