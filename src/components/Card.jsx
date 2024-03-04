const Card = ({ key, img, name, nickname, position, bounty }) => {
    return (
        <div
            className="m-2 flex h-72 w-[15rem] flex-col items-center rounded-lg border-2 border-teal-500 bg-teal-500 shadow-lg shadow-sky-500"
            key={key}
        >
            <img
                className="h-[10rem] w-full rounded-t-lg object-cover"
                src={img}
                alt=""
            />
            <h2 className="text-2xl font-bold">{name}</h2>
            <h3 className="text-xl font-medium">{nickname}</h3>
            <div className="my-2 text-lg">
                <p>{position}</p>
                <p className="text-xl font-bold">{bounty} ฿</p>
            </div>
        </div>
    )
}

export default Card
