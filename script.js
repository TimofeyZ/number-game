console.log("чебурек");
let hearts = document.getElementById("h2")
let hints = document.getElementById("hints")
let secret = Math.floor(Math.random() * 10 + 1)
console.log(secret);
let playerInput = document.getElementById("input")
console.log(120 / 6);
let hp = 3
console.log("жизхни:" + hp);

console.log("жизхни:" + hp);
let check = document.getElementById("check")
console.log(check);
check.onclick = function () {
   console.log(playerInput.value);
   if (playerInput.value == secret) {
      console.log("🎯");
      hearts.innerHTML = ("🎯")
      check.disabled=true
   }
   else {
      console.log("❌");
      hp = hp - 1

      if (hp == 0) {
         hints.innerHTML = "загаданое число " + secret
         hearts.innerHTML = "❌"
         check.disabled=true
      }
      else {
         hearts.innerHTML = "💖".repeat(hp)
         if (playerInput.value > secret) {
            hints.innerHTML = ("число меньше")

         }
         else {
            hints.innerHTML = ("число больше")
         }

      }

   }

}
let newgame = document.getElementById("newgame")
console.log(newgame);
newgame.onclick = function () {
secret=Math.floor(Math.random() * 10 + 1)
hp=3
hints.innerHTML = ("...")
hearts.innerHTML = "💖".repeat(hp)
check.disabled=false


}
// 1.если секретное число меньшечисла игрока, то собщять игроку на экране