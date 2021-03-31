import UserForm from "../components/UserForm";
import DisplayInsurances from "../components/DisplayInsurances";

export default function Start({
  onSubmitForm,
  insurances,
  userToCalculate,
  componentToDisplay,
  setComponentToDisplay,
}) {
  return (
    <>
      {componentToDisplay === "form" && (
        <UserForm
          onSubmitForm={onSubmitForm}
          insurances={insurances}
          setComponentToDisplay={setComponentToDisplay}
          userToCalculate={userToCalculate}
        />
      )}
      {componentToDisplay === "solution" && (
        <DisplayInsurances
          insurances={insurances}
          setComponentToDisplay={setComponentToDisplay}
          userToCalculate={userToCalculate}
        />
      )}
    </>
  );
}
