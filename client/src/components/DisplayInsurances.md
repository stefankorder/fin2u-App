This is the documentation of the app's insurances page:

With a few insurances

```jsx
import { BrowserRouter as Router } from "react-router-dom";

<Router>
  <DisplayInsurances
    insurances={[
      {
        name: "Privathaftpflichtversicherung",
        _id: 12345,
        status: 0,
      },
      {
        name: "Krankenversicherung",
        _id: 12345,
        status: 2,
      },
      {
        name: "Lebensversicherung",
        _id: 12345,
        status: 3,
      },
      {
        name: "Berufsunfähigkeitsversicheurng",
        _id: 12345,
        status: 1,
      },
      {
        name: "Hausratversicherung",
        _id: 12345,
        status: 2,
      },
    ]}
    userToCalculate={{
      name: "Max ",
    }}
  />
</Router>;
```
