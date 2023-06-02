import styled from '@emotion/styled';

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
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;
export const RemoveButton = styled.button`
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
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

export const ImgWrapper = styled.div`
  width: 180px;
  height: 100px;
  object-fit: contain;
`;

export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

export const Counter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75px;
`;
export const CounterButton = styled.div`
  border: 1px solid grey;
  border-radius: 25%;
  height: 25px;
  width: 25px;
  cursor: pointer;
`;
