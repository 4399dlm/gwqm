function tab(tname){//tname是指使用tab选项卡的元素的选择器名称
    var tab=tname;
    var tt=tab.querySelector(".t-title");	
    var span=tt.getElementsByTagName("span");
    var tc=tab.querySelectorAll(".tc");
    
    
    for(var i=0;i<span.length;i++)
    {
        span[i].onmouseover=function(){
            for(var j=0;j<tc.length;j++){
                tc[j].style.display="none";
                span[j].index=j;
                span[j].className="";
            }
            tc[this.index].style.display="block";
            this.className="cur";
            
        }
    }
    }
