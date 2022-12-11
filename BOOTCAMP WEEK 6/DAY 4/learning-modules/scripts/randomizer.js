

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

 export default function getRandomDay() {
  const randomDay = Math.floor(Math.random() * days.length);

  return days[randomDay];
}

export function someNumber() {
    return Math.floor(Math.random() * 100);
  }

//   default exports can be written at the bottom of the file, not specific export variables. 