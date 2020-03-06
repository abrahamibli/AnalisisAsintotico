<!-- Note: This file is automatically generated from source code comments. Changes made in this file will be overridden. -->

# Function kron

Calculates the kronecker product of 2 matrices or vectors.

NOTE: If a one dimensional vector / matrix is given, it will be
wrapped so its two dimensions.
See the examples.


## Syntax

```js
math.kron(x, y)
```

### Parameters

Parameter | Type | Description
--------- | ---- | -----------
`x` | Array &#124; Matrix | First vector
`y` | Array &#124; Matrix | Second vector

### Returns

Type | Description
---- | -----------
Array &#124; Matrix | Returns the kronecker product of `x` and `y`


## Examples

```js
math.kron([[1, 0], [0, 1]], [[1, 2], [3, 4]])
// returns [ [ 1, 2, 0, 0 ], [ 3, 4, 0, 0 ], [ 0, 0, 1, 2 ], [ 0, 0, 3, 4 ] ]

math.kron([1,1], [2,3,4])
// returns [ [ 2, 3, 4, 2, 3, 4 ] ]
```


## See also

[multiply](multiply.md),
[dot](dot.md),
[cross](cross.md)