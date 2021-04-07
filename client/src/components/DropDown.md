This is the documentation of the app's form dropdown menu:

opened

```js
<DropDown
  field={"employed"}
  userData={{
    jobStatus: "employed",
  }}
  value="jobStatus"
  errorText="Bitte wähle deinen Berufsstatus!"
  dropDownName="BERUFSSTATUS"
  formValidation={[]}
  focused={"jobStatus"}
  menuPoints={[
    {
      pointValue: "employed",
      pointName: "angestellt",
    },
    {
      pointValue: "selfEmployed",
      pointName: "selbstständig",
    },
    {
      pointValue: "civilServants",
      pointName: "verbeamtet",
    },
  ]}
  userToCalculate={{
    jobStatus: "employed",
  }}
/>
```

unopened

```js
<DropDown
  field={"employed"}
  userData={{
    jobStatus: "employed",
  }}
  value="jobStatus"
  errorText="Bitte wähle deinen Berufsstatus!"
  dropDownName="BERUFSSTATUS"
  formValidation={[]}
  focused={""}
  menuPoints={[
    {
      pointValue: "employed",
      pointName: "angestellt",
    },
    {
      pointValue: "selfEmployed",
      pointName: "selbstständig",
    },
    {
      pointValue: "civilServants",
      pointName: "verbeamtet",
    },
  ]}
  userToCalculate={{
    jobStatus: "employed",
  }}
/>
```

unopened and validated

```js
<DropDown
  field={""}
  userData={{
    jobStatus: "",
  }}
  value="jobStatus"
  errorText="Bitte wähle deinen Berufsstatus!"
  dropDownName="BERUFSSTATUS"
  formValidation={["jobStatus"]}
  focused={""}
  menuPoints={[
    {
      pointValue: "employed",
      pointName: "angestellt",
    },
    {
      pointValue: "selfEmployed",
      pointName: "selbstständig",
    },
    {
      pointValue: "civilServants",
      pointName: "verbeamtet",
    },
  ]}
  userToCalculate={{
    jobStatus: "",
  }}
/>
```
