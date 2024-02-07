import { useId } from "react";
import { PLANS } from "../../constants";
import styles from "./SignupForm.module.css";
const Plan = ({ plan: value, setPlan }) => {
  const id = useId();

  return (
    <section className={styles.step}>
      <h2>Select Plan</h2>

      <ul className={styles.planList}>
        {PLANS.map((plan) => {
          const labelId = `${id}-${plan.value}`;

          return (
            <li key={plan.value}>
              <input
                id={labelId}
                value={plan.value}
                onChange={(e) => setPlan(e.target.value)}
                required
                type="radio"
                name="plan"
                checked={value === plan.value}
              />
              <label htmlFor={labelId}>
                <span className={styles.planTitle}>{plan.label}</span>
                <p>{plan.description}</p>
              </label>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Plan;
