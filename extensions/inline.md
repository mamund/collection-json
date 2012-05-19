# Inline Collections

Support inline collections[1].

1. Add an optional top-level object <code>inline</code> as a child of <code>collection</code>
2. Add an optional property to the <code>link</code> object: <code>length</code> (number)
3. Add an optional property to the <code>link</code> object: <code>inline</code> (boolean)

```json
{ "collection" :
  {
    "version" : "1.0",
    "href" : "http://example.org/posts/",

    "items" : [
      {
        "href" : "http://example.org/posts/1",
        "data" : [
          {"name" : "full-name", "value" : "J. Doe", "prompt" : "Full Name"},
          {"name" : "email", "value" : "jdoe@example.org", "prompt" : "Email"}
        ],
        "links": [
          { "rel": "comments", "href": "http://example.org/comments/1,2,3,4", "length": 4, "inline":true },
          { "rel": "examples", "href": "http://example.org/examples/a,b,c", "length": 3, "inline":true },
          { "rel": "author", "href": "http://example.org/author/mamund"}
        ]
      }
    ],
    "inline": {
      "http://example.org/comments/1,2,3,4": { /* embedded collection+json */ },
      "http://example.org/examples/a,b,c": { /* embedded collection+json */ }
    }
  }
}
```

### References
1. https://groups.google.com/forum/?fromgroups#!topic/collectionjson/JPNpy0Wx0r0
