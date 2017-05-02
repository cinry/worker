/**
 * Created by admin on 2017/4/14.
 */
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
});
$('.single').on('change',function () {
    var state=this.checked;
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
})