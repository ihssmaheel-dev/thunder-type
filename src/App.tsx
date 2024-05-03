import { faker } from "@faker-js/faker"

const words = faker.word.words(10);

const GeneratedWords = ({ words }: { words: string }) => {
  return <div className='text-4xl text-center text-slate-500'>{words}</div>;
}


const App = () => {
  return <GeneratedWords words={words}/>
}



export default App
