import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/Global';
import { theme } from '../styles/theme';
import Header from './Header';
import { Container } from '../styles/Container.styled';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Header />
			<Container>
				<GlobalStyle />
				<div className='App'>
					<h1>HELLOW WORD</h1>
				</div>
			</Container>
		</ThemeProvider>
	);
}

export default App;
