/**
 * Created by admin on 2017/4/14.
 */
//添加新地址
$('.add').on('click',function (e) {
    $('.mo').fadeIn('fast');
    if ( e && e.preventDefault ){
        e.preventDefault();
    } else{
        window.event.returnValue = false;
    }
    return false
});

//取消
$('.out').on('click',function () {
    $('.mo').fadeOut('fast');
    $('#addressText')[0].reset();
});

//创建新选项
$('#query').on('click',function (e) {
    var js=$('#addressText').serializeArray();
    var j='';
    for (var i=0;i<js.length;i++){
        j+=js[i].value;
    }
    var txt='<p><input type="radio" name="address"/><label>'+j+'</label><a class="delete" href="#">删除</a></p>';
    $('.addrassCase').append(txt);
    $('.mo').fadeOut("fast");
    $('#addressText')[0].reset();
    if ( e && e.preventDefault ){
        e.preventDefault();
    } else{
        window.event.returnValue = false;
    }
    return false
});