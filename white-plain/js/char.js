/**
 * Created by admin on 2017/4/14.
 */

$('.breadcrumb li a').eq(0).text();
count($('.all'));
//全选
$('.all').on('change',function () {
    if(this.checked===true){
        $('.allText').text('取消全选');
        $('.single').each(function () {
            this.checked=true
        })
    }else {
        $('.allText').text('全选');
        $('.single').each(function () {
            this.checked=false
        })
    }
    count($(this));
});

// 单个选项
$('.single').on('change',function () {
    var state = this.checked;
    var num=1;
    var all=document.getElementsByClassName('all')[0];
    if (state===true){
        $('.single').each(function () {
            if (this.checked != state) {
                num=0
            }
        });
        if (num===1){
            $('.allText').text('取消全选');
            all.checked=state
        }
    }else {
        all.checked = false;
        $('.allText').text('全选');
    }
    count($(this));
});


// 数量
$('.num').on('input propertychange',function () {
    if(isNaN($(this).val())){
        $(this).val(1);
    }
    count($(this));
});
$(".jian").click(function(){
    var lsoek=$(this).parent().find(".num");
    if(lsoek.val()>1){
        var lskoe=parseInt(lsoek.val());
        lsoek.val(lskoe-1);
    }
    count($(this));
});
$('.jia').click(function () {
    var lsoek=$(this).parent().find(".num");
    var lskoe=parseInt(lsoek.val());
    lsoek.val(lskoe+1);

    count($(this));
});

// 删除商品
$('.deleteFromCar').on('click',function () {
    var it=$(this).parents('.case');
    var carId=it.attr('carId');
    $.post('http://192.168.0.125:8081/genetell-rf/shoping/deleteFromCar.do',{carIds:carId},function (data) {
        console.log(data);
        if (data.msg==='删除成功') {
            it.remove();
            count.bind($(this))();
        }
    })
});

// 计算
function count(it) {
    var num = it.parent().find('.num').val();
    var price = it.parent().prev().find('.price').text();
    var sum=0;
    var total=0;
    if (it.parent().next().children('.totalPrice').length > 0) {
        it.parent().next().find('.totalPrice').text(num * price);
    }
    $('.single:checked').parent().find('.num').each(function () {
        sum += Number($(this).val());
        total +=Number($(this).parent().next().find('.totalPrice').text())
    });
    $('.sum').text(sum);
    $('.total').text(total)

}



// 返回详情
$('.backDetail').on('click',function (e) {
    location.reload();
    if ( e && e.preventDefault ){
        e.preventDefault();
    } else{
        window.event.returnValue = false;
    }
    return false
});

// 付款页面加载
$('#orders').click(function () {
    var carIds = [];
    var count=[];
    $('.single:checked').each(function () {
        carIds.push($(this).parent().attr('carId'));
        count.push($(this).parent().find('.num').val())
    });
    if (carIds.length > 0) {
        carIds = carIds.join();
        count=count.join();
        console.log(carIds+'+'+count);
        $.ajax({
            type: 'post',
            url: 'http://192.168.0.125:8081/genetell-rf/shoping/orderCerten.do',
            data: {id: carIds,count:count},
            success: function (data) {
                console.log(data);
                //预编译模板
                var template = Handlebars.compile(tplShopping);
                //模拟json数据
                if (data.msg==='查询成功') {
                    var context = data.result;
                    //匹配json内容
                    var html = template(context);
                    //输入模板
                    $('body').html(html);
                }
            }
        })
    }else {
        alert('请选择商品');
    }
});