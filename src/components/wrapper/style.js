import styled from 'styled-components';

const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 0;
	padding: 0;

	@media screen and (min-width: 900px) {
		flex-direction: row;
		justify-content: center;
		/* align-items: center; */
		gap: 3rem;
	}
`;

export { StyledWrapper };
