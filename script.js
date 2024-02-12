const input = document.getElementById("input");
const startButton = document.getElementById("btn");
const timeDisplay = document.getElementById("display");
const audioplayer = document.getElementById("audioplayer")

function startTimer(duration, display) {
  let timer = duration, minutes, seconds;

  let countdown = setInterval(function () {
    // Разбиение времени на минуты и секунды
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
    
    minutes = minutes < 10 ? "0" + minutes : minutes; // Добавляем ведущий ноль, если число < 10
    seconds = seconds < 10 ? "0" + seconds : seconds; // Добавляем ведущий ноль, если число < 10

    // Вывод оставшегося времени в формате ММ:СС
    display.textContent = minutes + ":" + seconds;

    // Уменьшение таймера на 1 секунду
    if (--timer < 0) {
      // Таймер достиг нуля
      clearInterval(countdown);
      display.textContent = "Время истекло!";

      audioplayer.play(); // старт музыки

      let colorToggle = false;
      let flashingInterval = setInterval(function() {
        if (colorToggle) {
          document.body.style.backgroundColor = 'yellow';
        } else {
          document.body.style.backgroundColor = 'red';
        }
        colorToggle = !colorToggle;
        }, 200); // мигание каждые 200 миллисекунд (0.2 секунды)

        setTimeout(function() {
          clearInterval(flashingInterval);
          document.body.style.backgroundColor = '';
        }, 4000); // остановка мигания и сброс цвета через 4 секунды 
    }
  }, 1000); // Интервал таймера 1 секунда (1000 миллисекунд)
}

startButton.addEventListener("click", function() {
  const time = parseInt(input.value, 10); // Получаем значение времени из ввода
  startTimer(time, timeDisplay);
});