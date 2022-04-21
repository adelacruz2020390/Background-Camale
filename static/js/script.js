const colors = ["Aqua", "red", "blue", "Crimson" , "DarkRed" ,"DeepPink" , "OrangeRed" ,
 "Yellow" , "Violet", "RebeccaPurple" , "Lime" , "green"
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}