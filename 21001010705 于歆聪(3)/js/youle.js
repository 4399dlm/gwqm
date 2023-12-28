var url = `http://rap2api.taobao.org/app/mock/315441/youle2`;
fetch(url).then(rs => {
    return rs.json();
}).then(data => {
    console.log(data);
    parse(data);
    //自定义函数，写在外面，参数为json数组
    var main = document.getElementById("main");
    var part = main.querySelector(".part");
    var cs = part.querySelector(".cs").innerHTML;
    var xin = part.querySelector(".xin");
    console.log("cs:"+cs);
    xin.onclick = () =>{
      xin.classList.add("part_cur");
      cs++;
      console.log("cs:"+cs);
      part.querySelector(".cs").innerHTML=cs;
      console.log("cs:"+cs);
    }
  
}).catch(error => {
    console.log(error);
});
function parse(rs) {
    var jarr = rs;
    var list = document.querySelector(".list");
    for (let v of jarr) {
        let li = document.createElement("li");
        li.innerHTML = `
        <div class="part">
        <div class="zuozhe">
        <div class="zuozhe1">
        <img src="${v.touxiang}">
        <p>${v.name}</p>
             </div>
             <p>${v.gengduo}</p>
         </div>
         <p class="miaosu">${v.status}</p>
             <img src="${v.img}" alt="">
             <div class="span">
             <span class="iconfont icon-xiaoxi"></span>
             <div class="cs2">2</div>
             <span class="iconfont icon-shoucang"></span>
             <div class="cs2">4</div>
             <div class="xin"><span class="iconfont icon-dianzan"></span></div>
             <div class="cs">0</div>
             </div>
             </div>
             `;
        list.appendChild(li);
    }
}

var ad = document.getElementById("ad");
var tj = ad.querySelector(".tianjia");
var cover = ad.querySelector(".cover");
var neirong = ad.querySelector(".neirong");
  tj.onclick = () => {
    neirong.style.display="block";
    cover.style.display = "block";
  }

  cover.onclick = () =>{
    neirong.style.display="none";
    cover.style.display = "none";
  }
 


// var main = document.getElementById("main");
// var snav = document.getElementById("snav");
// var li = main.querySelectorAll(".content");
// var div = snav.querySelectorAll("div");
// console.log(main, snav, li, div);
// for (let i = 0; i < div.length; i++) {
//     div[i].onclick = () => {

//         for (let j = 0; j < div.length; j++) {
//             div[j].classList.remove("snav_cur");
//             li[j].style.display = "none";
//         };
//         div[i].classList.add("snav_cur");
//         li[i].style.display = "block";
//     };
// }