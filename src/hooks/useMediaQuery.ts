import { useState, useEffect } from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    // Cette condition peut provoquer une mise à jour à chaque render, car `matches` est dans la dépendance
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    // On crée un listener qui met à jour `matches` à chaque changement de taille
    const listener = () => setMatches(media.matches);

    window.addEventListener("resize", listener);

    // Nettoyage
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};
export default useMediaQuery;  // <-- export par défaut
