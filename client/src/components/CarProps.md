This is the documentation of the app's form car part:

With a value inside the inputfields

```js
<CarProps
  userData={{
    carAge: 3,
    carValue: 15000,
  }}
  formValidation={[]}
/>
```

Without a value inside the inputfields

```js
<CarProps
  userData={{
    carAge: "",
    carValue: "",
  }}
  formValidation={[]}
/>
```

With activated validation

```js
<CarProps
  userData={{
    carAge: "",
    carValue: "",
  }}
  formValidation={["carAge", "carValue"]}
/>
```
