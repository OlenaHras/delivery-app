import { CardWrapper, RemoveButton, ImgWrapper, Img } from './OrderItem.styled';

const OrderItem = ({ item, handleButtonClick }) => {
  return (
    <CardWrapper>
      <ImgWrapper>
        <Img src={item.img} alt={item.title} />
      </ImgWrapper>
      <div>{item.title}</div>
      <div>{item.price} $</div>
      <RemoveButton onClick={() => handleButtonClick(item)}>
        remove
      </RemoveButton>
    </CardWrapper>
  );
};
export default OrderItem;
