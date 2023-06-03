import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  margin: 0 auto;
  padding-left: 25px;
  height: fit-content;
`;
export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid grey;
  border-radius: 25px;
  align-items: center;
  padding: 25px;
  width: 180px;
  height: 230px;
  &:hover {
    transform: translateY(-5px);
  }
`;
export const AddButton = styled.button`
  background-color: #f0ffff;
  border: 2px solid #00ffff;
  border-radius: 25px;
  padding: 10px;

  width: 150px;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    background: #766a90;
    border: 2px solid #766a90;
    color: #ebd8ff;
  }
`;
