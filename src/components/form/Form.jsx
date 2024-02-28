import {
	StyledForm,
	StyledTextsLabel,
	StyledErrorSpan,
	StyledCardNameContainer,
	StyledInputCardName,
	StyledCardNumberContainer,
	StyledInputCardNumber,
	StyledCardDetailsContainer,
	StyledMonthYearsContainer,
	StyledInputsMonthYearContainer,
	SytledInputMonthContainer,
	StyledInputMonth,
	StyledInputYearContainer,
	StyledInputYear,
	StyledCvcContainer,
	StyledInputCvc,
	StyledButton,
} from './styles';

import { FORM_VALIDATIONS } from '../../constants/form-validations';
import { useForm } from 'react-hook-form';

const Form = () => {
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm({ mode: 'onChange' });

	// console.log(errors)

	return (
		<StyledForm onSubmit={handleSubmit(formSubmit)}>
			{/* Card Name */}
			<StyledCardNameContainer>
				<StyledTextsLabel htmlFor='name'>CARDHOLDER NAME</StyledTextsLabel>
				<StyledInputCardName
					type='text'
					id='card_name'
					name='card_name'
					placeholder='Jane Appleseed'
					{...register('card_name', FORM_VALIDATIONS.NAME)}
				/>
				<StyledErrorSpan>{errors?.card_name?.message}</StyledErrorSpan>
			</StyledCardNameContainer>

			{/* Card Number */}
			<StyledCardNumberContainer>
				<StyledTextsLabel htmlFor='card_number'>CARD NUMBER</StyledTextsLabel>
				<StyledInputCardNumber
					type='number'
					id='card_number'
					name='card_number'
					placeholder='e.g. 1234 5678 9123 0000'
					maxLength={16}
					{...register('card_number', FORM_VALIDATIONS.CARD_NUMBER)}
				/>
				<StyledErrorSpan>{errors?.card_number?.message}</StyledErrorSpan>
			</StyledCardNumberContainer>

			{/* Month, Year and Cvc */}
			<StyledCardDetailsContainer>
				{/* Month, Year */}
				<StyledMonthYearsContainer>
					<StyledTextsLabel htmlFor='month'>EXP.DATE(MM/YY)</StyledTextsLabel>
					<StyledInputsMonthYearContainer>
						{/* input month */}
						<SytledInputMonthContainer>
							<StyledInputMonth
								type='text'
								id='card_month'
								name='card_month'
								placeholder='MM'
								maxLength={2}
								{...register('card_month', FORM_VALIDATIONS.CARD_MONTH)}
							/>
							<StyledErrorSpan>{errors?.card_month?.message}</StyledErrorSpan>
						</SytledInputMonthContainer>

						{/* input year */}
						<StyledInputYearContainer>
							<StyledInputYear
								type='text'
								id='card_year'
								name='card_year'
								placeholder='YY'
								maxLength={2}
								{...register('card_year', FORM_VALIDATIONS.CARD_YEAR)}
							/>
							<StyledErrorSpan>{errors?.card_year?.message}</StyledErrorSpan>
						</StyledInputYearContainer>
					</StyledInputsMonthYearContainer>
				</StyledMonthYearsContainer>

				{/* cvc */}
				<StyledCvcContainer>
					<StyledTextsLabel htmlFor='cvc'>CVC</StyledTextsLabel>

					<StyledInputCvc
						type='text'
						id='card_cvc'
						name='card_cvc'
						placeholder='e.g. 123'
						maxLength={3}
						{...register('card_cvc', FORM_VALIDATIONS.CARD_CVC)}
					/>
					<StyledErrorSpan>{errors?.card_cvc?.message}</StyledErrorSpan>
				</StyledCvcContainer>
			</StyledCardDetailsContainer>

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
