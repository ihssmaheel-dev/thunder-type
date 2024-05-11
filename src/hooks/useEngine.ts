import { useCallback, useEffect, useState } from "react";
import useWords from "./useWords";
import useCountdownTimer from "./useCountdownTimer";
import useTypings from "./useTypings";
import { countErrors } from "../utils/helpers";

export type State = "start" | "run" | "finish";

const NUMBER_OF_WORDS = 12;
const COUNTDOWN_SECONDS = 30;

const useEngine = () => {
    const [state, setState] = useState<State>("start");
    const { words, updatedWords } = useWords(NUMBER_OF_WORDS);
    const { timeLeft, startCountdown, resetCountdown } = useCountdownTimer(COUNTDOWN_SECONDS);
    const { typed, cursor, clearTyped, resetTotalTyped, totalTyped } = useTypings(state !== 'finish');

    const [errors, setErrors] = useState(0);

    const isStarting = state === "start" && cursor > 0;
    const areWordsFinished = cursor === words.length;

    const sumErrors = useCallback(() => {
        const wordsReached = words.substring(0, cursor);
        setErrors((prevErrors) => prevErrors + countErrors(typed, wordsReached))

    }, [typed, words, cursor]);

    useEffect(() => {
        if(isStarting) {
            setState("run");
            startCountdown();
        }

    }, [isStarting, startCountdown, cursor]);

    useEffect(() => {
        if(!timeLeft) {
            console.log("time is up...");
            setState("finish");
            sumErrors();
        }
    }, [timeLeft, sumErrors])
    
    useEffect(() => {
        if(areWordsFinished) {
            console.log("words are finished!");
            sumErrors();
            updatedWords();
            clearTyped();
        }
    }, [
        cursor,
        words,
        clearTyped,
        typed,
        areWordsFinished,
        updatedWords,
        sumErrors
    ]);

    const restart = useCallback(() => {
        console.log("restrating...");
        resetCountdown();
        resetTotalTyped();
        setState("start");
        setErrors(0);
        updatedWords();
        clearTyped();
    }, [clearTyped, updatedWords, resetCountdown, resetTotalTyped]);

    return { state, words, timeLeft, typed };
};

export default useEngine;