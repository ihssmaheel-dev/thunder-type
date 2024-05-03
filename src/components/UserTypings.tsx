const Character = ({ char }: { char: string }) => {
	return <span className="text-primary-400">{char}</span>
}

const UserTypings = ({
	userInput,
	className,
}:{
	userInput: string,
	className?: string
}) => {
	const typedCharacters = userInput.split("");

	return (
		<div className={className}>
			{typedCharacters.map((char, index) => {
				return <Character key={`${char}_${index}`} char={char}/>
			})}
		</div>
	)
}

export default UserTypings