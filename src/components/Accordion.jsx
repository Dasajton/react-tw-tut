import { useState } from 'react'

const Accordion = ({ name, username, address, email, website }) => {
    const [accordionOpen, setAccordionOpen] = useState(false)
    return (
        <div className="m-2 w-full rounded-lg bg-purple-500/50 p-4 md:w-3/4">
            <button
                onClick={() => setAccordionOpen(!accordionOpen)}
                className="flex w-full items-center justify-between px-2"
            >
                <h2 className="text-2xl font-bold text-teal-500">{name}</h2>
                <span className="text-3xl text-teal-500">
                    {accordionOpen ? '-' : '+'}
                </span>
            </button>
            <div
                className={`grid overflow-hidden text-purple-200 transition-all duration-300 ease-in-out ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
                <div className="overflow-hidden px-4">
                    <h3 className="text-xl text-purple-100">{username}</h3>
                    <li>{address}</li>
                    <li>{email}</li>
                    <li>{website}</li>
                </div>
            </div>
        </div>
    )
}

export default Accordion
