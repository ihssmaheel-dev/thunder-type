import RestartButton from "./components/RestartButton";
import Results from "./components/Results";
import UserTypings from "./components/UserTypings";
import useEngine from "./hooks/useEngine";
import { calculateAccuracyPercentage } from "./utils/helpers";

const GeneratedWords = ({ words }: { words: string }) => {
  return <div className='text-slate-500'>{words}</div>;
}

const CountdownTimer = ({ timeLeft }: { timeLeft: number }) => {
  return <h2 className="text-primary-400 font-bold">Time: {timeLeft}</h2>;
}

const WordsContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative max-w-xl mt-3 text-3xl leading-relaxed break-all">
      {children}
    </div>
  )
}

const App = () => {
  const { state, words, timeLeft, typed, errors, totalTyped, wpm, restart } = useEngine();


  return (
    <>
      <CountdownTimer timeLeft={timeLeft}/>
        <WordsContainer>
          <GeneratedWords words={words}/>
          <UserTypings className="absolute inset-0" words={words} userInput={typed} />
        </WordsContainer>
      <RestartButton 
        className={"mx-auto mt-10 text-slate-500"} 
        onRestart={restart} 
      />
      <Results
        state={state}
        wpm={wpm}
        className="mt-10"
        errors={errors}
        accuracyPercentage={calculateAccuracyPercentage(errors, totalTyped)}
        total={totalTyped}
      />
    </>
  )
}



export default App
