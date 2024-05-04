import { useState } from "react";
import useWords from "./useWords";

export type State = "start" | "run" | "finish";

const NUMBER_OF_WORDS = 12;

const useEngine = () => {
    const [state, setState] = useState<State>("start");
    const { words, updatedWords } = useWords(NUMBER_OF_WORDS);

    return { state, words };
};

export default useEngine;