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
            <div className="w-screen h-100% xl:grid xl:grid-rows-2 xl:grid-flow-col xl:gap-80 items-center xl:pt-28">
                <div className="block xl:hidden w-80 pl-16 pt-6">
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
                <div className="row-span-2">
                    <h2 className="text-3xl xl:text-4xl font-medium text-slate-300 pl-10 pt-2 xl:pl-20 xl:pt-0">Hello, I am</h2>
                    <h1 className="text-5xl xl:text-7xl font-bold text-sky-500 pt-3 pl-10 xl:pl-20">Casper</h1>
                    <h1 className="text-5xl xl:text-7xl font-bold text-sky-500 pl-10 xl:pl-20">Van Damme</h1>
                    <h4 className="text-2xl xl:text-3xl font-medium text-slate-200 pt-3 pl-10 xl:pl-20">Student next web development at Howest</h4>
                </div>
                <div className="hidden xl:block xl:row-span-2 xl:w-96  xl:mr-20 xl:mt-1">
                    {/* <img className="rounded-full" src={avatar} alt="Avatar"/> */}
                    <Player
                        autoplay
                        loop
                        src={avatar_loop}
                        style={{ height: '375px', width: '375px' }}
                        >
                        <Controls visible={false}/>
                    </Player>
                </div>
            </div>
            <BottomNav/>
        </main>
    )
}