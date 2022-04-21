import * as React from "react";

interface CharacterAttributeProps {
  label: string;
  value: string | string[];
}

function CharacterAttribute(props: CharacterAttributeProps) {
  const { label, value } = props;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "start",
        alignItems: "center",
        fontSize: "0.5rem",
        margin: "0.5rem",
      }}
    >
      <h3
        style={{
          margin: "0",
          marginRight: "0.5rem",
        }}
      >
        {label}:
      </h3>
      {Array.isArray(value) ? (
        <ul>
          {value.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      ) : (
        <span>{value}</span>
      )}
    </div>
  );
}

export { CharacterAttribute };
