export default function setAge(birthday) {
  const birthdaySplited = {
    day: +birthday.split(".")[0],
    month: +birthday.split(".")[1],
    year: +birthday.split(".")[2],
  };
  const today = {
    day: new Date().getDate(),
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  };

  let userAge = today.year - birthdaySplited.year;

  if (birthdaySplited.month > today.month) {
    userAge = userAge - 1;
    return userAge;
  }
  if (
    birthdaySplited.month === today.month &&
    birthdaySplited.day > today.day
  ) {
    userAge = userAge - 1;
    return userAge;
  } else {
    return userAge;
  }
}
