export const formatDaysToSummer = (date) => {
  const day = date.getDate(); // getDate daje od 1-31, getDay daje od 0-6
  const month = date.getMonth();
  const year = date.getFullYear();
  let startSummer = new Date(year, 5, 21).getTime();
  let startSummerNextYear = new Date(year+1, 5, 21).getTime();
  let today = date.getTime();


  if (month > 5 && month < 8) { //czerwiec-wrzesien
    return false;
  } else if (day >= 21 && month == 5) { //czerwiec
    return false;
  } else if (day <= 23 && month == 8) { //wrzesien
    return false;
  } else {
    if (startSummer > today) { // 6 > 2
      const x = Math.floor((startSummer - today) / 1000 / 60 / 60 / 24);
      return x;
    } else if (startSummer < today) {
      const y = Math.floor((startSummerNextYear - today) / 1000 / 60 / 60 / 24);
      return y;
    }
  }};
