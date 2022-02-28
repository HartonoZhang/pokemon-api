  export const checkingValue = (value) => {
    if (!value) {
      return;
    }
    let valueString = value.toString();
    if (valueString.length === 1) {
      return "0." + value;
    }
    let first = valueString.substring(0, valueString.length - 1);
    let last = valueString.substring(
      valueString.length - 1,
      valueString.length
    );
    return first + "." + last;
  };

  export const upperCaseFirstIndex = (value) => {
    if (!value) {
      return;
    }
    let first = value.substring(0, 1);
    let last = value.substring(1, value.length);
    let newString = first.toUpperCase() + last;
    return newString.replaceAll('-', " ");
  };
