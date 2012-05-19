# Model

Support decorating links w/ a "model" value[1].

1. Add an optional property on <code>link</code> objects: <code>model</code> (STRING)

```json
{ "collection" :
  {
    "version" : "1.0",
    "href" : "http://example.org/blogs/",
    
    "links" : [
      {"rel" : "collection", "href" : "http://example.org/posts", "model": "post" },
      {"rel" : "collection", "href" : "http://example.org/comments", "model": "comment"},
      {"rel" : "collection", "href" : "http://example.org/users", "model": "user"}
    ]
  }
}
```

### References
1. https://groups.google.com/forum/?fromgroups#!topic/collectionjson/8AknQAkEu5k
