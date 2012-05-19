# Errors Collection

Support errors collection to allow multiple error objects to be returned in the same representation.[1]

1. Add an optional top-level object: <code>errors</code>
2. Support optional arrays for a single named error object

```json
{ "collection" :
  {
    "version" : "1.0",
    "href" : "http://example.org/friends/",
    
    "errors" :
    {
      "password": 
      [
        {
          "title": "Validation Error",
          "code": "X422",
          "message": "Must be at least 6 characters"
        }, 
        {
          "title": "Validation Error",
          "code": "X422",
          "message": "Must contain at least one number"
        }
      ],
      "name": 
      {
        "title": "Validation Error",
        "code": "X422",
        "message": "Must not be blank"
      }
    }
  } 
}
```

### References
1. https://groups.google.com/forum/?fromgroups#!topic/collectionjson/9R-BLJQ8bLk
