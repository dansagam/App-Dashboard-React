import routes from '../routes'

const useRoutesName = () => {
   let name = ''
   routes.forEach((route) => {
      if (window.location.href.indexOf(route.layout + route.path) !== -1) {
         name = routes.rtlActive ? route.rtlName : route.name
      }
   })
   return name
}

export default useRoutesName
