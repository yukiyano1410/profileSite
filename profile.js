// contentの中身記述 後でinnerHTMLで使用
const pages = {
  hobby: `
    <h2>趣味</h2>
    <p>ラノベ読んだりゲームしたりと娯楽を楽しみまくっている</p>
    <p>こっから画像はるなり、おすすめ作品語るなり好きにしろ 中央で分割するためにbootstrap使うなりするのが楽か？</p>
  `,

  study: `
    <h2>おべんきょ</h2>
    <p>こんな感じにhtml+cssにJSで動き加えるのが楽しい</p>
    <p>React勉強中 やってることは分かるけど実装に苦戦する propsとか...</p>
  `,

  works: `
    <h2>作ったもの</h2>

    <!-- 家計簿アプリ -->
    <div class="work-item">
      <h4 class="toggle">家計簿アプリ ▼</h4>
      <div class="details" style="display: none;">
        <p>自分の目標を設定して、少しずつ目標に近づいていけることを可視化できるアプリ。</p>
        <p>支出に対して、満足度やムダだったかどうかを設定して買ってよかった・ダメだったをわかりやすくしました。</p>
      </div>
    </div>

    <h3>完成に至らなかったけど頑張ったもの</h3>

    <!-- タワーディフェンス -->
    <div class="work-item">
      <h4 class="toggle">タワーディフェンス ▼</h4>
      <div class="details" style="display: none;">
        <p>ある日、とあるサーバがウイルスの魔の手に落とされそうになっていた....</p>
        <p>セキュリティシステムとしてサーバを守ることがあなたのお仕事です。</p>
        <p>作っていたものを画像なり動画なり載せとけ。あと勉強の記録も残しておければいいかも？</p>
      </div>
    </div>
  `
};

// content要素
const content = document.getElementById("content");

// ページ切り替えイベント
document.getElementById("btn-hobby").addEventListener("click", () => {
  content.innerHTML = pages.hobby;
});

document.getElementById("btn-study").addEventListener("click", () => {
  content.innerHTML = pages.study;
});

document.getElementById("btn-works").addEventListener("click", () => {
  content.innerHTML = pages.works;
  setupToggle(); // works ページを表示したら開閉機能を設定
});

// 初期表示
content.innerHTML = pages.hobby;

// ▼ 折りたたみを設定する関数
function setupToggle() {
  const toggles = document.querySelectorAll(".toggle");
  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const details = toggle.nextElementSibling;
      const isHidden = details.style.display === "none";
      details.style.display = isHidden ? "block" : "none";

      // ▼▲ の切り替え
      toggle.textContent = toggle.textContent.includes("▼")
        ? toggle.textContent.replace("▼", "▲")
        : toggle.textContent.replace("▲", "▼");
    });
  });
}
