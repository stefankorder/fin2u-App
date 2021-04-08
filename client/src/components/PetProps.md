This is the documentation of the app's form pet part:

With a value selected

```js
<PetProps
  userData={{
    petSpecies: "dog",
  }}
  formValidation={[]}
/>
```

Without a value selected

```js
<PetProps
  userData={{
    petSpecies: "",
  }}
  formValidation={[""]}
/>
```

Without a value selected and validated

```js
<PetProps
  userData={{
    petSpecies: "",
  }}
  formValidation={["petSpecies"]}
/>
```
