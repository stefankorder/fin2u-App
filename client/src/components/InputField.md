This is the documentation of the app's form inputfield:

with content

```js
<InputField
  focused={"lastname"}
  userData={"Mustermann"}
  value="lastname"
  formValidation={[]}
  errorText="Bitte mind. 3 Buchstaben eingeben!"
  inputName="NACHNAME"
/>
```

without content but with focus

```js
<InputField
  focused={"lastname"}
  userData={""}
  value="lastname"
  formValidation={[]}
  errorText="Bitte mind. 3 Buchstaben eingeben!"
  inputName="NACHNAME"
/>
```

without content and without focus

```js
<InputField
  focused={""}
  userData={""}
  value="lastname"
  formValidation={[]}
  errorText="Bitte mind. 3 Buchstaben eingeben!"
  inputName="NACHNAME"
/>
```

without content, focus and validated

```js
<InputField
  focused={""}
  userData={""}
  value="lastname"
  formValidation={["lastname"]}
  errorText="Bitte mind. 3 Buchstaben eingeben!"
  inputName="NACHNAME"
/>
```
