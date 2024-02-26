# Address API Spec

## Create Addresss

Endpoint : POST /api/contacts/:contactiId/addresses

Headers :
- Authorization : token

Request Body : 

```json
{
    "street" : "Jalan apa",
    "city" : "Kota apa",
    "province" : "Provinsi apa",
    "country": "Negara apa",
    "postal_code" : "Kode Pos"
}
```

Response Body Success : 

```json
{
    "data" : {
        "id" : 1,
        "street" : "Jalan apa",
        "city" : "Kota apa",
        "province" : "Provinsi apa",
        "country": "Negara apa",
        "postal_code" : "Kode Pos"
    }
}
```

Response Body Error :

```json
{
    "errors" : "Country is required"
}
```

## Update Address

Endpoint : PUT /api/contacts/:contactId/addresses/:addressId

Headers :
- Authorization : token

Request Body : 

```json
{
    "street" : "Jalan apa",
    "city" : "Kota apa",
    "province" : "Provinsi apa",
    "country": "Negara apa",
    "postal_code" : "Kode Pos"
}
```

Response Body Success : 

```json
{
    "data" : {
        "id" : 1,
        "street" : "Jalan apa",
        "city" : "Kota apa",
        "province" : "Provinsi apa",
        "country": "Negara apa",
        "postal_code" : "Kode Pos"
    }
}
```

Response Body Error :

```json
{
    "errors" : "Country is required"
}
```

## Search Contacts

Endpoint : GET /api/contacts/:contactId/addresses/:addressId

Headers :
- Authorization : token

Request Body : 

```json
{
    "street" : "Jalan apa",
    "city" : "Kota apa",
    "province" : "Provinsi apa",
    "country": "Negara apa",
    "postal_code" : "Kode Pos"
}
```

Response Body Success : 

```json
{
    "data" : {
        "id" : 1,
        "street" : "Jalan apa",
        "city" : "Kota apa",
        "province" : "Provinsi apa",
        "country": "Negara apa",
        "postal_code" : "Kode Pos"
    }
}
```

Response Body Error :

```json
{
    "errors" : "Address not found"
}
```

## GET Contact

Endpoint : GET /api/contacts/:contactId/addresses

Headers :
- Authorization : token

Query params :
- street : Search by street, using like, optional
- city : Search by city using like, optional
- country : Search by country using like, optional
- page : number of page, default 1
- size : size per page, default 10


Response Body Success : 

```json
{
    "data" : [
        {
            "id" : 1,
            "street" : "Jalan apa",
            "city" : "Kota apa",
            "province" : "Provinsi apa",
            "country": "Negara apa",
            "postal_code" : "Kode Pos"
        }
        {
            "id" : 2,
            "street" : "Jalan apa",
            "city" : "Kota apa",
            "province" : "Provinsi apa",
            "country": "Negara apa",
            "postal_code" : "Kode Pos"
        }
        {
            "id" : 3,
            "street" : "Jalan apa",
            "city" : "Kota apa",
            "province" : "Provinsi apa",
            "country": "Negara apa",
            "postal_code" : "Kode Pos"
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
    "errors" : "Contact not found"
}
```

## Remove Contact

Endpoint : DELETE /api/contacts/:contactId/addresses/:addressId

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
    "errors" : "Address is not found"
}
```
