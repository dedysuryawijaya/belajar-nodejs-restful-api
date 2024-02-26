# User API Spec

## Register User

Endpoint : POST /api/users

Request Body : 

```json
{
    "username" : "wydesu",
    "password" : "rahasia",
    "name" : "Dedy Surya Wijaya"
}
```

Response Body Success : 

```json
{
    "data" : {
        "username" : "wydesu",
        "name" : "Dedy Surya Wijaya"
    }
}
```

Response Body Error :

```json
{
    "errors" : "Username already registered"
}
```

## Login User

Endpoint : POST /api/users/login

Request Body : 

```json
{
    "username" : "wydesu",
    "password" : "rahasia",
}
```

Response Body Success : 

```json
{
    "data" : {
        "token" : "unique-token",
        "username" : "wydesu",
        "name" : "Dedy Surya Wijaya"
    }
}
```

Response Body Error :

```json
{
    "errors" : "Username or password wrong"
}
```

## Update User

Endpoint : PATCH /api/users/current

Headers :
- Authorization : token

Request Body : 

```json
{
    "name" : "Dedy Surya Wijaya dua", //optional
    "password" : "rahasia", // optional
}
```

Response Body Success : 

```json
{
    "data" : {
        "username" : "wydesu",
        "name" : "Dedy Surya Wijaya dua"
    }
}
```

Response Body Error :

```json
{
    "errors" : "Name length max 100"
}
```

## Get User

Endpoint : GET /api/users/current

Headers :
- Authorization : token

Response Body Success : 

```json
{
    "data" : {
        "username" : "wydesu",
        "name" : "Dedy Surya Wijaya dua"
    }
}
```

Response Body Error :

```json
{
    "errors" : "Unauthorized"
}
```

## Logout User

Endpoint : DELETE /api/users/logout

Headers :
- Authorization : token

Response Body Success : 

```json
{
    "data" : "OK"
}
```

Response Body Error :

```json
{
    "errors" : "Unauthorized"
}
```