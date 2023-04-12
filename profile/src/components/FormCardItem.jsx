import './cardList.css';

export default function FormCardItem ({
  id,
  img,
  title,
  size,
  raiting,
  place,
}) {
  return (
    <div key={id} className="card__item">
      <img src={img} alt="photo" className="card__img" />
      <div className="card__item-main">
        <h3 className="card__item-title">{title}</h3>
      </div>
      <div className="card__item-about">
        <p>{place}</p>
        <p>{size}</p>
      </div>
      <div className="card__item-about">
        <p>{raiting}/5</p>
      </div>
      <button>See more</button>
    </div>
  );
};
