# Planning Doc

## Models

### Recipe

- Title
- keyIngredients
- Servings
- Prep Time
- Image
- Description/Instructions
- isApproved (true/false)

### Comment

- Name
- Content

## Dependencies

- express
- mongoose
- method-override
- node
- body-parser
- cors
- bcrypt
- passport
- passport-jwt
- jwt-simple

## Routes

### Recipe

| URL           | Path | Method | Action  | Description                                      |
| ------------- | ---- | ------ | ------- | ------------------------------------------------ |
| /api/recipe   | /    | GET    | index   | list all recipes in the db                       |
| /api/recipe   | /    | POST   | filter  | filter all recipes against array of search terms |
| /api/recipe   | /new | POST   | create  | Create new recipe in the database                |
| /api/recipe/1 | /:id | GET    | show    | Show a single recipe                             |
| /api/recipe/1 | /:id | PUT    | update  | Update recipe in the database                    |
| /api/recipe/1 | /:id | DELETE | destroy | Delete a recipe                                  |

### Comments

| URL            | Path        | Method | Action | Description                      |
| -------------- | ----------- | ------ | ------ | -------------------------------- |
| /api/comment   | /recipe/:id | POST   | create | create a new comment on a recipe |
| /api/comment/1 | /:id        | DELETE | delete | Delete a recipe                  |

## API Documentation

All API requests should be made at:

```
https://emergency-recipe-backend.herokuapp.com/api
```

### Recipe API Requests

| Action                                                                                         | Method | URL path                   | Instructions                                                                                                                                                                                   |     |
| ---------------------------------------------------------------------------------------------- | ------ | -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- |
| Search for recipe by ingredients. Recipes returned with contain all ingredients in your search | POST   | "/api/recipe"              | Make a POST request, sending with it an array of search terms                                                                                                                                  |     |
| View a single recipe                                                                           | GET    | "/api/recipe/{id}"         | Make a GET request, replacing {id} with the recipe's id                                                                                                                                        |     |
| Create a new recipe in the database                                                            | POST   | "/api/recipe/new"          | Make a POST request, sending with it an object containing key value pairs for the new recipe                                                                                                   |     |
| Update a recipe in the database                                                                | PUT    | "/api/recipe/{id}"         | Make a PUT request, sending with it all of the key value pairs for the recipe to be updated. Note that even if the value isn't updated, it's value must be sent in order to preserve the data. |     |
| Delete a recipe                                                                                | DELETE | "/api/recipe/{id}"         | Make a DELETE request, replacing {id} with the recipe's id you wish to delete                                                                                                                  |     |
| Add a comment to a recipe                                                                      | POST   | "/api/comment/recipe/{id}" | Make a POST request, replacing {id} with the relevant recipe's id. Send the comment's "content" and commenter's "name".                                                                        |     |
| Delete a comment from the database                                                             | DELETE | "api/comment/{id}"         | Make a DELETE request, replacing {id} with the comment to be deleted                                                                                                                           |     |
| Sign up a new user                                                                             | POST   | "/users/signup"            | Make a POST request, sending "username" and "password" values                                                                                                                                  |     |
| Log in an existing user                                                                        | POST   | "/users/login"             | Make a POST request, sending "username" and "password" values.                                                                                                                                 |     |
