<!-- Note: This file is automatically generated from source code comments. Changes made in this file will be overridden. -->

# Function acoth

Calculate the hyperbolic arccotangent of a value,
defined as `acoth(x) = atanh(1/x) = (ln((x+1)/x) + ln(x/(x-1))) / 2`.

For matrices, the function is evaluated element wise.


## Syntax

```js
math.acoth(x)
```

### Parameters

Parameter | Type | Description
--------- | ---- | -----------
`x` | number &#124; Complex &#124; Array &#124; Matrix | Function input

### Returns

Type | Description
---- | -----------
number &#124; Complex &#124; Array &#124; Matrix | Hyperbolic arccotangent of x


## Examples

```js
math.acoth(0.5)       // returns 0.8047189562170503
```


## See also

[acsch](acsch.md),
[asech](asech.md)