// import Cards from './components/cards/Cards';
import Form from './components/form/Form';
import Wrapper from './components/wrapper/Wrapper';
import { GlobalStyles } from './styles/global-styles';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<Wrapper>
				{/* <Cards /> */}
				<Form />
			</Wrapper>
		</>
	);
};

export default App;
