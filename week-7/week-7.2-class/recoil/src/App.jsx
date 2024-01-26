import { useContext, useMemo, useState } from 'react'
import './App.css'
import { CountContext } from './context'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { countAtom, evenSelector } from './atom/count'

function App() {

  return (
    <div>
      <RecoilRoot>
      <Count />
      </RecoilRoot>
    </div>
  )
}

function Count(){
  // console.log("count")
  return (
    <div>
      <CountRenderer />
      <Button />
      <EventCountRenderer />
    </div>
  )
}



function CountRenderer(){
  const count = useRecoilValue(countAtom);
  return <div>
    <b>
    {count}
   </b>
  </div>
}

function EventCountRenderer(){
// const count = useRecoilValue(countAtom);
// const isEven = useMemo(()=>{
//   return (count % 2 == 0);
// },[count])
const isEven = useRecoilValue(evenSelector)
  return <div>
    { isEven ? "it is even" : null}
  </div>
}

function Button(){
  console.log("check")
  const setCount = useSetRecoilState(countAtom) // more optimized ...... button component do not get re-rendered
  // const [count,setCount] = useRecoilState(countAtom)
  return <div>
    <button onClick={()=>{
      setCount(c => c + 1);
    }}>
      Increase
    </button>
    <button onClick={()=>{
      setCount(c => c - 1);
    }}>
      Decrease
    </button>
  </div>
}

export default App
