# Array values 

Support Array values[1].
Rationale:
The core spec is severely limiting the possible objects you can express.
I am sure more people would like to express more complex items, templates and queries.

This extension changes the property concept to add two more 
Since the value attribute is limited in section 6.6, and it has been defined to be optional.

The definition of the value property has not changed.

I have taken this concept a bit further and will add to the property definition.

"""
A Property MAY have one of the three properties "value", "array" or "object".
An array value is defined to only contain the scalar values as defined by section 6.6. 
An object is a JSON object containing key value pairs where the values are restricted by section 6.6.

"""

Example:

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
          {"name" : "tags", "array" : ["article", "json"], "prompt" : "Tags"},
          {"name" : "contacts", "object" : 
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
