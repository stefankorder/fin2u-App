This is the documentation of the app's form longer inputfield:

with content

```js
<LongerInputField
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
<LongerInputField
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
<LongerInputField
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
<LongerInputField
  focused={""}
  userData={""}
  value="lastname"
  formValidation={["lastname"]}
  errorText="Bitte mind. 3 Buchstaben eingeben!"
  inputName="NACHNAME"
/>
```
