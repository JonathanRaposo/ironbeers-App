This app is using the ironbeers api. The api's route is https://ih-beers-api2.herokuapp.com/beers . The available endpoints are the following:

Method Endpoint Response (200) Action
GET / [beers] Get all the beers from the DB
GET /:id { beer } Get the a single/specific beer
GET /random { beer } Get a random beer from the DB
POST /new { message: "New beer successfully saved to database!"} Create a new beer
GET /search?q={query} [beers] Get beers from the DB whose name contains the search term.
