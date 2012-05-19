# Templates Collection

Support a templates collection to allow multiple template links to be returned in the same representation.[1]

1. Add an optional top-level object: <code>templates</code> which contains a collection of <code>link</code> objects.
2. Support optional <code>type</code> property (STRING) as a child of the <code>link</code> object. This property holds the IANA-registered media type (i.e. "application/x-www-form-urlencoded", etc.) of the target resource.

```json
{ "collection" :
  {
    "version" : "1.0",
    "href" : "http://example.org/artifacts/",
    
    "templates" :
    [
      { 
        "rel": STRING,
        "href" : URI,
        "type" : STRING,
        "name" : STRING
      },
      { 
        "rel": STRING,
        "href" : URI,
        "type" : STRING,
        "name" : STRING
      }
    ]
  } 
}
```

### References
1. https://groups.google.com/forum/#!msg/collectionjson/bIZzvXQiXks/nVYS5rmkIkcJ
