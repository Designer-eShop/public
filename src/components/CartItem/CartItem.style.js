import styled from "styled-components";
import DeleteImage from "../../assets/delete.svg";

export const Container = styled.div`
  border-top: 2px solid ${(props) => props.theme.border.dark};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  &:last-child {
    border-bottom: 2px solid ${(props) => props.theme.border.dark};
  }
`;

export const Image = styled.img`
  width: 95px;
  height: 150px;
  object-fit: cover;
`;

export const FlexContainer = styled.div`
  display: flex;
`;

export const FlexContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
`;

export const Price = styled.div`
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 29px;
  }
  font-size: 40px;
  line-height: 48px;
  color: ${(props) => props.theme.text.dark};
`;

export const Title = styled.div`
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 29px;
  }
  font-size: 40px;
  line-height: 48px;
  color: ${(props) => props.theme.text.dark};
`;

export const Size = styled.div`
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 19px;
    width: 23px;
    height: 23px;
  }
  width: 41px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.text.light};
  background: ${(props) => props.theme.background.dark};
  border-radius: 3px;
  font-size: 24px;
  line-height: 29px;
`;

export const Info = styled.div`
  @media (max-width: 768px) {
    margin-left: 16px;
    display: flex;
    flex-flow: nowrap column;
    justify-content: space-between;
  }
  margin-left: 36px;
`;

export const ButtonDiv = styled.div`
  @media (max-width: 768px) {
    text-align: left;
  }
  text-align: right;
`;

export const DeleteButton = styled.button`
  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
  }
  background: url(${DeleteImage});
  background-size: contain;
  background-repeat: no-repeat;
  width: 28px;
  height: 28px;
  cursor: pointer;
  border: 0;
`;
