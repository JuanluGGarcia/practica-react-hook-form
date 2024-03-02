const messages = {
	name: {
		required: 'The name is required',
		wrong: 'Wrong format, letters only'
	},

	cardNumber: {
		required: 'The number is required',
		wrong: 'Wrong format, numbers only'
	},
	cardMonth: {
		required: "Can't be blank",
		wrong: 'Numbers only'
	},
	cardYear: {
		required: "Can't be blank",
		wrong: 'Numbers only'
	},
	cardCvc: {
		required: "Can't be blank",
		wrong: 'Numbers only'
	}
};

const patterns = {
	onlyLetters: /^[a-z]+$/,
	onlyNumbers: /^[0-9]$/,
	creditCardNumber: /^[0-9]{16}$/
};

export const FORM_VALIDATIONS = {
	NAME: {
		required: messages.name.required,
		pattern: {
			value: patterns.onlyLetters,
			message: messages.name.wrong
		}
	},
	CARD_NUMBER: {
		required: messages.cardNumber.required,
		pattern: {
			value: patterns.creditCardNumber,
			message: messages.cardNumber.wrong
		}
	},
	CARD_MONTH: {
		required: messages.cardMonth.required,
		pattern: {
			value: patterns.onlyNumbers,
			message: messages.cardMonth.wrong
		}
	},
	CARD_YEAR: {
		required: messages.cardYear.required,
		pattern: {
			value: patterns.onlyNumbers,
			message: messages.cardYear.wrong
		}
	},
	CARD_CVC: {
		required: messages.cardCvc.required,
		pattern: {
			value: patterns.onlyNumbers,
			message: messages.cardCvc.wrong
		}
	}
};


