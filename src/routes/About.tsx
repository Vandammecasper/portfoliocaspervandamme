import timeline from "../assets/timeline.png"
import Header from "../components/Header"
import Skills from "../components/Skills"
import BottomNav from "../components/BottomNav"
import timeline_flat from "../assets/timeline_flat.png"

export default () => {
    return(
        <main className="overflow-hidden">
            <Header/>
            <div className="block xl:grid xl:grid-rows-2 xl:grid-flow-col pt-6 pb-20 lg:pb-0 xl:pt-16 gap-24 overflow-auto">
                <div className="xl:row-span-2 pl-2 xl:pl-12 xl:pb-20 xl:w-full">
                        <h1 className="text-4xl font-medium text-sky-500 pl-8 pt-4">aboutMe()</h1>
                        <h2 className="text-base xl:text-lg text-slate-200 pl-8 pt-2 xl:pt-5 w-11/12">I am a 20 year old student who loves technology, websites and applications. The drive to be able to create this myself is the main reason why I wanted to learn how to code. In September 2021, my mct journey started at the Howest in Kortrijk (Belgium), mct also known as multimedia and creative technologies.</h2>
                        <h2 className="text-base xl:text-lg text-slate-200 pl-8 pt-2 xl:pt-5 w-11/12 pb-0 xl:pb-4">In the second year (semester 3) the students have to make a choice for a sub-direction. During the course of the first 3 semesters and the several projects, I learned that my preference lies in design and front-end development. The choice for the sub-direction 'Next web developer' was obvious. I am currently in my second year at mct and every day my knowledge grows as well as the enthusiasm to put this knowledge in practise.</h2>
                        <h1 className="text-4xl font-medium text-sky-500 pl-8 xl:pt-0 pt-4">skills()</h1>
                        <Skills/>
                </div>
                <div className="hidden xl:grid row-span-2 pr-36">
                    <div className="grid grid-rows-3 grid-flow-col gap-14">
                        <div className="row-span-3 w-56 pt-20">
                            <h3 className="xl:text-3xl text-sky-500 pt-2">June 2021</h3>
                            <h4 className="xl:text-lg text-slate-200">Finishing high shool with a degree for human sciences</h4>
                            <h3 className="xl:text-3xl text-sky-500 pt-48">June 2022</h3>
                            <h4 className="xl:text-lg text-slate-200">Finishing my first project: Cash Car</h4>
                        </div>
                        <img className="row-span-3" src={timeline} alt="Timeline"/>
                        <div className="row-span-3 pt-52 w-56">
                            <h3 className="xl:text-3xl text-sky-500 pt-3">September 2021</h3>
                            <h4 className="xl:text-lg text-slate-200">Starting in mct at Howest</h4>
                            <h3 className="xl:text-3xl text-sky-500 pt-56">February 2023</h3>
                            <h4 className="xl:text-lg text-slate-200">Finishing my first teamproject: Dokemaca</h4>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block xl:hidden pb-16">
                    <h1 className="text-4xl font-medium text-sky-500 pl-10 xl:hidden block pb-6">history()</h1>
                        <div className="grid grid-rows-2 grid-flow-col w-1/2 pl-32 gap-32">
                            <div className="row-span-2">
                                <h3 className="xl:text-3xl text-sky-500">June 2021</h3>
                                <h4 className="xl:text-lg text-slate-200">Finishing high shool with a degree for human sciences</h4>
                            </div>
                            <div className="row-span-2">
                                <h3 className="xl:text-3xl text-sky-500">June 2022</h3>
                                <h4 className="xl:text-lg text-slate-200">Finishing my first project: Cash Car</h4>
                            </div>                            
                        </div>
                        <img className="pl-10" src={timeline_flat} alt="Timeline"/>
                        <div className="grid grid-rows-2 grid-flow-col pl-64 pt-10 w-7/12 gap-40">
                            <div className="row-span-2">
                                <h3 className="xl:text-3xl text-sky-500">September 2021</h3>
                            <h4 className="xl:text-lg text-slate-200">Starting in mct at Howest</h4>
                            </div>
                            <div className="row-span-2">
                                <h3 className="xl:text-3xl text-sky-500">February 2023</h3>
                            <h4 className="xl:text-lg text-slate-200">Finishing my first teamproject: Dokemaca</h4>
                            </div>                            
                        </div>
                </div>
            </div>
            <BottomNav/>
        </main>
    )
}