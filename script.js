let container = document.querySelector(".container");
let emptyhead = document.querySelector(".response");

emptyhead.style.visibility = "visible";
function stopwatchfun() {
  emptyhead.style.visibility = "hidden";
  let stopwatchbox = document.createElement("div");
  stopwatchbox.classList = "stopwatchbox";
  stopwatchbox.innerHTML = ` <div id="stopwatch" class="stopwatch">
      <div class="screen">
        <span id="hr">00</span>:
        <span id="min">00</span>:
        <span id="sec">00</span>:
        <span id="msec">00</span>
      </div>
    
      <div class="btns">
        <button class="stop">stop</button>
        <button class="start">start</button>
        <button class="reset">reset</button>
      </div>
    </div>
    </div>`;
  container.appendChild(stopwatchbox);
  let hrElement = document.querySelector("#hr");
  let minElement = document.querySelector("#min");
  let secElement = document.querySelector("#sec");
  let msecElement = document.querySelector("#msec");

  let hr = parseInt(hrElement.innerText);
  let min = parseInt(minElement.innerText);
  let sec = parseInt(secElement.innerText);
  let msec = parseInt(msecElement.innerText);

  let on = false;
  let startbtn = document.querySelector(".start");
  let stopbtn = document.querySelector(".stop");
  let resetbtn = document.querySelector(".reset");

  var timeoutID = 0;
  function startwatch() {
    hrElement.innerText = hr < 10 ? "0" + hr : hr;
    minElement.innerText = min < 10 ? "0" + min : min;
    secElement.innerText = sec < 10 ? "0" + sec : sec;
    msecElement.innerText = msec < 10 ? "0" + msec : msec;

    if (on) {
      timeoutID = setTimeout(() => {
        msec = msec + 1;
        if (msec >= 100) {
          sec = sec + 1;
          msec = 0;
        }

        if (sec >= 60) {
          min = min + 1;
          sec = 0;
        }
        if (min >= 60) {
          hr = hr + 1;
          min = 0;
        }
        startwatch();
      }, 10);
    }
  }

  startbtn.addEventListener("click", () => {
    on = true;
    startwatch();
  });

  function stopwatch() {
    on = false;
  }
  stopbtn.addEventListener("click", stopwatch);
  function reset() {
    on = false;
    hrElement.innerText = "00";
    minElement.innerText = "00";
    secElement.innerText = "00";
    msecElement.innerText = "00";
    clearTimeout(timeoutID);
  }
  resetbtn.addEventListener("click", reset);
}

function timerfun() {}
