/**
 * Created by admin on 2017/4/11.
 */

    $('.tab>a').on('click', function (e) {
        var state = $(this).attr('state');
        if (state == 'false') {
            $('.tab>a').attr('state', "false");
            $(this).attr('state', "true");
        }
        if ( e && e.preventDefault ){
            e.preventDefault();
        } else{
            window.event.returnValue = false;
        }
        return false
    });

//立即购买
    $('.buy').on('click', function (e) {
        if ( e && e.preventDefault ){
            e.preventDefault();
        } else{
            window.event.returnValue = false;
        }
        return false
    });

//加入购物车
    $('.add').on('click', function (e) {
        var product = $('.product').text();
        var tab = $('.tab>a[state="true"]>span').text();
        var price = $('.tab>a[state="true"]').text();
        var obj = {};
        obj.product = product;
        obj.tab = tab;
        obj.price = price;
        console.log(obj);
        if ( e && e.preventDefault ){
            e.preventDefault();
        } else{
            window.event.returnValue = false;
        }
        return false
    });



