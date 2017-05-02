/**
 * Created by admin on 2017/4/14.
 */
var s="",si=0,c="",ci=0,q="",qi=0;
for (var i=0;i<chinaAreaMap.length;i++){
    s+='<option>'+chinaAreaMap[i][0]+'</option>';
}
for (var j=0;j<chinaAreaMap[19][2].length;j++){
    c+='<option>'+chinaAreaMap[19][2][j][0]+'</option>';
}
for (var k=0;k<chinaAreaMap[19][2][0][2].length;k++){
    q+='<option>'+chinaAreaMap[19][2][0][2][k][0]+'</option>';
}
sheng.innerHTML=s;
shi.innerHTML=c;
qu.innerHTML=q;
sheng.options[19].selected=true;
sheng.onchange=function () {
    si=this.options.selectedIndex;
    c="";
    q="";
    ci=0;
    qi=0;
    for (var j=0;j<chinaAreaMap[si][2].length;j++){
        c+='<option>'+chinaAreaMap[si][2][j][0]+'</option>';
    }
    for (var k=0;k<chinaAreaMap[si][2][0][2].length;k++){
        q+='<option>'+chinaAreaMap[si][2][0][2][k][0]+'</option>';
    }
    shi.innerHTML=c;
    qu.innerHTML=q;
};
shi.onchange=function () {
    ci=this.options.selectedIndex;
    q="";
    qi=0;
    for (var k=0;k<chinaAreaMap[si][2][ci][2].length;k++){
        q+='<option>'+chinaAreaMap[si][2][ci][2][k][0]+'</option>';
    }
    qu.innerHTML=q;
};
qu.onchange=function () {
    qi=this.options.selectedIndex;
};