import { createRef } from 'react'

const Admin = () => {
   const mainPanel = createRef()
   const [image, setImage] = useState(bgImage)
   const [color, setColor] = useState('blue')
   const [fixedClasses, setFixedClasses] = useState('dropdown show')
   const [mobileOpen, setMobileOpen] = useState(false)
   const handleImageClick = (img) => {
      setImage(img)
   }
   return <div />
}

export default Admin
