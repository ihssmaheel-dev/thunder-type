import cn from "classnames";
import Caret from "./Caret";

const Character = ({ actual, expected }: { actual: string, expected: string }) => {

	const isCorrect = actual === expected;
	const isWhitespace = expected === " ";

	return (
		<span
			className={cn({
				"text-red-500": !isCorrect && !isWhitespace,
				"text-primary-400": isCorrect && !isWhitespace,
				"bg-red-500/50": !isCorrect && isWhitespace,
			})}
		>{expected}</span>)
}

const UserTypings = ({
	userInput,
	className,
	words
}:{
	userInput: string,
	words: string,
	className?: string
}) => {
	const typedCharacters = userInput.split("");

	return (
		<div className={className}>
			{typedCharacters.map((char, index) => {
				return <Character key={`${char}_${index}`} actual={char} expected={words[index]}/>
			})}
			<Caret />
		</div>
	)
}

export default UserTypings