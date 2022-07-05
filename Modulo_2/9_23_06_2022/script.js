//Timeout

//Esercizio 1
/*const getHoursMinutes = () =>
  console.log(
    `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
  );

setTimeout(getHoursMinutes, 1000);
setTimeout(getHoursMinutes, 5000);
setTimeout(getHoursMinutes, 10_000);
*/

//Esercizio 1 *bonus*
/*const arrayDelay = [1, 5, 10];
const getHoursMinutes = () =>
  console.log(
    `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
  );

const delay = (element) => {
  setTimeout(getHoursMinutes, 1000 * element);
};

arrayDelay.forEach(delay);
*/

//Interval

//Esercizio 2.1
/*const getHoursMinutes = () => {
  console.clear();
  console.log(
    `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
  );
};
setInterval(getHoursMinutes, 1000);
*/

//Esercizio 2.2
/*let nums = [42, 23, 1, 7, 12, 99];

const timerId = setInterval(() => {
  const random = Math.floor(Math.random() * nums.length);
  console.log(nums[random]);
  numsRedux = nums.splice(random, 1);
}, 1000);

setTimeout(() => {
  clearInterval(timerId);
}, 1000 * nums.length);
*/

//DOM

//Esercizio 3
/*const getHoursMinutes = () => {
  console.clear();
  document.body.innerHTML = `<h1>${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}</h1>`;
};
setInterval(getHoursMinutes, 1000);
*/
