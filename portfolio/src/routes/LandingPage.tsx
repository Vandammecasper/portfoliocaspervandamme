import React from "react"
import avatar from "../assets/avatar.png"
import Header from "../components/Header"

export default () => {
    return(
        <main className="bg-slate-900">
            {/* <Header/> */}
            <view className="w-screen h-screen grid grid-rows-2 grid-flow-col gap-96 items-center">
                <view className="row-span-2">
                    <h2 className="text-4xl font-medium text-slate-300 pl-20">Hello, I am</h2>
                    <h1 className="text-7xl font-semibold text-sky-500 pt-3 pl-20">Casper</h1>
                    <h1 className="text-7xl font-semibold text-sky-500 pl-20">Van Damme</h1>
                    <h4 className="text-3xl font-medium text-slate-200 pt-3 pl-20">Student next web development at Howest</h4>
                </view>
                <view className="row-span-2">
                    <img className="rounded-full w-9/12" src={avatar} alt="Avatar"/>
                </view>
            </view>
        </main>
    )
}