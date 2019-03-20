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
- body-parser
- cors

## Routes

### Recipe

| URL           | Path | Method | Action  | Description                       |
| ------------- | ---- | ------ | ------- | --------------------------------- |
| /api/recipe   | /    | POST   | index   | list all recipes                  |
| /api/recipe   | /new | POST   | create  | Create new recipe in the database |
| /api/recipe/1 | /:id | GET    | show    | Show a single recipe              |
| /api/recipe/1 | /:id | PUT    | update  | Update recipe in the database     |
| /api/recipe/1 | /:id | DELETE | destroy | Delete a recipe                   |

### To search through recipes by ingredients:
