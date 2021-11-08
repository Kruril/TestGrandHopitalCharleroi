const Bmi = (weight, size) => {
    return Math.round(weight/((size/100)*(size/100))*100)/100;
};
export default Bmi;