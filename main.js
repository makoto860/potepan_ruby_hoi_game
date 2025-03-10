// ストップウォッチの定義
const $watch = document.getElementById("js-stopwatch");
const $start = document.getElementById("js-stopwatchStart");
const $stop = document.getElementById("js-stopwatchStop");
const $resset = document.getElementById("js-stopwatchResset");

// 開始時間
let startTime;

// 停止時間
let stopTime = 0;

// タイムアウトID
let timeoutID;

$watch.textContent ='0 : 0 : 0 : 0'

// 時間を表示する関数
function displayTime() {
  
  const currentTime = new Date(Date.now() - startTime + stopTime);
  const h = String(currentTime.getHours() - 9);
  const m = String(currentTime.getMinutes());
  const s = String(currentTime.getSeconds());
  const ms = String(currentTime.getMilliseconds() % 1000 / 10).slice(0,1);
  $watch.textContent = `${h}:${m}:${s}.${(ms)}`;
  timeoutID = setTimeout(displayTime, 10);
}

// スタートボタンがクリックされたら時間を進める部分
$start.addEventListener("click", () => {
  $start.disabled = true;
  $stop.disabled = false;
  $resset.disabled = true;
  startTime = Date.now();
  displayTime();
  $watch.textContent = "0:0:0:0";
});

// ストップボタンがクリックされたら時間を止める部分
$stop.addEventListener("click", function () {
  $start.disabled = false;
  $stop.disabled = true;
  $resset.disabled = false;
  clearTimeout(timeoutID);
  stopTime += Date.now() - startTime;
});

// リセットボタンがクリックされたら時間を0に戻す部分
$resset.addEventListener("click", function () {
  $start.disabled = false;
  $stop.disabled = true;
  $resset.disabled = true;
  $watch.textContent = "0:0:0:0";
  stopTime = 0;
});