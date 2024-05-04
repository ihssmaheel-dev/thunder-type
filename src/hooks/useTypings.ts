import { useCallback, useEffect, useRef, useState } from "react"

const useTypings = (enabled: boolean) => {
	const [cursor, setCursor] = useState(0);
	const [typed, setTyped] = useState<string>("");
	const totalTyped = useRef(0);

	const keydownHandler = useCallback(() => {}, []);

	//attach the keydown event listener to record keystrokes
	useEffect(() => {
		window.addEventListener("keydown", keydownHandler);

		// Remove event listeners on cleanup
		return () => {
			window.removeEventListener("keydown", keydownHandler);
		}

	}, [keydownHandler])
}

export default useTypings