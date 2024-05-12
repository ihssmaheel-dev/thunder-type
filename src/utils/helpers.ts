export const formatPercentage = (percentage: number) => {
    return percentage.toFixed(0) + "%";
}

export const calculateWpm = (totalTyped: number, timeLeft: number, countdownSeconds: number) => {
    if (totalTyped > 0) {
        const elapsedTime = countdownSeconds - timeLeft;
        const typedWords = totalTyped / 5; // Assuming 5 characters per word
        const wordsPerMinute = (typedWords / (elapsedTime / 60)).toFixed(2);
        return parseFloat(wordsPerMinute);
    }

    return 0;
};

export const countErrors = (actual: string, expected: string) => {
    const expectedCharacters = expected.split("");

    return expectedCharacters.reduce((errors, expectedChar, i) => {
        const actualChar = actual[i];
        if(actualChar !== expectedChar) {
            errors++;
        }

        return errors
    }, 0);
};

export const calculateAccuracyPercentage = (errors: number, total: number) => {
    if(total > 0) {
        const corrects = total - errors;
        return (corrects / total) * 100;
    }

    return 0;
};