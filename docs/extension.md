#### GET /films
Parameter | Value | Required?
-|-|-
`director` | String | no

Example Request
```sh
curl localhost:3030/films?director=Quentin%20Tarantino
```
Example Response
```
{
  "films": [
    {
      "id": 2,
      "title": "Reservoir Dogs",
      "director": "Quentin Tarantino"
    },
    {
      "id": 4,
      "title": "Django Unchained",
      "director": "Quentin Tarantino"
    }
  ]
}
```

-------

#### GET /films
Parameter | Value | Required?
-|-|-
`limit` | Number | no
`from` | Number | no

Example Request
```sh
curl localhost:3030/films?limit=3&from=6
```
Example Response
```
{
  "films": [
    {
      "id": 6,
      "title": "Dodgeball"
    },
    {
      "id": 7,
      "title": "Stranger Than Fiction"
    },
    {
      "id": 8,
      "title": "This Is The End"
    }
  ]
}
```
