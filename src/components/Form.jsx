import { useEffect, useRef } from "react";
import RegularButton from "./RegularButton";
import Select from "./Select";

export default function Form({ handleSubmit, handleChange, isFirstRender }) {
  const divRef = useRef(null);

  useEffect(() => {
    !isFirstRender && divRef.current.focus();
  }, [isFirstRender]);

  return (
    <div className="form-container" ref={divRef} tabIndex={-1}>
      <p className="p--regular">
        Customize the game by selecting an emoji category and a number of memory
        cards.
      </p>
      <form className="wrapper">
        <Select handleChange={handleChange} />
        <RegularButton handleClick={handleSubmit}>Start Game</RegularButton>
      </form>
    </div>
  );
}
