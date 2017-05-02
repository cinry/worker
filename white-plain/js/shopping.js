/**
 * Created by admin on 2017/4/14.
 */
//添加标题
$('.breadcrumb li a').eq(0).text();
// 获取用户地址
function getAddress() {
    $.get('http://192.168.0.125:8081/genetell-rf/Ord/findByUser.do',function (data) {
        console.log(data);
        if(data.msg==='查询成功') {
            var result=data.result
            for (var i=0;i<result.length;i++) {
                var p='<p addr-id='+ result[i].addr_id +'><input type="radio" name="address"/><label>'+
                    result[i].shou_name+
                    result[i].shou_tel+
                    result[i].address+
                    '</label><a class="delete" href="#">删除</a></p>';
                $('.addrassCase').append(p);
                // 默认地址
                $('.addrassCase :first-child input').attr('checked','checked')
            }
        }
    });
}
getAddress();


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
    return false
});

//创建新选项
$('#query').on('click',function (e) {
    var js=$('#addressText').serializeArray();
    console.log(js);
    var j={};
    for (var i=0;i<js.length;i++){
        var k = js[i]['name'];
        if (!j[k]){
            j[k]=js[i]['value'];
        }else {
            j[k]=j[k]+(js[i]['value']);
        }
    }
    console.log(j);
    $.post('http://192.168.0.125:8081/genetell-rf/Ord/addAddress.do',j,function (data) {
       console.log(data);
        $('.mo').fadeOut("fast");
        $('#addressText')[0].reset();
        $('.addrassCase').html('');
        getAddress()
    });
    // var txt='<p> <input type="radio" name="address"/> <label>'+j+'</label> <a class="delete" href="#">删除</a> </p>';
    // $('.addrassCase').append(txt);
    // $('.mo').fadeOut("fast");
    // $('#addressText')[0].reset();
    if ( e && e.preventDefault ){
        e.preventDefault();
    } else{
        window.event.returnValue = false;
    }
    return false
});

//删除选项
$('.addrassCase').on('click','.delete', function () {
    var addrId=$(this).parent().attr('addr-id');
    var it=$(this);
    $.post('http://192.168.0.125:8081/genetell-rf/Ord/deleteAddress.do',{addr_id:addrId},
    function (data) {
        console.log(data);
        it.parent().remove()
    });
});

//返回详情
$('.backDetail').on('click',function (e) {
    location.reload();
    if ( e && e.preventDefault ){
        e.preventDefault();
    } else{
        window.event.returnValue = false;
    }
    return false
});





// 付款
$('#shopping').on('click',function () {
    var carIds=[];
    $('.order').each(function () {
        carIds.push($(this).attr('carId'))
    });
    carIds=carIds.join();
    console.log(carIds);
    $.post(
        'http://192.168.0.125:8081/genetell-rf/shoping/submitOrderCerten.do',
        {carIds:carIds},
        function (data) {
            location.href='http://192.168.0.125:8081/genetell-rf/alipayapi.jsp?WIDout_trade_no='+
                data.out_trade_no +
                '&WIDsubject='+
                data.subject +
                '&WIDtotal_fee='+
                data.total_fee+
                '&WIDbody=aaa';
        }
    )
});

