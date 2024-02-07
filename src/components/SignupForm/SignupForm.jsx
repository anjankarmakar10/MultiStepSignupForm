import React, { useState } from "react";
import clsx from "clsx";

import StepList from "./StepList";
import styles from "./SignupForm.module.css";
import Info from "./Info";
import Summary from "./Summary";
import Plan from "./Plan";
import { PLANS } from "../../constants";

function SignupForm() {
  const [step, setStep] = React.useState(1);

  const [information, setInformation] = useState({
    name: "",
    email: "",
  });

  const [plan, setPlan] = React.useState(null);

  const selectedPlanData = PLANS.find((p) => p.value === plan);

  const isFinalStep = step === 3;

  function handleResetForm() {
    setInformation({
      name: "",
      email: "",
    });
    setPlan(null);
    setStep(1);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const nextStep = step + 1;

    if (isFinalStep) {
      if (!information.name || !information.email) {
        window.alert("missing data");
        return;
      }
      window.alert(`Submitted:
      Name: ${information.name}
      Email: ${information.email}
      Plan: ${selectedPlanData?.label || "None"}`);
      return;
    }

    setStep(nextStep);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      <header className={styles.header}>
        <StepList
          steps={[
            { value: 1, label: "Info" },
            { value: 2, label: "Plan" },
            { value: 3, label: "Summary" },
          ]}
          activeStep={step}
          onStepChange={(newStep) => setStep(newStep)}
        />
      </header>

      {step === 1 && (
        <Info information={information} setInformation={setInformation} />
      )}
      {step === 2 && <Plan plan={plan} setPlan={setPlan} />}
      {step === 3 && (
        <Summary
          information={information}
          selectedPlanData={selectedPlanData}
        />
      )}

      <section className={styles.actions}>
        <button
          onClick={handleResetForm}
          type="button"
          className={clsx(styles.btn, styles.secondary)}
        >
          Reset
        </button>
        <button className={clsx(styles.btn, styles.primary)}>
          {isFinalStep ? "Submit" : "Continue »"}
        </button>
      </section>
    </form>
  );
}

export default SignupForm;
