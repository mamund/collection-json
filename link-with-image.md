# Link with Image

Support decorating link objects with an image attribute.[1] 


1. Add an optional property on <code>link</code> objects: <code>image</code>
2. The <code>image</code> property should refer to a valid image URI 

```json
{
    "collection": {
        "version": "1.0",
        "href": "http://example.org/navigation",
        "links": [
            {
                "rel": "prev",
                "href": "http://example.org/prev",
                "prompt": "Previous Item",
                "image": "http://example.org/leftarrow.png"
            },
            {
                "rel": "next",
                "href": "http://example.org/next",
                "prompt": "Next Item",
                "image": "http://example.org/rightarrow.png"
            }
        ]
    }
}
```

### References
1. [https://groups.google.com/forum/#!topic/collectionjson/CaZyXy-DfKw](https://groups.google.com/forum/#!topic/collectionjson/CaZyXy-DfKw)
