import { faker } from "@faker-js/faker"
import RestartButton from "./components/RestartButton";
import Results from "./components/Results";

const words = faker.word.words(10);

const GeneratedWords = ({ words }: { words: string }) => {
  return <div className='text-4xl text-center text-slate-500'>{words}</div>;
}

const CountdownTimer = ({ timeLeft }: { timeLeft: number }) => {
  return <h2 className="text-primary-400 font-bold">Time: {timeLeft}</h2>;
}

const App = () => {
  return (
    <>
      <CountdownTimer timeLeft={30}/>
      <GeneratedWords words={words}/>
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
