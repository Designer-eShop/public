import styled from "styled-components";
import { Link } from "react-router-dom";

export const Form = styled.form``;

export const Label = styled.label`
  font-size: 24px;
  line-height: 24px;
  color: ${(props) => props.theme.text.dark};
`;

export const Forgot = styled.div`
  font-family: Roboto;
  font-size: 12px;
  line-height: 24px;
  margin-top: -20px;
  text-align: right;
  color: ${(props) => props.theme.text.dark};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.text.dark};
`;

export const Register = styled.div`
  font-family: Roboto;
  font-size: 12px;
  line-height: 24px;
  margin-top: 20px;
  color: ${(props) => props.theme.text.dark};
`;

export const LoginNot = styled.div`
  font-family: Roboto;
  font-size: 12px;
  line-height: 24px;
  margin-top: 20px;
  color: ${(props) => props.theme.text.dark};
`;
