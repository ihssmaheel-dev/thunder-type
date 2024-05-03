import { faker } from "@faker-js/faker"

const words = faker.word.words(10);

const App = () => {
  return <div className='text-4xl text-center text-slate-500'>{words}</div>
}

export default App
