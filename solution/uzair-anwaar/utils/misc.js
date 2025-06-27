
module.exports = {
    isValidInteger: (value) => {
        const parsed = parseInt(value, 10);
        let result = Number.isInteger(parsed) && parsed.toString() === value.toString();
        return result;
    }
}