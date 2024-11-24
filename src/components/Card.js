function Card({ title, Image, price, description, onContact }) {
  return (
    <div className="card">
      <img src={Image} alt={title} className="card__img" />
      <div className="card__info">
        <h2 className="card__title">{title}</h2>
        <p className="card__description">{description}</p>
        <p className="card__price">Starting from ${price}</p>
        <button className="card__button" onClick={onContact}>
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default Card; 