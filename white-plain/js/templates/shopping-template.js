/**
 * Created by admin on 2017/4/14.
 */
var tplShopping = `
     <div class="navHead">
        <div>
            <ol class="breadcrumb">
                <li><a href="mall.html#mallContent"></a></li>
                <li><i class="backDetail">套餐详情</i></li>
                <li class="active">结算</li>
            </ol>
        </div>
    </div>
    <div class="container-fluid case">
        <h4>确认收货地址</h4>
        <div class="row">
            <div class="col-md-1">寄送至</div>
            <div class="col-md-11 addrassCase"> 
            </div>
        </div>
        <a href="#" class="add">使用新地址</a>
    </div>
    {{#each this}}
    <div class="container-fluid case order" carId={{this.car_id}}>
        <h4>确认订单信息</h4>
        <div class="row">
            <div class="col-md-6">
                <div class="media">
                    <div class="media-left media-middle">
                        <img class="media-object" src="img/mall/001.png" alt="...">
                    </div>
                    <div class="media-body media-middle">
                        <h4 class="media-heading">{{this.goods_name}}</h4>
                        <p>专门针对于女性群体设计的基因检测服务</p>
                        <h5>套餐分类：{{this.type}}套餐</h5>
                    </div>
                </div>
            </div>
            <div class="col-md-6 disTable">
                <h5 class="disMiddle">￥{{this.price}}</h5>
            </div>
        </div>
    </div>
    {{/each}}
    <div class="container-fluid case">
        <div class="row">
            <div class="col-md-4 col-md-offset-6 total">已选商品1件 合计：299元</div>
            <div class="col-md-2">
                <button class="btn4" id="shopping">付款</button>
            </div>
        </div>
    </div>
    <div class="mo">
        <div class="box">
            <form id="addressText">
                <div class="form-group">
                    <label>姓名：</label>
                    <input type="text" class="form-control" name="shou_name"/>
                </div>
                <div class="form-group">
                    <label>联系电话：</label>
                    <input type="tel" class="form-control" name="shou_tel"/>
                </div>
                <div class="form-group">
                    <label>省：</label>
                    <select id="sheng" class="form-control" name="address"></select>
                </div>
                <div class="form-group">
                    <label>市：</label>
                    <select id="shi" class="form-control" name="address"></select>
                </div>
                <div class="form-group">
                     <label>区：</label>
                     <select id="qu" class="form-control" name="address"></select>
                </div>
                <div class="form-group">
                    <label>详细地址：</label>
                    <textarea class="form-control" name="address"></textarea>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <button class="btn myBtn2 pull-right" id="query">确&nbsp;&nbsp;&nbsp;&nbsp;认</button>
                    </div>
                    <div class="col-sm-6">
                        <button class="out btn myBtn2">取&nbsp;&nbsp;&nbsp;&nbsp;消</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
<script src="js/tools/china.js"></script>
<script src="js/tools/ganged.js"></script>
<script src="js/shopping.js"></script>
`;








