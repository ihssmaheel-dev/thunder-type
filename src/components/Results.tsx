import { motion } from "framer-motion";
import { formatPercentage } from "../utils/helpers";
import { State } from "../hooks/useEngine";

const Results = ({
	state,
	wpm,
	errors,
	accuracyPercentage,
	total,
	className,
}: {
	state: State,
	wpm: number,
	errors: number,
	accuracyPercentage: number,
	total: number,
	className: string
}) => {

	const initial = { opacity: 0 };
	const animate = { opacity: 1 };
	const duration = { duration: 0.3 };

	if(state !== "finish") {
		return null;
	}

	return (
		<motion.ul
			className={`flex flex-col items-center text-primary-400 space-y-3 ${className}`}
		>
			<motion.li
				initial={initial}
				animate={animate}
				className="text-xl font-semibold"
				transition={{ ...duration, delay: 0 }}
			>
				Results
			</motion.li>
			<motion.li
				initial={initial}
				animate={animate}
				className="font-bold"
				transition={{ ...duration, delay: 0.5 }}
			>
				Accuracy: {formatPercentage(accuracyPercentage)}
			</motion.li>
			<motion.li
				initial={initial}
				animate={animate}
				className="font-bold"
				transition={{ ...duration, delay: 1 }}
			>
				WPM: {wpm}
			</motion.li>
			<motion.li
				initial={initial}
				animate={animate}
				className="text-red-500 font-bold"
				transition={{ ...duration, delay: 1.5 }}
			>
				Errors: {errors}
			</motion.li>
			<motion.li 
				initial={initial}
				animate={animate}
				className="font-bold"
				transition={{ ...duration, delay: 2 }}
			>
				Typed: {total}
			</motion.li>
		</motion.ul>
	)
}

export default Results