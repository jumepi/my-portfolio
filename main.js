const Charactor = document.getElementById("charactor")
const Block = document.getElementById("block")
const JumpOver = document.getElementById("jumpover")
const Point = document.getElementById("point")
const BlockFast = document.getElementById("blockfast")
let Number = 0
const Like = ["牛乳","ハンバーグ","旅行","Apex","苔"]
let i = 0

const Likes = function(){
  if (Number %10 == 0){
  // for(i;i <= Like.length;i++){
        Point.textContent = Like[i]
        i++
    // }
  }
}

JumpOver.onclick = function(){
  if (Charactor.classList != "animate"){
    // アニメションが入ってないとき
    Charactor.classList.add("animate")
        // アニメションを追加
  }
    setTimeout(function(){
      // 500msたったらanimateを削除
      Charactor.classList.remove("animate")},500);
  Number += 1
  Point.textContent = ("現在のジャンプした数⇒"+Number)
  // fetch("https://app.pixelencounter.com/api/basic/monsters/random")
  // .then((res) => {
  //   return res.json() // 結果を json として読み込んで、次の then に渡す
  // })
  // .then((data) => {
  //   Block.src = data.message // 画像を表示する
  // })
  Likes()

  }

const checkDead = setInterval(function(){
   // 10msごとに
  const charactorTop = parseInt(window.getComputedStyle(Charactor).getPropertyValue("top"))
  // cssの現在のキャラクターのtop(高さ)をparseint(整数値にするやつ)整数値にして取ってくる
  const blockLeft = parseInt(window.getComputedStyle(Block).getPropertyValue("left"))
  // cssの現在のブロックの左(left)をparseint(整数値にするやつ)整数値にして取ってくる
  const blockfastkLeft = parseInt(window.getComputedStyle(BlockFast).getPropertyValue("left"))
  // cssの現在のブロックの左(left)をparseint(整数値にするやつ)整数値にして取ってくる
  if (blockLeft < 320 && blockLeft > 300 && charactorTop >= -150){
    // ブロックの左が20以上0未満であり、キャラクターの上が130以上の場合
    BlockFast.style.animation="none"
    //ブロックのアニメをなしに
    BlockFast.style.display="none"
    // ブロックのdisplayプロパティをなしに⇒ブロックがなくなる
    Block.style.animation="none"
    //ブロックのアニメをなしに
    Block.style.display="none"
    // ブロックのdisplayプロパティをなしに⇒ブロックがなくなる
    Number = 0
    alert("雑魚が")
    location.reload();
  }
  if (blockfastkLeft < 320 && blockfastkLeft > 300 && charactorTop >= -150){
    // ブロックの左が20以上0未満であり、キャラクターの上が130以上の場合
    BlockFast.style.animation="none"
    //ブロックのアニメをなしに
    BlockFast.style.display="none"
    // ブロックのdisplayプロパティをなしに⇒ブロックがなくなる
    Block.style.animation="none"
    //ブロックのアニメをなしに
    Block.style.display="none"
    // ブロックのdisplayプロパティをなしに⇒ブロックがなくなる
    Number = 0
    alert("雑魚が")
    location.reload();
  }

},10);



