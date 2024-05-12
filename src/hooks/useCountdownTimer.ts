import { useCallback, useEffect, useRef, useState } from "react";

const useCountdownTimer = (seconds: number) => {
	const [timeLeft, setTimeLeft] = useState(seconds);
	const intervalRef = useRef<NodeJS.Timer | null>();

	const startCountdown = useCallback(() => {
		console.log("starting countdown...");

		intervalRef.current = setInterval(() => {
			setTimeLeft((timeLeft) => timeLeft - 1);
		}, 1000);
	}, [setTimeLeft]);

	const resetCountdown = useCallback(() => {
		console.log("resetting countdown...");

		if(intervalRef.current) {
			clearInterval(intervalRef.current as unknown as number);
		}

		setTimeLeft(seconds);
	}, [seconds]);

	// when the countdown reaches 0, clear the countdown interval
	useEffect(() => {
		if(!timeLeft && intervalRef.current) {
			console.log("clearing timer...");

			clearInterval(intervalRef.current as unknown as number);
		}
	}, [timeLeft, intervalRef])

	return { timeLeft, startCountdown, resetCountdown };
}

export default useCountdownTimer;