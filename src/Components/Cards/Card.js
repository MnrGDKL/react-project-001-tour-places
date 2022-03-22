import "./Card.css"

function Card({cards}) {
  return (
    
    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 mx-4">
        {cards.map(card =>(
            <div className='col' key={card.id}>
                <div className='myCard bg-dark' >
                    <div className='container'>
                        <h2>{card.title}</h2>
                        <img className='image' src={card.image} alt="" />
                        <div className='overlay'>
                            <div className='text'>{card.desc}</div>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
  );
}

export default Card;