
var url = `http://rap2api.taobao.org/app/mock/315442/cong`;
fetch(url).then(rs => {
    return rs.json();
}).then(data => {
    console.log(data);
    parse(data);
    //自定义函数，写在外面，参数为json数组
    
}).catch(error => {
    console.log(error);
});
function parse(rs) {
    var jarr = rs;
    var list = document.querySelector(".jlist");
    for (let v of jarr) {
        let li = document.createElement("li");
        li.innerHTML = `
        <div class="txt">
        <h3><a href="${v.link}">${v.title}</a></h3>
        <span class="zd">${v.zd}</span>
        <span class="author">${v.author}</span>
        <span class="gen">${v.gen}</span>
    </div>
             `;
        list.appendChild(li);
    }
}


var url = `http://rap2api.taobao.org/app/mock/315442/xin`;
fetch(url).then(rs => {
    return rs.json();
}).then(data => {
    console.log(data);
    parse(data);
    //自定义函数，写在外面，参数为json数组
}).catch(error => {
    console.log(error);
});
function parse1(rs) {
    var jarr = rs;
    var list = document.querySelector(".ilist");
    for (let v of jarr) {
        let li = document.createElement("li");
        li.innerHTML = `
        <div class="txt">
        <h3><a href="${v.link}">${v.title}</a></h3>
        <span class="zd">${v.zd}</span>
        <span class="author">${v.author}</span>
        <span class="gen">${v.gen}</span>
             
    </div>
    <img src="${v.img}"> 
             `;
        list.appendChild(li);
    }
}