class NiceError extends Error {
    constructor(message) {
        super(message);
        this.name = 'NiceError';
    }
}