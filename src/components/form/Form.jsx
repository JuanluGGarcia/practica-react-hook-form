import {
	StyledButton,
	StyledContainersInput,
	StyledContainersLabels,
	StyledContainersNameNumber,
	StyledErrorContainer,
	StyledErrorSpan,
	StyledForm,
	StyledInputMonth,
	StyledInputYear,
	StyledInputs,
	StyledTextsLabel
} from './styles';
import { FORM_VALIDATIONS } from '../../constants/form-validations';
import { useForm } from 'react-hook-form';

const Form = () => {
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm({ mode: 'onChange' });

	return (
		<StyledForm onSubmit={handleSubmit(formSubmit)}>
			<StyledContainersInput>
				<StyledTextsLabel htmlFor='name'>CARDHOLDER NAME</StyledTextsLabel>
				<StyledInputs
					type='text'
					id='name'
					name='name'
					{...register('name', FORM_VALIDATIONS.NAME)}
				/>
				{errors && errors.name && (
					<StyledErrorSpan>{errors.name.message}</StyledErrorSpan>
				)}
			</StyledContainersInput>
			<StyledContainersInput>
				<StyledTextsLabel htmlFor='card_number'>CARD NUMBER</StyledTextsLabel>
				<StyledInputs
					type='number'
					id='card_number'
					name='card_number'
					maxLength={16}
					{...register('card_number', FORM_VALIDATIONS.CARD_NUMBER)}
				/>
				{errors && errors.card_number && (
					<StyledErrorSpan>{errors.card_number.message}</StyledErrorSpan>
				)}
			</StyledContainersInput>
			<StyledContainersNameNumber>
				<StyledTextsLabel htmlFor='month'>EXP.DATE(MM/YY)</StyledTextsLabel>
				<StyledTextsLabel htmlFor='cvc'>CVC</StyledTextsLabel>
			</StyledContainersNameNumber>
			<StyledContainersLabels>
				<StyledErrorContainer>
					<StyledInputMonth
						type='text'
						id='card_month'
						name='card_month'
						maxLength={2}
						{...register('card_month', FORM_VALIDATIONS.CARD_MONTH)}
					/>
					{errors && errors.card_month && (
						<StyledErrorSpan>{errors.card_month.message}</StyledErrorSpan>
					)}
				</StyledErrorContainer>
				<StyledErrorContainer>
					<StyledInputYear
						type='text'
						id='card_year'
						name='card_year'
						maxLength={2}
						{...register('card_year', FORM_VALIDATIONS.CARD_YEAR)}
					/>
					{errors && errors.card_year && (
						<StyledErrorSpan>{errors.card_year.message}</StyledErrorSpan>
					)}
				</StyledErrorContainer>
				<StyledErrorContainer>
					<StyledInputs
						type='text'
						id='cvc'
						name='card_cvc'
						maxLength={3}
						{...register('card_cvc', FORM_VALIDATIONS.CARD_CVC)}
					/>
					{errors && errors.card_cvc && (
						<StyledErrorSpan>{errors.card_cvc.message}</StyledErrorSpan>
					)}
				</StyledErrorContainer>
			</StyledContainersLabels>
			<StyledButton>Confirm</StyledButton>
		</StyledForm>
	);
};

const formSubmit = data => {
	console.log(data);
};

export default Form;

// import { useForm } from 'react-hook-form';
// import { FORM_VALIDATIONS } from '../../constants/form-validations';

// const Form = () => {
// 	const {
// 		handleSubmit,
// 		register,
// 		formState: { errors }
// 	} = useForm({ mode: 'onChange' });
// 	// Esta parte de arriba mode: 'onChange' es para validar sin pulsar el boton enviar
// 	// console.log(errors);

// 	return (
// 		<form onSubmit={handleSubmit(formSubmit)}>
// 			<div>
// 				<label htmlFor='name'>NAME</label>
// 				<input
// 					type='text'
// 					id='name'
// 					name='name'
// 					{...register('name', FORM_VALIDATIONS.NAME)}
// 				/>
// 				{/* {errors && errors.name && <span>{errors.name.message}</span>} */}
// 				<span>{errors?.name?.message}</span>
// 			</div>

// 			<div>
// 				<label htmlFor='email'>EMAIL</label>
// 				<input type='text' id='email' name='email' {...register('email')} />
// 			</div>

// 			<input type='submit' value='SEND' />
// 		</form>
// 	);
// };

// const formSubmit = data => {
// 	// console.log(data);
// };

// export default Form;
