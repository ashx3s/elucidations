# WIP Notes on Creating a Class Point in Typescript

Uses a circle  to create points.



## Notes
- Tried using `<text x="10" y="10"text=anchor="end dominant-baseline="central">a</text>` but there isn't as good of older browser support and it wasn't as accurate. It's something to play with but for now I think subtracting x y vals from cs is the way
- draw function makes the svg


## Properties

- `x`: The x-coordinate of the point.
- `y`: The y-coordinate of the point.
- `label`: descriptive label

## Generated Pattern
```svg
<g id="a">
<text x="8" y="8" >a</text>
<circle cx="10" cy="10" r="1"/>
</g>
```

