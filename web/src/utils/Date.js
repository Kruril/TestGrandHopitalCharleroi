/**
 * Calcul age of patient via is birthday
 * @param date
 * @returns {number}
 * @constructor
 */
export const Age = (date) => {
    const diff_ms = Date.now() - date;
    const age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
};

