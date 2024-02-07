import styles from "./SignupForm.module.css";
const Info = ({ information, setInformation }) => {
  return (
    <section className={styles.step}>
      <h2>Personal Information</h2>

      <label htmlFor="name">Preferred name:</label>
      <input
        id="name"
        value={information.name}
        onChange={(e) =>
          setInformation({ ...information, name: e.target.value })
        }
        required
        type="text"
      />

      <label htmlFor="email">Email address:</label>
      <input
        id="email"
        value={information.email}
        onChange={(e) =>
          setInformation({ ...information, email: e.target.value })
        }
        required
        type="email"
      />
    </section>
  );
};

export default Info;
