import React, { FormEventHandler } from "react";
import Counter from "components/ref-state/counter";
import Toggle from "components/ref-state/toggle";
import { useState } from "react";
import MemoCallback from "./memo-callback";

interface RefStateProps {}

const RefState: React.FC<RefStateProps> = () => {
  const [checked, setChecked] = useState(false);

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    console.log("checked = ", checked);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Toggle
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <Counter />
        <button>Submit</button>
      </form>
      <MemoCallback />
    </div>
  );
};

export default RefState;
