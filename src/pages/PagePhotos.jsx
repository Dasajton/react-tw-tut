import { useEffect, useState } from 'react'

const PagePhotos = () => {
    const [photos, setPhotos] = useState([])

    const fetchPhotos = async () => {
        const url = 'https://jsonplaceholder.typicode.com/photos'
        const response = await fetch(url)
        const result = await response.json()
        setPhotos(result)
    }

    useEffect(() => {
        fetchPhotos()
    }, [])

    return (
        <>
            <h2 className="mb-6 text-center text-4xl font-medium text-purple-300">
                Photo List
            </h2>
            <h2 className="mb-2 text-center text-xl font-medium text-purple-300">
                There are {photos.length} Photos
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                {photos.map((photo) => {
                    return (
                        <img
                            key={photo.id}
                            src={photo.thumbnailUrl}
                            alt={photo.title}
                            className="rounded-lg"
                        />
                    )
                })}
            </div>
        </>
    )
}

export default PagePhotos
