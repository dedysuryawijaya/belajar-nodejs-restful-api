# Contact API Spec

## Create Contact

Endpoint : POST /api/contacts

Headers :
- Authorization : token

Request Body : 

```json
{
    "first_name" : "Dedy",
    "last_name" : "Wijaya",
    "email" : "dedy@gmail.com",
    "phone" : "088213606881"
}
```

Response Body Success : 

```json
{
    "data" : {
        "id" : 1,
        "first_name" : "Dedy",
        "last_name" : "Wijaya",
        "email" : "dedy@gmail.com",
        "phone" : "088213606881"
    }
}
```

Response Body Error :

```json
{
    "errors" : "Email is not valid format"
}
```

## Update Contacts

Endpoint : PUT /api/contacts/:id

Headers :
- Authorization : token

Request Body : 

```json
{
   "first_name" : "Dedy",
    "last_name" : "Wijaya",
    "email" : "dedy@gmail.com",
    "phone" : "088213606881"
}
```

Response Body Success : 

```json
{
    "data" : {
        "id" : 1,
        "first_name" : "Dedy",
        "last_name" : "Wijaya",
        "email" : "dedy@gmail.com",
        "phone" : "088213606881"
    }
}
```

Response Body Error :

```json
{
    "errors" : "Email is not valid format"
}
```

## Search Contacts

Endpoint : GET /api/contacts/:id

Headers :
- Authorization : token

Response Body Success : 

```json
{
    "data" : {
        "id" : 1,
        "first_name" : "Dedy",
        "last_name" : "Wijaya",
        "email" : "dedy@gmail.com",
        "phone" : "088213606881"
    }
}
```

Response Body Error :

```json
{
    "errors" : "Contacts is not found"
}
```

## GET Contact

Endpoint : GET /api/contacts/

Headers :
- Authorization : token

Query params :
- name : Search by first_name or last_name, using like, optional
- email : Search by email using like, optional
- phone : Search by phone using like, optional
- page : number of page, default 1
- size : size per page, default 10


Response Body Success : 

```json
{
    "data" : [
        {
            "id" : 1,
            "first_name" : "Dedy",
            "last_name" : "Wijaya",
            "email" : "dedy@gmail.com",
            "phone" : "088213606881"
        }
        {
            "id" : 2,
            "first_name" : "Dedy",
            "last_name" : "Wijaya",
            "email" : "dedy@gmail.com",
            "phone" : "088213606881"
        }
        {
            "id" : 3,
            "first_name" : "Dedy",
            "last_name" : "Wijaya",
            "email" : "dedy@gmail.com",
            "phone" : "088213606881"
        }
    ],
    "paging" : {
        "page" : 1,
        "total_page" : 3,
        "total_item" : 30
    }
}
```

Response Body Error :

```json
{
    "errors" : "Errors get data"
}
```

## Remove Contact

Endpoint : DELETE /api/contacts/:id

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
    "errors" : "Contact is not found"
}
```
