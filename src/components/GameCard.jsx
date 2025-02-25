import '../styles/game.css'

export const GameCard = ( {id, name,console, image, format, language, size, downloadFormat, link, downloadTutorial, date,genre,downloadMethods,handleDetailsGame}) => {

    return (
        <>
            <div className="juego-card" onClick={() => handleDetailsGame({id, name,console, image, format, language, size, downloadFormat, link, downloadTutorial, date,genre,downloadMethods})}>
                <img src={image} alt="Wing Commander III" />
                <div className="juego-info">
                    <h3 className='text-white'>{name}</h3>
                    <p className='text-white'>{genre.join(', ')}</p>
                    <div className="juego-detalles">
                        <span className='text-white'>{language.join(', ')}</span>
                        <span className='text-white'>-</span>
                        <span className='text-white'>{size}</span>
                    </div>
                </div>
            </div>
        </>
    )
}