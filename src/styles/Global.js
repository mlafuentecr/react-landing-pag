import { createGlobalStyle } from 'styled-components';
import './normalize.css';
import './fonts.css';

const GlobalStyle = createGlobalStyle`

	body {
		background-color: ${({ theme }) => theme.colors.principalbg};
    font-family: 'Montserrat Medium', Arial, Helvetica, sans-serif;
    font-size: 1.15em;
    margin: 0;
  
	}
`;

export default GlobalStyle;
