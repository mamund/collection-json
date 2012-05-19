# URI Templates

Support RFC6570[1] URI Templates. Processors will match the <code>data[]</code> elements to any terms in the <code>URI-Template</code>.[2]

1. Add optional property to query objects: <code>encoding</code>. 
2. Support either <code>"uri-template"</code> or <code>"url-encoded"</code> value for <code>encoding</code> property. If the property is missing, assume <code>encoding : "url-encoded"</code>
3. Allow <code>href</code> property to contain <code>URI</code> or <code>URI-Template</code>

```json
{
  "queries" :
  [
    {
      "encoding" : "uri-template", 
      "href" : "http://example.org/posts/{id}",
      "rel" : "search",
      "data" :
      [
        {"name" : "id", "value" : []} 
      ]
    }
  ]
}
```

### References
1. RFC6570 : http://tools.ietf.org/html/rfc6570
2. https://groups.google.com/forum/?fromgroups#!topic/collectionjson/xt3N_4vqauY
