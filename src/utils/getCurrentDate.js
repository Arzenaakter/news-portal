export function getCurrentDate() {
  // Create a new Date object to get the current date and time
  const currentDate = new Date();

  // Array of month names
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get day, month, date, and year
  const dayOfWeek = currentDate.toLocaleString("default", { weekday: "long" });
  const month = months[currentDate.getMonth()];
  const date = currentDate.getDate();
  const year = currentDate.getFullYear();

  // Return the formatted string
  return `${dayOfWeek}, ${month} ${date}, ${year}`;
}


// console.log(getCurrentDate());
