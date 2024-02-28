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
		required: "Can't be blank"
	},
	cardYear: {
		required: "Can't be blank"
	},
	cardCvc: {
		required: "Can't be blank"
	}
};

const patterns = {
	onlyLetters: /^[a-z]+$/,
	onlyNumbers: /^[0-9]$/
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
			value: patterns.onlyNumbers,
			message: messages.cardNumber.wrong
		}
	},
	CARD_MONTH: {
		required: messages.cardMonth.required
	},
	CARD_YEAR: {
		required: messages.cardYear.required
	},
	CARD_CVC: {
		required: messages.cardCvc.required
	}
};


