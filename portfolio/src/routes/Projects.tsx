import React from "react"
import timeline from "../assets/timeline.png"
import react from "../assets/React.png"
import javascript from "../assets/javascript.png"
import python from "../assets/python.png"
import html from "../assets/html.png"
import css from "../assets/css.png"
import csharp from "../assets/Csharp_Logo.png"
import xd from "../assets/Adobe_xd.png"
import after from "../assets/Adobe_after_effects.png"
import Header from "../components/Header"

export default () => {
    return(
        <main className="bg-slate-900 w-screen h-max">
            <Header/>
            <div>
                <h1 className="text-5xl font-medium text-sky-500 pl-20 pt-16">projects()</h1>
                <div className="grid grid-rows-2 grid-flow-col pt-16 pb-10 pl-20 pr-20 gap-16">
                    <div className="bg-slate-800 row-span-2 border-slate-600 border-2 rounded-xl">
                        <h2 className="text-3xl text-slate-200 pt-5 pl-6">Cash Car</h2>
                        <h4 className="text-base text-slate-200 pt-4 pl-6 pr-6">Cash Car was my first ever project. The project is targeted to helping groups of students with a limited amount of people who have a drivers license. A lot of friend groups come to the confrontation that there is always a limited amount of people who have a drivers license and so they are always the ones that drive and also have to pay for fuel. It can be a lot of work to always figure out how much everyone has to pay the driver for the drive to split the costs. Here comes my project in to play. Cash Car can determine how much everyone has to pay the driver by tracking the distance, the fuel price and the amount of people driving along. The log in system works with RFID tags so everyone has his/her own badge. You can see the current drive on the website or on the display. Next to the current drive you can also see the history, your passengers and you can change the fuel price on the website.</h4>
                        <h3 className="text-2xl text-slate-200 pt-5 pl-6">Used skills</h3>
                        <div className="grid grid-rows-3 grid-flow-col pl-6">
                            <img className="row-span-5 pt-8 pb-4" src={python} alt="python"/>
                            <img className="row-span-3 pt-8 pb-4" src={html} alt="html"/>
                            <img className="row-span-3 pt-8 pb-4" src={css} alt="css"/>
                            <img className="row-span-3 pt-8 pb-4" src={javascript} alt="javascript"/>
                        </div>
                    </div>
                    <div className=" bg-slate-800 row-span-2 border-slate-600 border-2 rounded-xl">
                        <h2 className="text-3xl text-slate-200 pt-5 pl-6">Dokemaca</h2>
                        <h4 className="text-base text-slate-200 pt-4 pl-6 pr-6">This project was my first teamproject. The project was made for another campus in Bruges, Belgium of the howest group. Dokemaca consists of 6 custom made interactive poles which have buttons and lights attached to them and a raspberry pi and a router that run a custom wifi network and the accompanying website. The project is an interactive game with the purpose to get people moving. You have to tap out the poles when they light up. You have multiple game modes to choose from, like time attack, simon says and red and blue. After completing a game you can compare your performances with other players.</h4>
                        <h3 className="text-2xl text-slate-200 pt-24 pl-6">Used skills</h3>
                        <div className="grid grid-rows-3 grid-flow-col pl-6">
                            <img className="row-span-5 pt-8 pb-4" src={python} alt="python"/>
                            <img className="row-span-5 pt-8 pb-4" src={html} alt="html"/>
                            <img className="row-span-5 pt-8 pb-4" src={css} alt="css"/>
                            <img className="row-span-5 pt-8 pb-4" src={javascript} alt="javascript"/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}