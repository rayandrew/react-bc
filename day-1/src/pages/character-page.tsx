import React from "react";

import { Character } from "../components/character";

function CharacterPage() {
  const [character, setCharacter] = React.useState<
    Record<string, string | string[]>
  >({});

  React.useEffect(() => {
    async function fetchCharacter() {
      try {
        const response = await fetch("https://swapi.dev/api/people/1");
        const data = await response.json();
        setCharacter(data);
      } catch (e: unknown) {
        console.error(e);
      }
    }

    fetchCharacter();
  }, []);

  return <Character {...character} />;
}

export { CharacterPage };
