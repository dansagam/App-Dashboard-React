import logo from './logo.svg'
import './App.css'
import Button from './components/CustomButtons/Button'
import Input from './components/CustomInputs/Input'
import Card from './components/Card/Card/Card'

const App = function () {
   return (
      <div className="App">
         <Card>
            <Input
               labelText="Lamborghini Mercy, ."
               id="about-me"
               formControlProps={{
                  fullWidth: true,
               }}
               inputProps={{
                  multiline: true,
                  rows: 5,
               }}
            />
         </Card>
         <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
               Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
               className="App-link"
               href="https://reactjs.org"
               target="_blank"
               rel="noopener noreferrer"
            >
               Learn React
            </a>
            <Button color="danger" round fullWidth>
               help
            </Button>
         </header>
      </div>
   )
}

export default App
