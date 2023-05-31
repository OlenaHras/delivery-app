import ShopButton from '../ShopButton/ShopButton';
import { Container } from './Sidebar.styled';

const Sidebar = ({ list, onButtonClick }) => {
  const handleButtonClick = id => {
    onButtonClick(id);
  };
  console.log(list);

  return (
    <Container>
      {list.map(({ id, name }) => {
        return (
          <li key={id} onClick={() => handleButtonClick(id)}>
            <ShopButton item={name} />
          </li>
        );
      })}
    </Container>
  );
};
export default Sidebar;
