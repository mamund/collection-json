# Template Data Validation

Support template data validation by adding required fields (minimal dataset) and regular expression validation. A non-required field can still be validated by a regular expression, iff a value has been provided.

1. Add an optional property to the <code>data</code> object: required (boolean)
2. Add an optional property to the <code>data</code> object: regexp (string pattern)

```json
{ "collection" :
  {
    "version" : "1.0",
    "href" : "http://example.org/users",

    "template" : {
      "data" : [
        {"name" : "username", "value" : "", "prompt" : "Login Name", "regexp" : "^[a-zA-Z0-9]*$", "required" : "true"},
        {"name" : "email", "value" : "", "prompt" : "Email", "regexp" : "^[\w\d.@]*$", "required" : "true"},
        {"name" : "gender", "value" : "", "prompt" : "Gender", "regexp" : "^(m|f)$"}
      ]
    }
  }
}
```

### References
1. https://groups.google.com/forum/#!topic/collectionjson/RPQcM_WX7Y0
