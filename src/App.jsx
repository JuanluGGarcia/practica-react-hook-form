// import Cards from './components/cards/Cards';
import { useForm } from 'react-hook-form';
import Form from './components/form/Form';
import Wrapper from './components/wrapper/Wrapper';
import { GlobalStyles } from './styles/global-styles';
import Cards from './components/cards/Cards';

const App = () => {
	const {
		handleSubmit,
		register,
		watch,
		formState: { errors }
	} = useForm({ mode: 'onChange' });

	const formValues = watch();

	return (
		<>
			<GlobalStyles />
			<Wrapper>
				<Cards formValues={formValues} />
				<Form handleSubmit={handleSubmit} register={register} errors={errors} />
			</Wrapper>
		</>
	);
};

export default App;
