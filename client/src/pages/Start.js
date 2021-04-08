import PropTypes from "prop-types";
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

Start.propTypes = {
  onSubmitForm: PropTypes.func,
  insurances: PropTypes.array,
  userToCalculate: PropTypes.object,
  componentToDisplay: PropTypes.string,
  setComponentToDisplay: PropTypes.func,
};
