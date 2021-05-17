import styled from 'styled-components';

const Footer = () => {
  return <StyledFooter>copyright &copy; Abid Shahriar</StyledFooter>;
};

export default Footer;

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  max-height: 70px;
`;
