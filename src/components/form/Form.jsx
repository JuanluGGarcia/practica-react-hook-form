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
	StyledButton
} from './styles';

import { FORM_VALIDATIONS } from '../../constants/form-validations';
// import { useForm } from 'react-hook-form';
// import Cards from '../cards/Cards';

const Form = ({ handleSubmit, register, errors }) => {
	
	// <Cards formValues={formValues} />;

	return (
		<StyledForm onSubmit={handleSubmit(formSubmit)}>
			{/* Card Name */}
			<StyledCardNameContainer>
				<StyledTextsLabel htmlFor='card_name'>CARDHOLDER NAME</StyledTextsLabel>
				<StyledInputCardName
					type='text'
					id='card_name'
					name='card_name'
					placeholder='Jane Appleseed'
					maxLength={25}
					{...register('card_name', FORM_VALIDATIONS.NAME)}
				/>
				<StyledErrorSpan>{errors?.card_name?.message}</StyledErrorSpan>
			</StyledCardNameContainer>

			{/* Card Number */}
			<StyledCardNumberContainer>
				<StyledTextsLabel htmlFor='card_number'>CARD NUMBER</StyledTextsLabel>
				<StyledInputCardNumber
					type='text'
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

