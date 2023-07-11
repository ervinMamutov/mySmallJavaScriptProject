const formatDateUnit = (unit) => {
    return (unit = unit < 10 ? '0' + unit : unit);
};

export default formatDateUnit;
