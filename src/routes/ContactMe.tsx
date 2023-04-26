import React, { useState } from "react"
import avatar from "../assets/avatar.png"
import Header from "../components/Header"
import BottomNav from "../components/BottomNav";
import linkedin from "../assets/linkedin.png"
import { Controls, Player } from "@lottiefiles/react-lottie-player";
import avatar_loop from "../assets/avatar_loop.json"

export default () => {

    const [tooltipText, setTooltipText] = useState('Click here to send me an email');
    const [copied, setCopied] = useState(false);
    const [tooltipVisible, setTooltipVisible] = useState(false);

    function copyToClipboard(text) {
        const el = document.createElement('textarea');
        el.value = text;
        document.body.appendChild(el);
        el.select();
        document.execCommand('Click here to send me an email');
        document.body.removeChild(el);
        setCopied(true);
        setTooltipText('Click here to send me an email');
        setTooltipVisible(true);
    }

    function resetTooltipText() {
        if (copied) {
        setTooltipText('Click here to send me an email');
        setCopied(false);
        setTooltipVisible(false);
        }
    }

    return(
        <main className="h-screen overflow-hidden">
            <Header/>
            <div className="w-screen h-100% xl:grid xl:grid-rows-2 xl:grid-flow-col xl:gap-24 content-center pt-6 xl:pt-28 overflow-auto">
                <div className="block xl:hidden w-80 pl-16">
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
                <div className="row-span-2 xl:mt-10 xl:w-7/12">
                    <div className="flex">
                        <h1 className="xl:text-5xl text-3xl 3xl:text-6xl font-semibold text-sky-500 pt-3 pl-6 xl:pl-20">Let's work together!</h1>
                        <a href="https://www.linkedin.com/in/casper-van-damme-18a98520b/">
                            <img className="block xl:hidden pl-3 h-11 pt-5" src={linkedin} alt="linkedin" />
                        </a>
                    </div>
                    <h2 className="xl:text-xl font-medium text-slate-700 pt-0 3xl:text-2xl xl:pt-3 pl-6 xl:pl-20">Web/app development & design</h2>
                    <h3 className="text-slate-200 pt-3 pl-6 xl:pl-20 pr-5 3xl:text-lg">I love working on the front-end of websites and apps. besides development I also like working on the design!</h3>
                    <h3 className="text-slate-200 pt-2 pl-6 xl:pl-20 pr-5 3xl:text-lg">Do you wish to get in touch with me? Feel free to send me an email!</h3>
                    <a
                        className="xl:ml-20 ml-6 mt-4 w-80 bg-slate-800 py-2 px-4 rounded relative grid justify-items-start"
                        onClick={() => copyToClipboard('casper.van.damme@outlook.com')}
                        onMouseEnter={() => setTooltipVisible(true)}
                        onMouseLeave={() => setTooltipVisible(false)}
                        href="mailto:caspervandamme03@gmail.com"
                    >
                        <h4 className="text-slate-600">My e-mail address</h4>
                        <h3 className="text-sky-500 font-bold text-lg">caspervandamme03@gmail.com</h3>
                        <span
                        className={`opacity-0 bg-black text-white text-center text-xs rounded-lg py-2 px-3 absolute bottom-7 left-1/2 transform -translate-x-1/2 pointer-events-none z-50 transition-opacity duration-150 ${tooltipVisible ? 'opacity-100' : ''}`}
                        >
                        {tooltipText}
                        <svg
                            className="absolute text-black h-2 w-full left-0 top-full"
                            x="0px"
                            y="0px"
                            viewBox="0 0 255 255"
                            xmlSpace="preserve"
                        >
                            <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
                        </svg>
                        </span>
                    </a>
                </div>
                <div className="hidden xl:grid row-span-2 w-96">
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