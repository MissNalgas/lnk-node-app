class ModelError extends Error {

	constructor(error, code) {
		super(error);
		this.code = code;
	}
}

module.exports = ModelError;
