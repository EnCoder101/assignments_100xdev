import { FIlterTodoInput } from './components/FIlterTodoInput'
import { Todos } from './components/Todo'
import { TodosInput } from './components/TodosInput'
import { RecoilRoot } from 'recoil'

function App() {


  return (
    <div>
      <RecoilRoot>
      <TodosInput />
      <FIlterTodoInput />
      <Todos />
      </RecoilRoot>
    </div>
  )
}

export default App
