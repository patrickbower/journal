- split the data up (formatting)
- split by year first
- (array of results)
- then split into months
- (array of results)

```
[
  {
    "year": YYYY,
    "months": [
      {
        "month": MM,
        "entries": [
          {
            // original data goes here
          }
        ]
      },
      {
        "month": MM,
        // something
      },
      {
        "month": MM,
        // something
      }
    ]
  }
]
```
