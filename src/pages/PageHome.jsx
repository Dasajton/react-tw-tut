import { Card } from '../components'
import { strawhatCrew } from '../data/db'

const PageHome = () => {
    return (
        <div>
            <h1 className="mb-6 text-center text-4xl font-medium text-purple-300">
                Strawhat Crew
            </h1>

            <div className="grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {strawhatCrew.map((strawhat) => {
                    return (
                        <Card
                            key={strawhat.id}
                            img={strawhat.img}
                            name={strawhat.name}
                            nickname={strawhat.nickname}
                            position={strawhat.position}
                            bounty={strawhat.bounty}
                        />
                    )
                })}
            </div>

            {/* 
                img, name, nickname, position, bounty
            */}
        </div>
    )
}

export default PageHome
