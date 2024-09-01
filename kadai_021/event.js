// btn idを取得
const Btn = document.getElementById('btn');
const Text = document.getElementById('text');

// btn id を持つHTML要素をクリックしたときにイベント処理を実行
Btn.addEventListener('click' , () => {
    setTimeout(() => {
   Text.textContent = 'ボタンをクリックしました';
}, 2000);
});


