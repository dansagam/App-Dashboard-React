import './App.css'
// import * as Emotion from '@emotion/styled'
// import * as EmReact from '@emotion/react'
import Button from './components/CustomButtons/Button'
import Input from './components/CustomInputs/Input'
import Card from './components/Card/Card/Card'
import CardAvatar from './components/Card/CardAvatar/CardAvatar'
import CardBody from './components/Card/CardBody/CardBody'
import CardFooter from './components/Card/CardFooter/CardFooter'
import CardHeader from './components/Card/CardHeader/CardHeader'
import AdminNavbarLinks from './components/Navbars/AdminNavbarLinks'
// import avatar from './img/faces/marc.jpg'

const App = function () {
   return (
      <div className="App">
         <AdminNavbarLinks />
         <Card plain>
            <CardHeader color="primary" plain>
               <h4 color="red">Edit Profile</h4>
               <p>Complete your profile</p>
            </CardHeader>
            <CardAvatar
               component="img"
               profile
               image="./img/faces/marc.jpg"
               height="194"
            />
            <CardBody plain>
               dsdkdsdsdsdadsfdsfasdfdfjsld loremdsdjbkdslsdjnsndl
            </CardBody>
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
            <CardFooter>
               <Button color="danger" round fullWidth>
                  help
               </Button>
            </CardFooter>
         </Card>
      </div>
   )
}

export default App
