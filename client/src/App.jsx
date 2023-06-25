import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar"
import useUserStore from './hooks/userStore'
import {Cloudinary} from "@cloudinary/url-gen"
import {AdvancedImage} from '@cloudinary/react'
import {fill} from "@cloudinary/url-gen/actions/resize"

export default function App() {

  // // Create a Cloudinary instance and set your cloud name.
  // const cld = new Cloudinary({
  //   cloud: {
  //     cloudName: 'stitchio'
  //   }
  // })

  // // Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.
  // const myImage = cld.image('docs/models'); 
  // console.log(myImage);

  // // Resize to 250 x 250 pixels using the 'fill' crop mode.
  // myImage.resize(fill.width(250).height(250));

  // // Use AdvancedImage component to display image
  // <AdvancedImage cldImg={myImage} />
 
  const {setUser} = useUserStore()

  useEffect(() => {
    fetch("/api/check_session")
    .then(response => {
      if (response.ok)
        return response.json()
      })
    .then(user => setUser(user))}, [])

  return (
      <div>
        <NavBar />
        <Outlet />
      </div>
  )
}
