import styled from 'styled-components';

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: .5rem;
	padding-bottom: 1.875rem;
	padding-inline: 1rem;
	width: 100%;
	@media screen and (min-width: 64rem) {
		width: 20%;
	}
`;

const StyledTextsLabel = styled.label`
	color: #21092f;
	font-weight: bold;
	letter-spacing: 0.1rem;
	/* margin: 0; */
`;

const StyledErrorSpan = styled.span`
	color: red;
	font-size: 0.7rem;
	/* padding-right: .75rem; */
`;

const StyledCardNameContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

const StyledInputCardName = styled.input`
	border: none;
	padding-inline: 1rem;
	border: 1px solid purple;
	border-radius: 8px;
	height: 1.875rem;
	outline: none;
	width: 100%;
`;

const StyledCardNumberContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

const StyledInputCardNumber = styled.input`
	border: none;
	padding-inline: 1rem;
	border: 1px solid purple;
	border-radius: 8px;
	height: 1.875rem;
	outline: none;
	width: 100%;
`;

const StyledCardDetailsContainer = styled.div`
	display: flex;
	gap: 1rem;
`;

const StyledMonthYearsContainer = styled.div`
	/* display: flex; */
	/* flex-direction: column; */
	/* width: 40%; */
`;

const StyledInputsMonthYearContainer = styled.div`
	display: flex;
	gap: 0.7rem;
`;

const StyledInputMonth = styled.input`
 	width: 4rem;
 	margin-right: .5rem;
 	height: 1.875rem;
 	border-radius: 8px;
 	border: none;
 	border: 1px solid purple;
 	outline: none;
 	text-align: center;
// 	@media screen and (min-width: 64rem) {
// 		width: 4.375rem;
// 	}
`;

const StyledInputYear = styled.input`
 	width: 4rem;
 	margin-right: .5rem;
 	height: 1.875rem;
 	border-radius: 8px;
 	border: none;
 	border: 1px solid purple;
 	outline: none;
 	text-align: center;
// 	@media screen and (min-width: 64rem) {
// 		width: 4.375rem;
// 	}
`;

const StyledCvcContainer = styled.div`
	/* width: 60%; */
`;

const StyledInputCvc = styled.input`
	width: 100%;
	padding-inline: 1rem;
	height: 1.875rem;
	border-radius: 8px;
	border: none;
	border: 1px solid purple;
	outline: none;
	/* @media screen and (min-width: 64rem) {
		width: 4.375rem;
	} */
`;

const StyledButton = styled.button`
	width: 100%;
	background-color: #21092f;
	border: none;
	color: #fff;
	height: 2.8125rem;
	border-radius: .5rem;
	font-size: 1.1rem;
	margin-top: 1rem;
	/* @media screen and (min-width: 64rem) {
		cursor: pointer;
	} */
`;

export {
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
	StyledInputMonth,
	StyledInputYear,
	StyledCvcContainer,
	StyledInputCvc,
	StyledButton
};
