import Caret from "./Caret";

const Character = ({ actual, expected }: { actual: string, expected: string }) => {
	return <span className="text-primary-400">{expected}</span>
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