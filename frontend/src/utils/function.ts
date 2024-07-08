export const truncateString = (str: string, maxLength: number) => {
  if (str.length > maxLength) {
    return str.substring(0, maxLength) + "...";
  } else {
    return str;
  }
};

export const getTimeChat = (isoTimeStr: Date) => {
  let timePart = isoTimeStr.toString().split("T")[1].split("Z")[0];
  let [hour, minute] = timePart.split(":");
  let hourInt = parseInt(hour);
  let period = hourInt >= 12 ? "pm" : "am";
  hourInt = hourInt % 12 || 12;

  let formattedTime = `${hourInt}:${minute} ${period}`;
  return formattedTime;
};

export const isDifferentDay = (isoTimeStr1: Date, isoTimeStr2: Date) => {
  let date1 = new Date(isoTimeStr1);
  let date2 = new Date(isoTimeStr2);
  let day1 = date1.getUTCDate();
  let day2 = date2.getUTCDate();
  let month1 = date1.getUTCMonth();
  let month2 = date2.getUTCMonth();
  let year1 = date1.getUTCFullYear();
  let year2 = date2.getUTCFullYear();

  return day1 !== day2 || month1 !== month2 || year1 !== year2;
};

export const convertISOToDDMMYY = (isoTimeStr: Date) => {
  let date = new Date(isoTimeStr);
  let day = date.getUTCDate();
  let month = date.getUTCMonth() + 1;
  let year = date.getUTCFullYear().toString();

  let dayConvert = day < 10 ? "0" + day.toString() : day.toString();
  let monthConvert = month < 10 ? "0" + month.toString() : month.toString();

  return `${dayConvert}-${monthConvert}-${year}`;
};
