import React, { useState } from "react"
import avatar from "../assets/avatar.png"
import Header from "../components/Header"

export default () => {

    const [tooltipText, setTooltipText] = useState('Click here to copy');
    const [copied, setCopied] = useState(false);
    const [tooltipVisible, setTooltipVisible] = useState(false);

    function copyToClipboard(text) {
        const el = document.createElement('textarea');
        el.value = text;
        document.body.appendChild(el);
        el.select();
        document.execCommand('Click here to copy');
        document.body.removeChild(el);
        setCopied(true);
        setTooltipText('You copied my e-mail address!');
        setTooltipVisible(true);
    }

    function resetTooltipText() {
        if (copied) {
        setTooltipText('Click here to copy');
        setCopied(false);
        setTooltipVisible(false);
        }
    }

    return(
        <main className="bg-slate-900 h-screen">
            <Header/>
            <div className="w-screen h-100% grid grid-rows-2 grid-flow-col gap-96 items-center pt-28">
                <div className="row-span-2">
                    <h1 className="text-5xl font-semibold text-sky-500 pt-3 pl-20">Let's work together!</h1>
                    <h2 className="text-xl font-medium text-slate-700 pt-3 pl-20">Web/app development & design</h2>
                    <h3 className="text-slate-200 pt-3 pl-20">I love working on the front-end of websites and apps. besides development I also like working on the design!</h3>
                    <h3 className="text-slate-200 pt-2 pl-20">Do you wish to get in touch with me? Feel free to send me an email!</h3>
                    <button
                        className="ml-20 mt-4 bg-slate-800 py-2 px-4 rounded relative grid justify-items-start"
                        onClick={() => copyToClipboard('casper.van.damme@outlook.com')}
                        onMouseEnter={() => setTooltipVisible(true)}
                        onMouseLeave={() => setTooltipVisible(false)}
                    >
                        <h4 className="text-slate-600">My e-mail address</h4>
                        <h3 className="text-sky-500 font-bold text-lg">casper.van.damme@outlook.com</h3>
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
                    </button>
                </div>
                <div className="row-span-2 w-96 mr-32">
                    <img className="rounded-full" src={avatar} alt="Avatar"/>
                </div>
            </div>
        </main>
    )
}