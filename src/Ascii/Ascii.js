import React, { useState, Fragment } from "react";
import Generator                     from "./Components/Generator";
import Selector                      from "./Components/Selector";
import List                          from "./Components/List";
import NavBar                        from "./Components/NavBar";
import { AsciiSelect, AsciiList }    from "./Components/AsciiContext";
import style                         from "./Ascii.module.css";

const Ascii = () => {
  const [pageSwitch, setPageSwitch]   = useState(false);
  const [selectAscii, setSelectAscii] = useState(AsciiSelect._currentValue);
  const [asciiList, setAsciiList]     = useState([]);

  const changeAscii = () => {
      setPageSwitch((prev) => !prev);

  };
  const selectAsciiTransfer = (value) => {
    setSelectAscii(value);
  };
  const submitAscii = (value) => {
    setAsciiList((prev) => [...prev, value]);
  };
  return (
    <div className={style.AsciiContainer}>
      <AsciiList.Provider value={asciiList}>
        <AsciiSelect.Provider value={selectAscii}>
          <NavBar />
          {pageSwitch ? (
            <Selector
              selectAscii={selectAsciiTransfer}
              changeAscii={changeAscii}
            />
          ) : (
            <Fragment>
              <Generator changeAscii={changeAscii} submitAscii={submitAscii} />
              <List />
            </Fragment>
          )}
        </AsciiSelect.Provider>
      </AsciiList.Provider>
    </div>
  );
};

export default Ascii;
