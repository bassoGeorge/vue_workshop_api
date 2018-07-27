#VueJS workshop
### _@ Unfold UI_


This is the backend server for Vue JS simple movie database application.
It basically uses [json-server](https://github.com/typicode/json-server).

#### Installation
```
npm install
```

#### Running the server
You can run a temporary server with...
```
npm start
```
No changes to the database will be persisted after a server shutdown.


To run a persistent server, use
```
npm run persistent
```
This will commit changes to db.json

The server runs on `http://localhost:3000`


### URLs
* `GET /movies` : The movie database
* `GET /movies/:id` : Details of a single movie
* `GET /comments` : All the comments
* `POST /comments`: Add a new comment
* `PUT /comments/:id`: Upsert an existing comment

To embed comments into the result of `/movies` or `/movies/:id` use `?_embed=comments`


##### Format of a comment
```json
{
  "Name": "<Name of author>",
  "Text": "<The comment text>",
  "Rating": 4,
  "movieId": "<the id of the movie>"
}
```

