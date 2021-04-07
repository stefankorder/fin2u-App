This is the documentation of the app's form motorcycle part:

With a value inside the inputfields

```js
<MotorcycleProps
  userData={{
    motorcycleAge: 3,
    motorcycleValue: 15000,
  }}
  formValidation={[]}
/>
```

Without a value inside the inputfields

```js
<MotorcycleProps
  userData={{
    motorcycleAge: "",
    motorcycleValue: "",
  }}
  formValidation={[]}
/>
```

With activated validation

```js
<MotorcycleProps
  userData={{
    motorcycleAge: "",
    motorcycleValue: "",
  }}
  formValidation={["motorcycleAge", "motorcycleValue"]}
/>
```
