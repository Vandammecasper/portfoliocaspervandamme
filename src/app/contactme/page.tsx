'use client'
import Logo from "../components/logo";
import Email from "../components/email";

export default function Page () {
    return(
        <main className="bg-slate-900 min-h-screen">
            <div className="w-screen flex flex-col md:flex-row justify-between pt-32 md:pt-48">
                <div className="block sm:hidden md:hidden w-80 self-center">
                    <Logo/>
                </div>
                <div className="hidden sm:block md:hidden w-80 self-center">
                    <Logo/>
                </div>
                <div className="row-span-2 xl:mt-10 md:w-7/12 sm:p-10 xl:p-0">
                    <div className="flex xl:ml-12">
                        <h1 className={`lg:text-5xl text-3xl 3xl:text-6xl font-semibold text-sky-500 3xl:pt-10 pl-6 xl:pt-0 md:pt-8  transition-all duration-2500`}>Let's work together!</h1>
                        <a href="https://www.linkedin.com/in/casper-van-damme-18a98520b/">
                            <img className="block md:hidden pr-6 pt-1 h-9" src={`/icons/linkedin.png`} alt="linkedin"/>
                        </a>
                    </div>
                    <h2 className={`lg:text-xl font-medium text-slate-700 pt-0 3xl:text-2xl xl:pt-3 pl-6 xl:ml-12  transition-all duration-2500`}>Front-end- or full-stack development</h2>
                    <h3 className={`text-slate-200 pt-3 pl-6 pr-5 xl:ml-12 3xl:text-xl  transition-all duration-2500`}>I love working on websites and apps. besides development I also like working on the design!</h3>
                    <h3 className={`text-slate-200 pt-2 pl-6 pr-5 xl:ml-12 3xl:text-xl  transition-all duration-2500`}>Do you wish to get in touch with me? Feel free to send me an email!</h3>
                    <Email/>
                </div>
                <div className="hidden md:block md:row-span-2 md:w-96 3xl:hidden mr-16">
                    <Logo/>
                </div>
                <div className="hidden 3xl:block md:row-span-2 md:w-96">
                    <Logo/>
                </div>
            </div>
        </main>
    )
}