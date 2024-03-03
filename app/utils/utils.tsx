export const convertToDateString = (paramDate: string) => {
  const dateString = paramDate;
  const date = new Date(dateString);

  // Format the date string
  const formattedDate = date.toLocaleDateString("en-US");

  return formattedDate
};
