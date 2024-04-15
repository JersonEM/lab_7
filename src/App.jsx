import './App.css'
import { Button } from './components/Button';
import { TextoActualizado } from './components/CompWidthProps';
import { Image } from './components/RandomComponent';
import { Button } from './components/Button'


function App() {

  const buttonText = "Count : ";

  return (
    <>
      <h1>HOLA DESDE VITE</h1>
      <Button/>
      <TextoActualizado/>
      <h2>solo una imagen XD</h2>
      <Image />
      <Button text={buttonText}/>
    </>
  )
}

export default App
