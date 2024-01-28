import './App.css'
import { RevenueCard } from './components/RevenueCard'

function App() {

  return (
    <>
    {/* <div style={{display:'flex',justifyContent:"space-between"}}>
      <div style={{background:"red"}}>abcs</div>
      <div style={{background:"green"}}>abcs</div>
      <div style={{background:"yellow"}}>abcs</div>
      <div style={{background:"red"}}>abcs</div>
      <div style={{background:"green"}}>abcs</div>
      <div style={{background:"yellow"}}>abcs</div>
    </div> */}

    {/* <div className='flex justify-around'>
      <div className='bg-red-500'>abcs</div>
      <div style={{background:"green"}}>abcs</div>
      <div style={{background:"yellow"}}>abcs</div>
      <div style={{background:"red"}}>abcs</div>
      <div style={{background:"green"}}>abcs</div>
      <div style={{background:"yellow"}}>abcs</div>
    </div> */}
    {/* <div className='grid grid-cols-10'>
      <div className='bg-red-500 col-span-3'>abcs</div>
      <div className='bg-green-500 col-span-2'>abcs</div>
      <div className='bg-yellow-500 col-span-4'>abcs</div>
      <div className='bg-blue-500 col-span-1'>abcs</div>
    </div> */}
    {/* <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
      <div className='bg-red-500 md:col-span-1'>Hey 1</div>
      <div className='bg-yellow-500 md:col-span-1'>Hey 2</div>
      <div className='bg-green-500 md:col-span-1'>Hey 3</div>
    </div> */}
      <div className='grid grid-cols-3'>
        <div className='p-2'>
          <RevenueCard title={"Amount Pending"} amount={"92,312.20"} orderCount={"13"} />  
        </div>
      </div>
    </>
  )
}

export default App
