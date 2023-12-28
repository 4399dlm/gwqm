function tab(tname){
    var tab=tname;
    var tt=tab.querySelector(".t-title");	
    var span=tt.getElementsByTagName("span");
    var tc=tab.querySelectorAll(".tc");
    
var header = document.getElementById("header");
var txt3 = header.querySelector(".txt3");
var shang = txt3.querySelector(".shang");
var xia = txt3.querySelector(".xia");
var cs = txt3.querySelector(".cs").innerHTML;
var txt5 = header.querySelector(".txt5");
var tc2 = header.getElementsByClassName("tc")[2];
let n = 0;
shang.onclick = () =>{
    cs++;
    txt3.querySelector(".cs").innerHTML = cs;
}
xia.onclick = () =>{
    cs--;
    txt3.querySelector(".cs").innerHTML = cs;
}

txt5.onclick = () =>{
    tc2.style.display = "none";
    n=1;
}
    for(var i=0;i<span.length;i++)
    {
        span[i].onmouseover=function(){
            for(var j=0;j<tc.length;j++){
                tc[j].style.display="none";
                span[j].index=j;
                span[j].className="";
            }
            tc[this.index].style.display="block";
            if(n==1){
                tc[2].style.display = "none";
            }
            this.className="cur";
        }
    }
    }

    var acd=document.getElementsByClassName("acd")[0];
    var dt=acd.getElementsByTagName("dt");
    var dd=acd.querySelectorAll("dd");
    for(let i=0;i<dt.length;i++){
        dt[i].onclick=function(){
            for(let j=0;j<dt.length;j++){
                dt[j].classList.remove("cur");
                dd[j].style.display="none";
            }
            this.classList.add("cur");
            this.nextElementSibling.style.display="block";
        }
    }

