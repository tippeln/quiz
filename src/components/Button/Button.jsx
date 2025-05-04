import styles from "./Buttun.module.css";

function Button(props) {
  const { type, diabled, onClick, children } = props;

  return (
    <button
      className={styles.button}
      type={type}
      disabled={diabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
