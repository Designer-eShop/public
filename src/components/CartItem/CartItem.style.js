import styled from "styled-components";

export const Container = styled.div`
  border-top: 2px solid #383c43;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  &:last-child {
    border-bottom: 2px solid #383c43;
  }
`;

export const Image = styled.img`
  width: 95px;
  height: 150px;
  object-fit: cover;
  /* background: url("${(props) => props.background}");
  background-repeat: no-repeat;
  background-size: contain; */
`;

export const FlexContainer = styled.div`
  display: flex;
`;

export const Price = styled.div`
  font-size: 40px;
  line-height: 48px;
  color: #383c43;
`;

export const Title = styled.div`
  font-size: 40px;
  line-height: 48px;
  color: #383c43;
`;

export const Size = styled.div`
  width: 41px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background: #383c43;
  border-radius: 3px;
  font-size: 24px;
  line-height: 29px;
`;

export const Info = styled.div`
  margin-left: 36px;
`;
