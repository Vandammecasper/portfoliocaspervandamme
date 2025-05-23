'use client'
import Image from 'next/image';
import ccpic from '../../../public/pictures/cashcar.png'
import dokemacapic from '../../../public/pictures/dokemaca.png'
import haxxpic from '../../../public/pictures/haxx.png'
import hellopic from '../../../public/pictures/hello.png'
import researchprojectpic from '../../../public/pictures/researchproject.png'
import UsedSkills from '../components/usedSkills';

export default function Page() {
    return(
        <main className="overflow-hidden px-8 lg:px-10 xl:px-20 pb-24 lg:pb-16 bg-slate-900">
                <h1 className={`lg:text-5xl text-3xl font-medium text-sky-500 pt-6 lg:pt-12 xl:pt-16 transition-all duration-2500 mt-24`}>projects()</h1>
                    <div className={`border-sky-500 border-4 rounded-xl lg:mx-40 mt-12 mb-32 lg:mb-8 transition-all duration-2500`}>
                        <Image className="px-8 pt-4" src={researchprojectpic} alt='cashcarpicture'/>
                        <h2 className={`text-3xl text-sky-500 pt-4 px-8 transition-all duration-2500`}>Bachelor's thesis (2024)</h2>
                        <h4 className={`text-base text-slate-200 pt-2 px-8 transition-all duration-2500`}>The research question for my bachelor's thesis was: "How can the visual interface of a website be dynamically adjusted based on the emotional feedback of the user?". In preparation for the bachelor's thesis, we were tasked with developing a proof of concept related to the research question, this is the Research Project.</h4>
                        <h4 className={`text-base text-slate-200 pt-2 px-8 transition-all duration-2500`}>I based my research project on my own portfolio, to which I added functionalities to enhance the user experience. First and foremost, it was necessary to capture the emotional state of the user. This was achieved by using the Skybiometry API, which can determine a person's emotional state by taking a picture of the user. Furthermore, four interfaces were developed, each designed for a specific emotion: happy, neutral, sad, and angry. The API identifies the user's emotion which results in displaying the corresponding interface.</h4>
                        <h4 className={`text-base text-slate-200 pt-2 px-8 transition-all duration-2500`}>After completing the research project, the next step was the bachelor's thesis. This thesis consists of four important sections. First, the Research section, which consists of the theoretical research conducted during the research project and additional research specifically for the bachelor's thesis. Secondly, the Technical Research section, which outlines the various front-end development steps taken during the research project. Thirdly, the Reflection section, where both myself and external reviewers evaluate the research project and identify improvements to the process. Lastly, there is the Recommendations section, which provides concrete suggestions for the industry or future research.</h4>
                        <h3 className={`text-2xl text-sky-500 pt-4 px-8 transition-all duration-2500`}>Used skills</h3>
                        <div className="flex flex-wrap px-8 py-4">
                              <UsedSkills title="React" years="+2 Year" />
                              <UsedSkills title="Tailwind" years="+2 Year" />
                              <UsedSkills title="Github" years="+3 Year" />
                        </div>
                    </div>
                <div className="grid lg:grid-cols-2 pt-8 lg:pt-10 gap-0 lg:gap-16">
                    <div className={`border-sky-500 border-4 rounded-xl mb-32 lg:mb-8 transition-all duration-2500`}>
                        <Image className="px-8 pt-4" src={hellopic} alt='cashcarpicture'/>
                        <h2 className={`text-3xl text-sky-500 pt-4 px-8 transition-all duration-2500`}>Project Hello (2024)</h2>
                        <h4 className={`text-base text-slate-200 pt-2 px-8 transition-all duration-2500`}>During the sixth and final semester of my program, I completed a 14-week internship. My internship took place at Sweet Mustard, where I worked on a project together with four other interns. Within this team, my role was front-end developer, for our project Hello.</h4>
                        <h4 className={`text-base text-slate-200 pt-2 px-8 transition-all duration-2500`}>Project Hello is a registration system designed for the Kade. The primary objective of this system is to streamline the check-in process for visitors. When visitors arrive, they can check in using the Hello system. After registration the system sends an immediate notification to their host, informing them that their visitor has arrived and is waiting in the lounge. Additionally, the system prompts visitors to check out after their meeting, at which point they are asked to provide feedback on their overall experience at the company.</h4>
                        <h3 className={`text-2xl text-sky-500 pt-4 px-8 transition-all duration-2500`}>Used skills</h3>
                        <div className="flex flex-wrap px-8 py-4">
                              <UsedSkills title="React" years="+2 Year" />
                              <UsedSkills title="Tailwind" years="+2 Year" />
                              <UsedSkills title="Java" years="<1 Year" />
                              <UsedSkills title="Jenkins" years="<1 Year" />
                              <UsedSkills title="Docker" years="+1 Year" />
                              <UsedSkills title="Bitbucket" years="<1 Year"/>
                              <UsedSkills title="Jira" years="<1 Year"/>
                        </div>
                    </div>
                    <div className={`border-sky-500 border-4 rounded-xl mb-32 lg:mb-8 transition-all duration-2500`}>
                        <Image className="px-8 pt-4" src={haxxpic} alt='cashcarpicture'/>
                        <h2 className={`text-3xl text-sky-500 pt-4 px-8 transition-all duration-2500`}>Haxx (2023)</h2>
                        <h4 className={`text-base text-slate-200 pt-2 px-8 transition-all duration-2500`}>Haxx is my industry project at the end of the fourth semester, I had the opportunity to work on a project for an actual company. Together with two classmates, I worked on a project for Axxes. The company requested a conference tool for a yearly conference by and for Axxes employees.</h4>
                        <h4 className={`text-base text-slate-200 pt-2 px-8 transition-all duration-2500`}>The conference tool consisted of a website and an application that communicated seamlessly with each other. The idea was that the employees/users could view the calendar and sign up for events in advance on the website. When the conference started, the app would serve as a perfect guide, displaying the schedule and the personal calendar of the employee, providing a comprehensive overview of the events they wanted to participate in.</h4>
                        <h3 className={`text-2xl text-sky-500 pt-4 px-8 transition-all duration-2500`}>Used skills</h3>
                        <div className="flex flex-wrap px-8 py-4">
                              <UsedSkills title="React" years="+2 Year" />
                              <UsedSkills title="React Native" years="+1 Year" />
                              <UsedSkills title="Dotnet" years="+2 Year" />
                              <UsedSkills title="Tailwind" years="+2 Year" />
                              <UsedSkills title="Github" years="+3 Year" />
                        </div>
                    </div>
                    <div className={`border-sky-500 border-4 rounded-xl mb-32 lg:mb-8 transition-all duration-2500`}>
                        <Image className="px-8 pt-4" src={dokemacapic} alt='cashcarpicture'/>
                        <h2 className={`text-3xl text-sky-500 pt-4 px-8 transition-all duration-2500`}>Dokemaca (2023)</h2>
                        <h4 className={`text-base text-slate-200 pt-2 px-8 transition-all duration-2500`}>This project was my first team project. The project was made for another Howest campus in Bruges (Belgium). Dokemaca consists of 6 custom made interactive poles. Each pole consists of a button, lights, a raspberry pi and a router that runs on a custom Wi-Fi network and on top there is the accompanying website.</h4>
                        <h4 className={`text-base text-slate-200 pt-2 px-8 transition-all duration-2500`}>Dokemaca is an interactive game with the objective to get people moving. The participants have to tap on the button of the pole which lights up. There are multiple game modes to choose from, such as “time attack”, “simon says” and “red and blue”. After completing a game, the participants can compare their performances with other players.</h4>
                        <h3 className={`text-2xl text-sky-500 pt-4 px-8 transition-all duration-2500`}>Used skills</h3>
                        <div className="flex flex-wrap px-8 py-4">
                              <UsedSkills title="Html & css" years="+2 Year" />
                              <UsedSkills title="Javascript" years="+3 Year" />
                              <UsedSkills title="Python" years="+2 Year" />
                              <UsedSkills title="Github" years="+3 Year" />
                        </div>
                    </div>
                    <div className={`border-sky-500 border-4 rounded-xl mb-32 lg:mb-8 transition-all duration-2500`}>
                        <Image className="px-8 pt-4" src={ccpic} alt='cashcarpicture'/>
                        <h2 className={`text-3xl text-sky-500 pt-4 px-8 transition-all duration-2500`}>Cash Car (2022)</h2>
                        <h4 className={`text-base text-slate-200 pt-4 px-8 transition-all duration-2500`}>Cash Car was my first ever project during the first year at mct. The objective of this project is to help a group of students of which only a limited number of students have a driver’s license. A group of friends were confronted with the issue that due to the limited number of drivers; it was always the same people who had to drive and were faced with the cost of each trip. The hassle to figure out who had to pay which amount was far from ideal.</h4>
                        <h4 className={`text-base text-slate-200 pt-2 px-8 transition-all duration-2500`}>Here comes my project in the picture. Cash Car can calculate how much everyone has to pay the driver by tracking the distance per passenger, the daily fuel price and the total number of people in the car. Each person has their personal RFID tag to check-in at the beginning of the trip. The actual drive can be monitored on the website or on the display. Next to the actual drive you can also see the history per passenger.</h4>
                        <h3 className={`text-2xl text-sky-500 pt-4 px-8 transition-all duration-2500`}>Used skills</h3>
                        <div className="flex flex-wrap px-8 py-4">
                              <UsedSkills title="Html & css" years="+2 Year" />
                              <UsedSkills title="Javascript" years="+3 Year" />
                              <UsedSkills title="Github" years="+3 Year" />
                        </div>
                    </div>
                </div>
        </main>
    )
}