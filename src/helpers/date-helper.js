export const getStartDate = (filter) => {
  const now = new Date();
  switch (filter) {
    case "24hrs":
      return new Date(now.getTime() - 24 * 60 * 60 * 1000);
    case "7days":
      return new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    case "30days":
      return new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    case "3months":
      return new Date(now.setMonth(now.getMonth() - 3));
    case "thisYear":
      return new Date(now.getFullYear(), 0, 1);
    case "all":
    default:
      return
  }
};
