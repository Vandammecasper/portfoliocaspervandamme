import Skill from '../components/Skill';
 
export default function Page () {
    return(
        <main className="overflow-hidden bg-slate-900 t">
            <div className="xl:grid xl:grid-rows-2 xl:grid-flow-col pt-6 lg:pt-12 xl:pt-16 gap-24 overflow-hidden w-full sm:h-screen mt-24">
                <div className="xl:row-span-2 pl-2 xl:pl-12 xl:pb-20 xl:w-full">
                        <h1 className="text-4xl font-medium text-sky-500 pl-8 pt-4">aboutMe()</h1>
                        <h2 className="text-base xl:text-lg text-slate-200 pl-8 pt-2 xl:pt-5">I am a 21 year bachelor graduate who loves technology, websites and applications. The drive to be able to create this myself is the main reason why I wanted to learn how to code. In September 2021, my mct journey started at the Howest in Kortrijk (Belgium), mct also known as multimedia and creative technologies.</h2>
                        <h2 className="text-base xl:text-lg text-slate-200 pl-8 pt-2 xl:pt-4">In the second year (semester 3) the students have to make a choice for a sub-direction. During the course of the first 3 semesters and the several projects, I learned that my preference lies in design and front-end development. The choice for the sub-direction 'Next web developer' was obvious.</h2>
                        <h2 className="text-base xl:text-lg text-slate-200 pl-8 pt-2 xl:pt-4">I recently graduated with my bachelor's degree and am currently looking for my first job in front-end development or full-stack development, where i can apply my skills and continue to grow in the field.</h2>
                </div>
                <div className='mb-32 sm:mb-0'>
                    <h1 className="text-4xl font-medium text-sky-500 pl-8 xl:pt-0 pt-8">skills()</h1>
                    <div className="w-5/6 grid col-auto ml-8 xl:ml-0">
                        <div className='flex flex-wrap'>
                            <Skill title="React" years="+2 Year" />
                            <Skill title="React native" years="+1 Year" />
                            <Skill title="Next js" years="+1 Year" />
                            <Skill title="Tailwind" years="+2 Year" />
                            <Skill title="Html & css" years="+1 Year" />
                            <Skill title="Javascript" years="+3 Year" />
                            <Skill title="python" years="+2 Year" />
                            <Skill title="Figma" years="+2 Year" />
                            <Skill title="Adobe xd" years="+3 Year" />
                            <Skill title="c#" years="+2 Year" />
                            <Skill title="Prismic" years="<1 Year" />
                            <Skill title="Github" years="+3 Year" />
                            <Skill title="Vue js" years="<1 Year" />
                            <Skill title="Zustand" years="<1 Year" />
                            <Skill title="sql" years="+3 Year" />
                            <Skill title="Hotjar" years="<1 Year" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}