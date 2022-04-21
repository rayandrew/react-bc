import * as React from "react";

import { CharacterAttribute } from "./character-attribute";

type CharacterProps = Record<string, string | string[]>;

function Character(props: CharacterProps) {
  return (
    <div>
      {Object.entries(props).map(([label, value]) => {
        return <CharacterAttribute key={label} label={label} value={value} />;
      })}
    </div>
  );
}

export { Character };
