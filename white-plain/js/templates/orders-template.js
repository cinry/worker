/**
 * Created by admin on 2017/4/26.
 */
var tplOrders=`
    <div class="navlHead">
        <div>
            <ol class="breadcrumb">
                <li class="active">我的订单</li>
            </ol>
        </div>
    </div>
    {{#each this}}
    <div class="container-fluid case">
    <p>订单号：{{this.out_trade_no}}</p>
        <div class="row">
            <div class="col-md-6">
                <div class="media">
                    <div class="media-left media-middle">
                        <img class="media-object" src="img/mall/001.png" alt="...">
                    </div>
                    <div class="media-body media-middle">
                        <h4 class="media-heading">{{this.order_name}}</h4>
                        <p>专门针对于女性群体设计的基因检测服务</p>
                        <h5 class="blue">套餐分类：A套餐</h5>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="col-md-3">
                    <p><del>299</del><br/><span class="blue">{{this.price}}</span></p>
                </div>
                <div class="col-md-4">
                    <p><span class="blue">正在寄送中</span><br/>订单详情</p>
                </div>
                <div class="col-md-5">
                    <p>物流公司<br/>物流单号</p>
                </div>
            </div>
        </div>
    </div>
    {{/each}}
`;

$.post('http://192.168.0.125:8081/genetell-rf/Ord/findAllOrder.do',function (data) {
    var context=data.result;
    var template = Handlebars.compile(tplOrders);
    //匹配json内容
    var txt = template(context);
    //输入模板
    $('body').html(txt);
});