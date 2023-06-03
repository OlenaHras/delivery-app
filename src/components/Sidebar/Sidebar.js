import ShopButton from '../ShopButton/ShopButton';
import { Container } from './Sidebar.styled';

const buttonStyle = { pointerEvents: 'none', opacity: 0.4 };

const Sidebar = ({ onButtonClick, shopsList, choosedShop }) => {
  const handleButtonClick = id => {
    onButtonClick(id);
  };

  return (
    <Container>
      {shopsList.length > 0 &&
        shopsList.map(({ id, name }) => {
          return (
            <li
              key={id}
              onClick={() => handleButtonClick(id)}
              style={choosedShop && choosedShop !== id ? buttonStyle : {}}
            >
              <ShopButton item={name} />
            </li>
          );
        })}
    </Container>
  );
};
export default Sidebar;
