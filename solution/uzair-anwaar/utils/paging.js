const { isValidInteger } = require('./misc')

module.exports = {
    applyPaging: (query) => {
        let {
            pn = 1,
            ps = 10,
        } = query;

        pn = isValidInteger(pn) ? pn : 1;
        ps = isValidInteger(ps) ? ps : 10;

        const offset = (parseInt(pn) - 1) * parseInt(ps);
        return { offset, pn: parseInt(pn), ps: parseInt(ps) }
    }
}