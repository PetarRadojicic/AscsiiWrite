import style from "../Ascii.module.css";

const Alert = (props) => {
  return (
    <div className={style.Alert} onClick={() => props.RemoveAlert()}>
      <div className={style.AlertMessage} onClick={() => props.RemoveAlert()}>
        <h2 className={style.AlertH1}>{props.ErrorText}</h2>
        <button
          className={style.AlertButton}
          onClick={() => props.RemoveAlert()}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Alert;
