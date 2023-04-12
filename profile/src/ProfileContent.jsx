import { useState } from 'react';
import FormItem from './components/FormItem';
import Alert from './components/Alert';
import FormCardItem from './components/FormCardItem';

export default function Form () {
  const [cards, addCards] = useState([]);
  const [success, setSuccess] = useState(false);
  const addCard = (card) => {
    addCards((prevState) => [...prevState, card]);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 2000);
  };

  return (
    <>
      <FormItem addCard={(card) => addCard(card)} />
      <Alert success={success} />
      <div className="card__list">
        {cards.map((item, index) => {
          return <FormCardItem {...item} key={index} />;
        })}
      </div>
    </>
  );
};
