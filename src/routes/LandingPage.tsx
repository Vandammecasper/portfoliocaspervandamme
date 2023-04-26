import React from "react"
import avatar from "../assets/avatar.png"
import Header from "../components/Header"
import BottomNav from "../components/BottomNav"
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import avatar_loop from "../assets/avatar_loop.json"


export default () => {
    return(
        <main className="h-screen">
            <Header/>
            <div className="w-screen h-90% lg:grid lg:grid-rows-2 lg:grid-flow-col lg:gap-80 content-center lg:pt-28">
                <div className="block lg:hidden w-80 pl-16 pt-6">
                    {/* <img className="rounded-full" src={avatar} alt="Avatar"/> */}
                    <Player
                        autoplay
                        loop
                        src={avatar_loop}
                        style={{ height: '240px', width: '240px' }}
                        >
                        <Controls visible={false}/>
                    </Player>
                </div>
                <div className="row-span-2 lg:mt-12">
                    <h2 className="text-3xl lg:text-4xl 3xl:text-5xl font-medium text-slate-300 pl-10 pt-2 lg:pl-20 lg:pt-0">Hello, I am</h2>
                    <h1 className="text-5xl lg:text-7xl 3xl:text-8xl font-bold text-sky-500 pt-3 pl-10 lg:pl-20">Casper</h1>
                    <h1 className="text-5xl lg:text-7xl 3xl:text-8xl font-bold text-sky-500 pl-10 lg:pl-20">Van Damme</h1>
                    <h4 className="text-2xl lg:text-3xl 3xl:text-4xl font-medium text-slate-200 pt-3 pl-10 lg:pl-20">Student next web development at Howest</h4>
                </div>
                <div className="hidden lg:block lg:row-span-2 lg:w-96">
                    {/* <img className="rounded-full" src={avatar} alt="Avatar"/> */}
                    <Player
                        autoplay
                        loop
                        src={avatar_loop}
                        style={{ height: '100%', width: '100%' }}
                        >
                        <Controls visible={false}/>
                    </Player>
                </div>
            </div>
            <BottomNav/>
        </main>
    )
}