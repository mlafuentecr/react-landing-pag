import css from 'styled-components';
export const StyledHeader = css.header`
  background-color: ${({ theme }) => theme.colors.principalBlue};
  padding: 40px 0px;
  h1{
     font-size: larger;
     font-family: 'Montserrat Black', Arial, Helvetica, sans-serif;
     &:hover{
       text-decoration: underline;
     }
  }
`;
