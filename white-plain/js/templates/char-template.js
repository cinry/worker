/**
 * Created by admin on 2017/4/14.
 */
var tplChar=`
    <div class="navHead">
        <div>
            <ol class="breadcrumb">
                <li><a href="mall.html#mallContent">基因说·{{title}}</a></li>
                <li><i class="backDetail">套餐详情</i></li>
                <li class="active">购物车</li>
            </ol>
        </div>
    </div>
{{#each this}}
<div class="container-fluid case" carId={{this.car_id}}>
    <input type="checkbox" class="single" checked="true"/>
    <div class="row">
        <div class="col-md-6">
            <div class="media">
                <div class="media-left media-middle">
                    <img class="media-object" src="img/mall/001.png" alt="...">
                </div>
                <div class="media-body media-middle">
                    <h4 class="media-heading">健康女神</h4>
                    <p>专门针对于女性群体设计的基因检测服务</p>
                    <h5>套餐分类：{{this.type}}套餐</h5>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="fload"></div>
            <div class="col-md-2">
                <p>单价</p>
                <p class="price">{{this.price}}</p>
            </div>
            <div class="col-md-4 text-center">
                <p>数量</p>
                <b class="jian">-</b>
                <input class="num" type="text" value={{this.quantity}} />
                <b class="jia">+</b>
            </div>
            <div class="col-md-2">
                <p>小计</p>
                <p class="totalPrice">{{this.pay_money}}</p>
            </div>
            <div class="col-md-4"><i class="deleteFromCar">删除</i></div>
        </div>
    </div>
</div>
{{/each}}
<div class="container-fluid case">
    <div class="row">
        <div class="col-md-6"><input type="checkbox" class="all" checked="true"/><label class="allText">取消全选</label></div>
        <div class="col-md-4">已选商品<span class="sum">1</span>件 总价：<span class="total">299</span>元</div>
        <div class="col-md-2">
            <button class="btn4" id="orders">结算</button>
        </div>
    </div>
</div>
<script src="js/char.js"></script>
<script src="js/templates/shopping-template.js"></script>
`;




