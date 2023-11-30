document.getElementById("purchaseButton").addEventListener("click", function() {
  document.getElementById("confirmationMessage").textContent = "注文処理中、しばらくお待ちください";
  setTimeout(function() {
      window.location.href = 'nextpage.html';
  }, 3000); // 3000ミリ秒（3秒）後に遷移
  // var audio = new Audio('sound.mp3'); // 音声ファイルへのパス
    // audio.play(); // 音声を再生
});
