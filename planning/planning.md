# Planning Doc

## Models

### Recipe

- Title
- Key Ingredients
- Servings
- Prep Time
- Image
- Description/Instructions
- isApproved (true/false)

### Rating

- ThumbRating (True/False)
- RecipeID

## Dependencies

- express
- mongoose
- method-override
- node
- body-Parser
- cors

## Routes

| URL            | Path      | Method | Action  | Description                           |
| -------------- | --------- | ------ | ------- | ------------------------------------- |
| /recipe        | /         | GET    | index   | list all recipes                      |
| /recipe/new    | /new      | GET    | new     | Render a form to create a new recipe  |
| /recipe        | /         | POST   | create  | Create new recipe in the database     |
| /recipe/1      | /:id      | GET    | show    | Show a single recipe                  |
| /recipe/1/edit | /:id/edit | GET    | edit    | Render form to update a single recipe |
| /recipe/1      | /:id      | PUT    | update  | Update recipe in the database         |
| /recipe/1      | /:id      | DELETE | destroy | Delete a recipe                       |
