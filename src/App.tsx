import { faker } from "@faker-js/faker"
import RestartButton from "./components/RestartButton";
import Results from "./components/Results";
import UserTypings from "./components/UserTypings";

const words = faker.word.words(10);

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
  return (
    <>
      <CountdownTimer timeLeft={30}/>
        <WordsContainer>
          <GeneratedWords words={words}/>
          <UserTypings className="absolute inset-0" userInput={words} />
        </WordsContainer>
      <RestartButton 
        className={"mx-auto mt-10 text-slate-500"} 
        onRestart={() => null} 
      />
      <Results
        className="mt-10"
        errors={10}
        accuracyPercentage={100}
        total={200}
      />
    </>
  )
}



export default App
