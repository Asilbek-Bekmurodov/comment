import React, { ChangeEventHandler } from "react";

interface ToggleProps {
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const Toggle: React.FC<ToggleProps> = ({ checked, onChange }) => {
  return (
    <div>
      <input checked={checked} onChange={onChange} type='checkbox' />
      <span>{checked ? "roziman" : "noroziman"}</span>
    </div>
  );
};

export default Toggle;
