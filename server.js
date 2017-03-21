// Require Node's http module and assign it to a variable
var http = require('http')

// Create a new server that just is a whale at every route
var server = http.createServer(function (request, response) {
  if (request.url === '/') {
    response.end(
      '<h1>Hello</h1>'
    )
  } else if (request.url === '/randomjokenumber') {
    randomJoke = Math.random()*4;
    window.onload = function() {
      response.end(
    	if (randomJoke == 1) {
    		<p> Why did the donut visit the dentist? </p>
        <p> To get a new filling. </p>)
    	}

    	if (randomJoke == 2) {
        response.end(
        <p>Why did the bee marry? </p>
        <p>He’s finally found his honey. </p>)
      }

    	if (randomJoke == 3) {
        response.end(
        <p>Why does it suck to be a penguin?  </p>
        <p>Because even when you get angry, you still look cute.</p>
        )
    	}


}
  } else if (request.url === '/cuteness') {
    response.end('<img src="/cuteness.jpg" alt="Waving hi">')
  } else {
    <h1> ERROR 404 </h1>
  }
})

// Listen on port 8080, so that we can reach the app at
// localhost:8080
var port = process.env.PORT || 8080
server.listen(port)

// Output a friendly message to the terminal
console.log('Server running at http://localhost:' + port + '/')
