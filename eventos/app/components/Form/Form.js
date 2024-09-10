import styles from '../Form.module.css';

const Form = ({ fields, title, buttonText, onSubmit }) => (
    <form className={styles.formContent} onSubmit={onSubmit}>
      <h2 className={styles.formTitle}>{title}</h2>
      {fields.map(({ label, type, placeholder }, index) => (
        <div key={index} className={styles.formGroup}>
          <label>{label}</label>
          <input type={type} placeholder={placeholder} />
        </div>
      ))}
      <button className={styles.formButton} type="submit">{buttonText}</button>
    </form>
  );
  
  export default Form;
  