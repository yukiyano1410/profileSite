//contentの中身記述 後でinnerHTMLで使用
const pages ={
    hobby:`
        <h2>趣味</h2>
        <p>ラノベ読んだりゲームしたりと娯楽を楽しみまくっている</p>
        `,
    study:`
    
    `,
    works:`
    
    `
};

const content = document.getElementById("content");

//クリックイベントの設定   
document.getElementById("btn-hobby").addEventListener("click", () => {
  content.innerHTML = pages.hobby;
});

document.getElementById("btn-study").addEventListener("click", () => {
  content.innerHTML = pages.study;
});

document.getElementById("btn-works").addEventListener("click", () => {
  content.innerHTML = pages.works;
});

//初期表示
content.innerHTML = pages.hobby;