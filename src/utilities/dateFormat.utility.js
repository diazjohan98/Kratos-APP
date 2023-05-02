import moment from "moment";

const dateToStringDateFormat = (dateString) => {
  const dateValue = new Date(dateString);

  return moment(dateValue).format("DD/MM/YYYY");
};

const stringFormattedToDate = (str) => {
  return moment(str, "YYYY-MM-DD").toDate();
};

export const DateFormatUtility = {
  dateToStringDateFormat,
  stringFormattedToDate,
};
