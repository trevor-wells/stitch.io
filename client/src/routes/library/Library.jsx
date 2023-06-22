import { useState } from "react"

export default function Library(){

    const {fullScreen, setFullScreen} = useState(false)

    function goFullscreen(id) {
        var element = document.getElementById(id);
        if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        }
    }

    return(
        <>
            <div className = "outlet">
              <h1>Library Page</h1>
              <h1>Your Games Go Here!</h1>
            </div>
        </>
    )
}