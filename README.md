## My Store API

<p>This is an Ecommerce API Application. The API will provide essential functionality for managing products, user accounts, shopping carts, orders, payments, and more. It will be accessible via RESTful endpoints to support both web and mobile clients.</p>

---

### Important links:

1.  Presentation slide :
    <a href="https://tinyurl.com/4pmmc86w">click</a>

2.  API research:
    <a href="https://tinyurl.com/mufyupha">click</a>

3.  API Documentation:
    <a href="https://tinyurl.com/7m2m8uy7">click</a>

        You will find:

        	a. Project Idea
        	b. Checklist
        	c. SRS
        	d. Entities/Schema/Model
        	e. ER Diagram
        	f. API Endpoints
        	g. Open API Specification
        	h. File Structure

### Installation
#### Video tutorial: <a href="https://www.loom.com/share/166a35e016024c1b9cf6ffef24c2fbf3?sid=8f0f2bc1-410c-49fe-b2e7-445d48e2c4d5">click</a>

```
npm install
```

### API endpoints:

#### Auth: (Base_Url: http://localhost:4000/api/v1)

```
POST (public) - '/register' - register a new user (default role: user)

POST (public) - '/login' - login or sign in (generate a access token for 1 hour)
```

#### User: (Base_Url: http://localhost:4000/api/v1)

```
Admin only:
-----------
GET (private) - '/users' - Fetch all users

GET (private) - '/users/:id' - Fetch a user

DELETE (private) - '/users/:id' - Delete a user
```

#### Product: (Base_Url: http://localhost:4000/api/v1)

```
Admin only:
-----------
POST (private) - '/products' - Create a new Product
PATCH (private) - '/products/:id' - Update a product
DELETE (private) - '/products/:id' - Delete a product

Users/Visitors:
---------------
GET (public) - '/products' - Fetch all products
GET (public) - '/products/:id' - Fetch a product

```

### ER Diagram:

![er diagram](./er-diagram.jpg)
