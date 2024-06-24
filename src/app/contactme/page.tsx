'use client'
import Logo from "../components/logo";
import Email from "../components/email";

export default function Page () {
    return(
        <main className="">
            <div className="w-screen h-90% grid lg:grid-rows-2 lg:grid-flow-col lg:gap-40 lg:pt-28 mb-24 lg:mb-0">
                <div className="block md:hidden lg:hidden w-80">
                    <Logo/>
                </div>
                <div className="hidden md:block lg:hidden w-80">
                    <Logo/>
                </div>
                <div className="row-span-2 xl:mt-10 lg:w-7/12 sm:p-10 xl:p-0">
                    <div className="flex">
                        <h1 className={`xl:text-5xl text-3xl 3xl:text-6xl font-semibold text-sky-500 3xl:pt-10 pl-6 lg:pl-20 xl:pt-0 lg:pt-8  transition-all duration-2500`}>Let's work together!</h1>
                        <a href="https://www.linkedin.com/in/casper-van-damme-18a98520b/">
                            <img className="block lg:hidden pr-6 pt-1 h-9" src={`/icons/linkedin.png`} alt="linkedin"/>
                        </a>
                    </div>
                    <h2 className={`xl:text-xl font-medium text-slate-700 pt-0 3xl:text-2xl xl:pt-3 pl-6 lg:pl-20  transition-all duration-2500`}>Front-end development</h2>
                    <h3 className={`text-slate-200 pt-3 pl-6 lg:pl-20 pr-5 3xl:text-xl  transition-all duration-2500`}>I love working on the front-end of websites and apps. besides development I also like working on the design!</h3>
                    <h3 className={`text-slate-200 pt-2 pl-6 lg:pl-20 pr-5 3xl:text-xl  transition-all duration-2500`}>Do you wish to get in touch with me? Feel free to send me an email!</h3>
                    <Email/>
                </div>
                <div className="hidden lg:block lg:row-span-2 lg:w-96 3xl:hidden">
                    <Logo/>
                </div>
                <div className="hidden 3xl:block lg:row-span-2 lg:w-96">
                    <Logo/>
                </div>
            </div>
        </main>
    )
}