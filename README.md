# api-server
[gitHub](https://github.com/alsatarysamah/api-server)

[heroku](https://samah-api-server1.herokuapp.com/)

[Action](https://github.com/alsatarysamah/api-server/actions)

[pullRequest](https://github.com/alsatarysamah/api-server/pull/2)

![](./UML.png)

# SQL Models

there is two models

1-food with column name

2-clothes

# Routes

**1-get all food**

foodRouter.get("/food", getAllFoods);

**2-Add a Record**

foodRouter.post("/food", createRecord);

**3-Get One Record**

foodRouter.get("/food/:id", getOneFoods);

**4-updating record**

foodRouter.put("/food/:id",updateing);

**5-deleting record**

foodRouter.delete("/food/:id",deleting);

# collection

collection class contain:

*constructor (model)*

*creat(obj) method*

*read(id) method*

*update(id,obj)*

*delete(id)*
# Testing Requirements

tests is:

1-deleting a record

2-404 on a bad route

3-404 bad route

4-updating a record

5-adding a food

6- geting all food 

# Deploy to dev branch
 ACP on dev branch. after we check it passing all test Open a pull request from dev to main merge this branch Once the tests pass, Heroku will deploymy “main” branch to my “production” app!
