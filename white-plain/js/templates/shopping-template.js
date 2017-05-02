/**
 * Created by admin on 2017/4/14.
 */
var tpl=`
    <div class="head">
        <h2>结算</h2>
    </div>
    <div class="container-fluid case">
        <h4>确认收货地址</h4>
        <div class="row">
            <div class="col-md-1">寄送至</div>
            <div class="col-md-11 addrassCase">
                <p><input type="radio" name="address"/><label>湖北省武汉市武昌区</label><a class="delete" href="#">删除</a></p>
            </div>
        </div>
        <a href="#" class="add">使用新地址</a>
    </div>
    {{#each this}}
    <div class="container-fluid case">
        <h4>确认订单信息</h4>
        <div class="row">
            <div class="col-md-6">
                <div class="media">
                    <div class="media-left media-middle">
                        <img class="media-object" src="img/mall/健康女神.png" alt="...">
                    </div>
                    <div class="media-body media-middle">
                        <h4 class="media-heading">健康女神</h4>
                        <p>专门针对于女性群体设计的基因检测服务</p>
                        <h5>套餐分类：A套餐</h5>
                    </div>
                </div>
            </div>
            <div class="col-md-6 disTable">
                <h5 class="disMiddle">￥299</h5>
            </div>
        </div>
    </div>
    {{/each}}
    <div class="container-fluid case">
        <div class="row">
            <div class="col-md-4 col-md-offset-6 total">已选商品1件 合计：299元</div>
            <div class="col-md-2">
                <button class="btn4">付款</button>
            </div>
        </div>
    </div>
    <div class="mo">
        <div class="box">
            <form id="addressText">
                <div>
                    姓名：<input type="text" name="name"/>
                </div>
                <div>
                    联系电话：<input type="tel" name="tel"/>
                </div>
                <div>
                    <select id="sheng" name="sheng"></select>
                    <select id="shi" name="shi"></select>
                    <select id="qu" name="qu"></select>
                </div>
                <div>
                    详细地址：<textarea name="content"></textarea>
                </div>
                <button id="query">确认</button>
                <button class="out">取消</button>
            </form>
        </div>
    </div>
<script src="js/china.js"></script>
<script src="js/ganged.js"></script>
<script src="js/addAddress.js"></script>
`;



$('#orders').click(function () {
    //预编译模板
    var template = Handlebars.compile(tpl);
//模拟json数据
    var context = [{},{},{},{}];
//匹配json内容
    var html = template(context);
//输入模板
    $('body').html(html);
});

$('.jumpDetail').on('click',function (e) {
    var list=$('.jumpDetail').index($(this))+1;
    open('测试.html?page='+list);
    if ( e && e.preventDefault ){
        e.preventDefault();
    } else{
        window.event.returnValue = false;
    }
    return false
})




