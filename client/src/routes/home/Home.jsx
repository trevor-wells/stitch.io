export default function Home(){
    return(
        <div className = " w-screen h-[94vh] bottom-0 flex flex-wrap items-center justify-center text-center">
            <h1 className="font-bold text-[10vh]">Welcome to stitch.io!</h1>
            <div className="break"/>
            <h1>A site where you can upload your own indie games and share them with others.</h1>
            <div className="break"/>
            <a href           = "https://www.linkedin.com/in/trevor-e-wells/">
                <img
                    className = "w-[6vw] h-[6vw]"
                    src       = "https://cdn-icons-png.flaticon.com/512/174/174857.png"
                />
            </a>
            <a href           = "https://github.com/trevor-wells">
                <img
                    className = "w-[6vw] h-[6vw]"
                    src       = "https://cdn-icons-png.flaticon.com/512/25/25231.png"
                />
            </a>
            <a href           = "https://trevor-wells.medium.com/">
                <img
                    className = "w-[6vw] h-[6vw]"
                    src       = "https://cdn-icons-png.flaticon.com/512/5968/5968854.png"
                />
            </a>
        </div>
    )
}