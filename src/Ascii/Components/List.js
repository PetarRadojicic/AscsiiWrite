import React, { useContext } from "react";
import { AsciiList }         from "./AsciiContext";
import style                 from "../Ascii.module.css";

const List = () => {
  const asciiList = useContext(AsciiList);

  const Delete = (e) => {
    e.target.parentElement.parentElement.remove();
  };

  const Copy = (e) => {
    navigator.clipboard.writeText(
      Array.from(e.target.parentElement.previousSibling.childNodes)
        .map((node) => node.textContent.trim())
        .join("\n")
    );
  };

  const ListOutput = asciiList.map((e, index) => (
    <div key={index} className={style.test}>
      <div id={index} className={style.AsciiOutputList}>
        {e.map((e, index) => (
          <li key={index}>{e}</li>
        ))}
      </div>
      <div className={style.ListButtonGroup}>
        <button onClick={Delete} className={style.ListButton}>
          Remove
        </button>
        <button
          onClick={Copy}
          className={`${style.ListButton} ${style.ListCopyButton}`}
        >
          Copy
        </button>
      </div>
    </div>
  ));

  return <ul className={style.ListList}>{ListOutput}</ul>;
};

export default List;
