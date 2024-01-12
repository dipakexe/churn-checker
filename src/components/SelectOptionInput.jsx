import React from "react";

const SelectOptionInput = ({
  label,
  options,
  name,
  optionLabelFormat,
  optionValueFormat,
}) => {
  return (
    <div
      style={{
        width: "80%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: "0.3em 0em",
      }}
    >
      <label
        style={{
          padding: "0.5em 1em",
          display: "grid",
          placeItems: "center",
        }}
      >
        {label}
      </label>
      <select
        name={name}
        id={name}
        style={{
          padding: "1em 1.5em",
          border: "none",
          background: "transparent",
          textAlign: "right",
          textTransform: "capitalize",
        }}
      >
        {options.map((option, index) => (
          <option
            key={index}
            value={optionValueFormat ? optionValueFormat(option) : option}
          >
            {optionLabelFormat ? optionLabelFormat(option) : option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectOptionInput;
