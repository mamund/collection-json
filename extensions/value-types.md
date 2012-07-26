# Array values 

Support Array values[1].
Rationale:
The core spec is severely limiting the possible objects you can express.
I would really like to be able to have any type of JSON value (objects, arrays, simple values) in the "value" property of 
a data object, but I can see how this may become a problem.


1. Expand the "value" property to allow for JSON arrays of
1.1: Simple values already defined in the core spec.
1.1: Embedded data objects. This SHOULD only be one level deep.


```json
{ "collection" :
  {
    "version" : "1.0",
    "href" : "http://example.org/sessions/",

    "items" : [
      {
        "href" : "http://example.org/session/1",
        "data" : [
          {"name" : "title", "value" : "J. Doe does something strange", "prompt" : "Title"},
          {"name" : "tags", "value" : ["article", "json"], "prompt" : "Tags"},
          {"name" : "contacts", "value" : [
		{ "name": "name", "value": "foo"}
	    ], 
          "prompt" : "Contacts"}
        ],
      }
    ],
  }
}
```

2. Allow any type of JSON value in the data, "value" property.

```json
{ "collection" :
  {
    "version" : "1.0",
    "href" : "http://example.org/sessions/",

    "items" : [
      {
        "href" : "http://example.org/session/1",
        "data" : [
          {"name" : "title", "value" : "J. Doe does something strange", "prompt" : "Title"},
          {"name" : "tags", "value" : ["article", "json"], "prompt" : "Tags"},
          {"name" : "contacts", "value" : 
		{ "name", "foo"}
	    ], 
          "prompt" : "Contacts"}
        ],
      }
    ],
  }
}
```

### References
