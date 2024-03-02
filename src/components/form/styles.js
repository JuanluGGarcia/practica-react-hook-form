import styled from 'styled-components';

const StyledForm = styled.form`
	/* background-color: lightcoral; */
	width: 100%;
	display: flex;
	flex-direction: column;
	padding-inline: 1.5rem;
	gap: 0.3rem;
	/* align-items: center; */

	@media screen and (min-width: 900px) {
		width: 50%;
		justify-content: center;
		padding: 0 100px 0 0;
		gap: 0.8rem;
	}
`;

const StyledTextsLabel = styled.label`
	color: #21092f;
	font-weight: bold;
	letter-spacing: 0.1rem;
	margin: 0;
`;

const StyledErrorSpan = styled.span`
	color: red;
	font-size: 0.6rem;
	padding-right: 0.75rem;

	@media screen and (min-width: 900px) {
		font-size: 0.8rem;
	}
`;

const StyledCardNameContainer = styled.div`
	display: flex;
	flex-direction: column;
	/* gap: 0.3rem; */
`;

const StyledInputCardName = styled.input`
	border: none;
	padding: 0.8rem;
	border: 1px solid purple;
	border-radius: 8px;
	outline: none;
	width: 100%;

	@media screen and (min-width: 900px) {
		width: 85%;
		font-size: 1rem;
	}
`;

const StyledCardNumberContainer = styled.div`
	display: flex;
	flex-direction: column;
	/* gap: 0.3rem; */
`;

const StyledInputCardNumber = styled.input`
	border: none;
	padding: 0.8rem;
	border: 1px solid purple;
	border-radius: 8px;
	outline: none;
	width: 100%;

	@media screen and (min-width: 900px) {
		width: 85%;
		font-size: 1rem;
	}
`;

const StyledCardDetailsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	/* gap: 1rem; */

	@media screen and (min-width: 900px) {
		width: 85%;
	}
`;

const StyledMonthYearsContainer = styled.div`
	display: flex;
	flex-direction: column;
	/* gap: 0.3rem; */
	/* width: 50%; */

	/* @media screen and (min-width: 900px) {
		width: 85%;
	} */
`;

const StyledInputsMonthYearContainer = styled.div`
	display: flex;
	justify-content: space-between;
	/* gap: 0.3rem; */

	/* @media screen and (min-width: 900px) {
		gap: 1rem;	
	} */
`;

const SytledInputMonthContainer = styled.div`
	display: flex;
	flex-direction: column;
	/* gap: 0.3rem; */
`;

const StyledInputMonth = styled.input`
	width: 4rem;
	padding: 0.8rem;
	/* height: 1.875rem; */
	border-radius: 8px;
	border: none;
	border: 1px solid purple;
	outline: none;
	text-align: center;
	display: flex;
	flex-direction: column;

	@media screen and (min-width: 900px) {
		font-size: 1rem;
	}
`;

const StyledInputYearContainer = styled.div`
	display: flex;
	flex-direction: column;
	/* gap: 0.3rem; */
`;

const StyledInputYear = styled.input`
	width: 4rem;
	/* height: 1.875rem; */
	padding: 0.8rem;
	border-radius: 8px;
	border: none;
	border: 1px solid purple;
	outline: none;
	text-align: center;

	@media screen and (min-width: 900px) {
		font-size: 1rem;
	}
`;

const StyledCvcContainer = styled.div`
	display: flex;
	flex-direction: column;
	/* gap: 0.3rem; */
	width: 50%;

	@media screen and (min-width: 900px) {
		width: 41%;
	}
`;

const StyledInputCvc = styled.input`
	width: 100%;
	padding: 0.8rem;
	/* height: 1.875rem; */
	border-radius: 8px;
	border: none;
	border: 1px solid purple;
	outline: none;

	@media screen and (min-width: 900px) {
		font-size: 1rem;
	}
`;

const StyledButton = styled.button`
	width: 100%;
	background-color: #21092f;
	border: none;
	color: #fff;
	height: 2.8125rem;
	border-radius: 0.5rem;
	font-size: 1.1rem;
	margin-block: 1rem;
	cursor: pointer;

	@media screen and (min-width: 40.625rem) {
		width: 85%;
	}
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
	SytledInputMonthContainer,
	StyledInputMonth,
	StyledInputYearContainer,
	StyledInputYear,
	StyledCvcContainer,
	StyledInputCvc,
	StyledButton
};
