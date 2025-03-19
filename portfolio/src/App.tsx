import './App.css'
import { Card } from './components/ui/card'
// import { AvatarImage } from './components/ui/avatar'
import { Avatar, AvatarImage } from './components/ui/avatar'
import { AvatarFallback } from '@radix-ui/react-avatar'

function App() {
  return (
    <>
    <div className='dark '>
      <Card className="rounded-none min-h-screen min-w-screen px-20">
        <div className='grid grid-cols-3 gap-4 p-2 '>
        <Avatar className="justify-self-center my-auto h-fit">
          <AvatarImage></AvatarImage>
          <AvatarFallback>SD</AvatarFallback>
        </Avatar>
        <Card className='col-span-2 h-fit'>
          <div className="flex justify-start px-2 italic ">
            Hi! I am Denn :3 Nice to meet you!<br/>
            I am a backend dev and I like working on exciting problems.<br/>
          </div>
        </Card>
        </div>
      </Card>
    </div>
    </>
  )
}

export default App
