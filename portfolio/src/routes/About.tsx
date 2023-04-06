import React from "react"
import timeline from "../assets/timeline.png"
import react from "../assets/React.png"
import javascript from "../assets/javascript.png"
import python from "../assets/python.png"
import html from "../assets/html.png"
import css from "../assets/css.png"
import csharp from "../assets/csharp.png"
import Header from "../components/Header"
import Skills from "../components/Skills"

export default () => {
    return(
        <main className="bg-slate-900 w-screen h-max">
            <Header/>
            <div className="grid grid-rows-2 grid-flow-col pt-16 gap-24">
                <div className="row-span-2 pl-12">
                        <h1 className="text-4xl font-medium text-sky-500 pl-8 pt-4">aboutMe()</h1>
                        <h2 className="text-2xl font-light text-slate-200 pl-8 pt-5 w-11/12 pb-4">I am a 20 year old student who loves technology, websites and applications. This is the reason why I wanted to learn how to code. So in september 2021 I began my journey in mct, also known as multimedia and creative technologies, at the Howest in Kortrijk, Belgium. After 3 semesters we had to choose between several sub-directions. Over these 3 semesters and several projects I found out that my preference lies in design and front-end development. So I chose for the sub-direction 'Next web developer'. I am currently still in mct and I keep learning more and more every day.</h2>
                        <h1 className="text-4xl font-medium text-sky-500 pl-8 pt-4">skills()</h1>
                        <Skills/>
                </div>
                <div className="row-span-2 pr-36">
                    <div className="grid grid-rows-3 grid-flow-col gap-14">
                        <div className="row-span-3 w-56 pt-20">
                            <h3 className="text-3xl text-sky-500 pt-2">June 2021</h3>
                            <h4 className="text-lg text-slate-200">Finishing high shool with a degree for human sciences</h4>
                            <h3 className="text-3xl text-sky-500 pt-48">June 2022</h3>
                            <h4 className="text-lg text-slate-200">Finishing my first project: Cash Car</h4>
                        </div>
                        <img className="row-span-3" src={timeline} alt="Timeline"/>
                        <div className="row-span-3 pt-52 w-56">
                            <h3 className="text-3xl text-sky-500 pt-3">September 2021</h3>
                            <h4 className="text-lg text-slate-200">Starting in mct at Howest</h4>
                            <h3 className="text-3xl text-sky-500 pt-56">February 2023</h3>
                            <h4 className="text-lg text-slate-200">Finishing my first teamproject: Dokemaca</h4>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}