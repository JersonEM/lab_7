import './App.css'
import { Image } from './components/RandomComponent';
import { Button } from './components/Button'

function App() {

  const buttonText = "Count : ";

  return (
    <>
      <h2>solo una imagen XD</h2>
      <Image />
      <Button text={buttonText}/>
    </>
  )
}

export default App
