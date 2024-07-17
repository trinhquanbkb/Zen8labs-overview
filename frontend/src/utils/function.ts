export const truncateString = (str: string, maxLength: number) => {
  if (str.length > maxLength) {
    return str.substring(0, maxLength) + "...";
  } else {
    return str;
  }
};

export const getTimeChat = (isoTimeStr: string) => {
  let date = new Date(isoTimeStr);
  let ictOffset = 7 * 60;
  let utcOffset = date.getTimezoneOffset();
  let ictTime = new Date(date.getTime() + (ictOffset + utcOffset) * 60 * 1000);
  let hours = ictTime.getHours();
  let minutes = ictTime.getMinutes();

  let formattedHours = hours < 10 ? "0" + hours : hours;
  let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

  return `${formattedHours}:${formattedMinutes}`;
};

export const isDifferentDay = (isoTimeStr1: string, isoTimeStr2: string) => {
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

export const convertISOToDDMMYY = (isoTimeStr: string) => {
  let date = new Date(isoTimeStr);
  let ictOffset = 7 * 60;
  let ictTime = new Date(date.getTime() + ictOffset * 60 * 1000);
  let day = ictTime.getUTCDate();
  let month = ictTime.getUTCMonth() + 1;
  let year = ictTime.getUTCFullYear().toString();
  let hours = ictTime.getUTCHours();
  let minutes = ictTime.getUTCMinutes();
  let seconds = ictTime.getUTCSeconds();

  let dayConvert = day < 10 ? "0" + day.toString() : day.toString();
  let monthConvert = month < 10 ? "0" + month.toString() : month.toString();
  let hoursC = hours < 10 ? "0" + hours : hours;
  let minutesC = minutes < 10 ? "0" + minutes : minutes;
  let secondsC = seconds < 10 ? "0" + seconds : seconds;

  return `${dayConvert}-${monthConvert}-${year} ${hoursC}:${minutesC}:${secondsC}`;
};

export const convertTimeToICT = (isoTimeStr: string) => {
  let date = new Date(isoTimeStr);
  let ictOffset = 7 * 60;
  let utcOffset = date.getTimezoneOffset();
  let ictTime = new Date(date.getTime() + (ictOffset + utcOffset) * 60 * 1000);

  let day = ictTime.getUTCDate();
  let month = ictTime.getUTCMonth() + 1;
  let year = ictTime.getUTCFullYear();
  let hours = ictTime.getUTCHours();
  let minutes = ictTime.getUTCMinutes();
  let seconds = ictTime.getUTCSeconds();

  let dayC = day < 10 ? "0" + day : day;
  let monthC = month < 10 ? "0" + month : month;
  let hoursC = hours < 10 ? "0" + hours : hours;
  let minutesC = minutes < 10 ? "0" + minutes : minutes;
  let secondsC = seconds < 10 ? "0" + seconds : seconds;

  let formattedTime = `${dayC}-${monthC}-${year} ${hoursC}:${minutesC}:${secondsC} ICT`;

  return formattedTime;
};
