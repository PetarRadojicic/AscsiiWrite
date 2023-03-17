import React, {useState,useRef,useEffect,useContext,Fragment} from "react";
import style                                                  from "../Ascii.module.css";
import Alert                                                  from "./Alert";
import { AsciiSelect }                                        from "./AsciiContext";

const Generator = (props) => {
  const SelectedAscii = useContext(AsciiSelect);

  const InputlRef                      = useRef(null);
  const [onSubmit, setOnSubmit]        = useState([]);
  const [asciiOutput, setAsciiOutput]  = useState("");
  const [AlertShow, setAlertShow]      = useState(false);
  const alpahabet =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz 1234567890-=/-+`!@#$%^&()|/<>.,[]{}~?;:_'\" ";

  let {
    SelectedAsciiName,
    SelectedAsciiWidthOfLetter,
    SelectedAsciiHeightOfLetter,
  } = SelectedAscii;

  const separateAscii = Array.from(
    { length: SelectedAsciiHeightOfLetter },
    () => []
  );
  const finalAscii = Array.from(
    { length: SelectedAsciiHeightOfLetter },
    () => []
  );
  const DummySelectedAsciiWidthOfLetter = SelectedAsciiWidthOfLetter;

  for (let i = 0; i < alpahabet.length; i++) {
    for (let i = 0; i < SelectedAsciiHeightOfLetter; i++) {
      separateAscii[i].push(
        String(SelectedAsciiName[i]).substring(
          SelectedAsciiWidthOfLetter - DummySelectedAsciiWidthOfLetter,
          SelectedAsciiWidthOfLetter
        )
      );
    }
    SelectedAsciiWidthOfLetter += DummySelectedAsciiWidthOfLetter;
  }

  const ChangeAscii = () => {
    for (let i = 0; i < SelectedAsciiHeightOfLetter; i++) {
      finalAscii[i].push(
        InputlRef.current.value
          .split("")
          .map((e) => separateAscii[i][alpahabet.indexOf(e)])
      );
    }
    setOnSubmit(finalAscii);
  };

  const Click = () => {
    InputlRef.current.style.borderColor = "white";
    ChangeAscii();
  };

  useEffect(() => {
    setAsciiOutput(onSubmit.map((e, index) => <pre key={index}>{e}</pre>));
  }, [onSubmit]);

  const changeAscii = () => {
    props.changeAscii();
  };

  const Submit = () => {
    const regex = new RegExp(InputlRef.current.pattern);
    const value = InputlRef.current.value;
    if (!regex.test(value)) {
        setAlertShow((prev) => !prev);
      InputlRef.current.style.borderColor = "red";
    } else {
      props.submitAscii(asciiOutput);
      InputlRef.current.value = "";
      setAsciiOutput("");
    }
  };

  return (
    <Fragment>
      <div className={style.GeneratorDiv}>
        <button onClick={changeAscii} className={style.GeneratorButton}>
          Change Ascii Art
        </button>
        <label className={style.GeneratorLabel}>{asciiOutput}</label>
        <input
          type="text"
          onChange={Click}
          ref={InputlRef}
          pattern=".+"
          className={style.GeneratorInput}
          style={{ borderColor: "none" }}
        ></input>
        <button onClick={Submit} className={style.GeneratorButton}>
          Submit
        </button>
      </div>
      {AlertShow && (
        <Alert
          ErrorText={"Submit Can't Be Empty!"}
          RemoveAlert={() => setAlertShow(false)}
        />
      )}
    </Fragment>
  );
};

export default Generator;