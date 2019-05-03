# Emergency Recipe (Back End)

Emergency Recipe (ER) flips recipe search on it's head – allowing users to search for recipes by the ingredients they already have in hand.

## Getting Started

The Emergency Recipe backend was developed with Express, Node and MongoDB to work in conjunction with the Emergency Recipe Front End app (which was developed in React). The backend provides routes and a recipe API to power search on the frontend.

To tinker under the hood, feel free to fork and clone this repository.

### Prerequisites

We've worked to keep this project fairly light with respect to dependencies. However, a few packages are required:

```
npm i
```

Dependencies should include:

- bcrypt
- body-parser
- cors
- express
- fuse.js
- jwt-simple
- method-override
- mongoose
- parser
- passport
- passport-jwt
- search-index

### Installing

Once you've forked and cloned the repository, it's easy to get started.

```
npm i
```

## Built With

- [Express.js](https://expressjs.com/) - a web application framework for Node.js,
- [MongoDB](https://www.mongodb.com/) - an open-source document database

## Authors

- **Liz Davidson** - _Back End & Authentication_ - [GitHub](<(https://github.com/ldavidson45)>)
- **Yoshi Maisami** - _Back End_ - [GitHub](https://github.com/yoshimaisami)
- **Jasmin Vargas** - _Front End & Forms_ - [GitHub](https://github.com/jasvr)
- **Paul Blake** - _Front End & Design_ - [Portfolio](https://pnblake.com) - [GitHub](https://github.com/pnblake)

## Acknowledgments

- Big thanks to Kiro Risk for taking the time to dicuss Fuse.js, an open-sourced fuzzy search libabry he built [Read more here.](https://fusejs.io/).
- H/T to TheMealDB for providing a free API & database of recipes we could use for our proof-of-concept. If you're interested in building out your own recipe app you should definetly [check them out.](https://www.themealdb.com/).
- H/T to Mikey Stecky-Efantis and his [blog post on using JWT web tokens to authenticate users] (https://medium.com/vandium-software/5-easy-steps-to-understanding-json-web-tokens-jwt-1164c0adfcec).
