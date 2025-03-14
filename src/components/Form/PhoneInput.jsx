import React from "react";
import InputMask from "react-input-mask";

export function PhoneInput(value, onChange) {
  return (
    <InputMask mask="(99) 999999999" value={value} onChange={onChange}>
      {(inputProps) => <input {...inputProps} />}
    </InputMask>
  );
}
