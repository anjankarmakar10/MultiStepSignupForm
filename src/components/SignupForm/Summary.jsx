import styles from "./SignupForm.module.css";
const Summary = ({ information, selectedPlanData }) => {
  return (
    <section className={styles.step}>
      <h2>Order Summary</h2>

      <dl>
        <dt>Name:</dt>
        <dd>{information.name}</dd>
        <dt>Email:</dt>
        <dd>{information.email}</dd>
        <dt>Plan:</dt>
        <dd>{selectedPlanData?.label || "(None)"}</dd>
      </dl>
    </section>
  );
};

export default Summary;
