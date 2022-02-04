const Charactor = document.getElementById("charactor")
const Block = document.getElementById("block")
const JumpOver = document.getElementById("jumpover")
const Point = document.getElementById("point")
const BlockFast = document.getElementById("blockfast")
const DoubleJump = document.getElementById("doublejump")
const Next = document.getElementById("next")
const Introduction = document.getElementById("introduction")
const Sukinamono = document.getElementById("sukinamono")

let Number = 0
const Like = [
  {
    Goods : "牛乳",
    Content : "牛乳は世界で一番おいしい飲み物だよね",
    Picture : ""
  },{
    Goods : "ハンバーグ",
    Content : "ハンバーグはやっぱり静岡のさわやかだよね",
    Picture : ""
  },{
    Goods : "旅行",
    Content : "北海道がお気に入りです",
    Picture : ""
  },{
    Goods : "Apex",
    Content : "暇な時間はApexやってるぜ",
    Picture : ""
  },{
    Goods : "苔",
    Content : "旅行行ったときは苔見ていやされます",
    Picture : "",
  },
  ]
let i = 0

Sukinamono.onclick = function(){
  Introduction.remove()
  // setTimeout(function(){
  //   Charactor.classList.remove("animatestop")
  //   BlockFast.style = 'animation: block 1s infinite linear'
  //   Block.style = 'animation: block 2s infinite linear'
  // },9000);
}

const Likes = function(){
  if (Number %10 == 0){
  // for(i;i <= Like.length;i++){
        Point.textContent = Like[i].Goods
        const start = document.createElement("div")
        start.className = "start"+i
        start.classList.add("sonota")
        start.textContent = Like[i].Content
        Next.append(start)
        i++
    // }
  }
}

const stop = function(){
  Charactor.classList.add("animatestop")
  BlockFast.style = 'animation:none'
  Block.style = 'animation:none'

  // アニメションを追加
  // setTimeout(function(){
  // 500msたったらanimateを削除
  //   Charactor.classList.remove("animate")},3000);
}

const restart = function(){
  setTimeout(function(){
    Charactor.classList.remove("animatestop")
    BlockFast.style = 'animation: block 1s infinite linear'
    Block.style = 'animation: block 2s infinite linear'
  },9000);
}

const action = function(){
  if (Number % 10 == 0 && Number != 0){
    stop()
  }
  else if (Number % 10 == 1 && Number!=1){
    restart()
  }
  else if (Charactor.classList != "animate"){
    // アニメションが入ってないとき
    Charactor.classList.add("animate")
        // アニメションを追加
  }
    setTimeout(function(){
      // 500msたったらanimateを削除
      Charactor.classList.remove("animate")},500);
  Point.textContent = ("現在のジャンプした数⇒"+Number)
  // fetch("https://app.pixelencounter.com/api/basic/monsters/random")
  // .then((res) => {
  //   return res.json() // 結果を json として読み込んで、次の then に渡す
  // })
  // .then((data) => {
  //   Block.src = data.message // 画像を表示する
  // })
  Number += 1
  Likes()
}

const action1 = function(){
  if (Number == 10){
      stop()
    }
    else if (Charactor.classList == "animatestop"){
      restart()

    }else if (Charactor.classList != "animate1"){
      // アニメションが入ってないとき
      Charactor.classList.add("animate1")
          // アニメションを追加

    }
      setTimeout(function(){
        // 500msたったらanimateを削除
        Charactor.classList.remove("animate1")},1000);

    Point.textContent = ("現在のジャンプした数⇒"+Number)
    // fetch("https://app.pixelencounter.com/api/basic/monsters/random")
    // .then((res) => {
    //   return res.json() // 結果を json として読み込んで、次の then に渡す
    // })
    // .then((data) => {
    //   Block.src = data.message // 画像を表示する
    // })
    Number += 1
    Likes()

}

// const selfintroduction = function(){
//   if (Number != 10){
//     Charactor.classList.add("animatestop")
//         // アニメションを追加
//   }
//   else(Number >= 10)
//   {
//     Charactor.classList.remove("animatestop")
    // const start = document.createElement("div")
    // start.className = "start"
    // start.textContent = "NEXT⇒"
    // Next.append(start)
//   }
// }

JumpOver.onclick = function(){
  action()
  }
DoubleJump.onclick = function(){
  action1()
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
    alert("弱いねぇ")
    // location.reload();
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
    alert("弱いねぇ")
    // location.reload();
  }},10);
