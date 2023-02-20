import Container from "./styles";

const Button = ({ children, tipo = "", ...rest }) => {
  return (
    <Container tipo={tipo} type="button" {...rest}>
      {children}
    </Container>
  );
};

export default Button;
