import { useState } from 'react';

import { CardWrapper, RemoveButton, ImgWrapper, Img } from './OrderItem.styled';
import { Counter, CounterButton } from './OrderItem.styled';
const OrderItem = ({ item, handleButtonClick }) => {
  let [count, setCount] = useState(1);
  let incCount = () => {
    if (count < 10) {
      setCount(Number(count) + 1);
    }
  };
  let decCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  // let handleChange = e => {
  //   setCount(e.target.value);
  // };

  return (
    <CardWrapper>
      <ImgWrapper>
        <Img src={item.img} alt={item.title} />
      </ImgWrapper>
      <div>{item.title}</div>
      <div>{item.price} $</div>
      <Counter>
        <CounterButton onClick={decCount}>-</CounterButton>
        <p>{count}</p>
        <CounterButton onClick={incCount}>+</CounterButton>
      </Counter>
      <RemoveButton onClick={() => handleButtonClick(item)}>
        remove
      </RemoveButton>
    </CardWrapper>
  );
};
export default OrderItem;
