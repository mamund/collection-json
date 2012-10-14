# Render Embed

Support `embed` as a valid value for the `render` property of `data` elements.[1]

1. Add an optional valid value of `embed` for the `render` property 

```json
{ "collection" :
  {
    "version" : "1.0",
    "href" : "http://example.org/friends/",
    
    "items" :
    [
      {
        "href" : "...",
        "data" :
        [
          {"name" : "avatar", "value" : "http://photos.org/mike", "render" : "image"},
          {"name" : "passport-photo", "value" : "http://passports.org/mike", "render" : "embed"},
          {"name" : "inline-text", "value" : "http://text.net/mike-msg", "render" : "embed"},
          {"name" : "external-text", "value" : "http:/text.net/mike-msg", "render" : "link"}
        ]
      }
    ]
  } 
}
```

### References
1. https://groups.google.com/d/topic/collectionjson/5uGaal-_TuE/discussion
