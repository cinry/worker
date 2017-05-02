/**
 * Created by admin on 2017/4/14.
 */
var tpl=`
    <div class="detailHead">
        <div>
            <ol class="breadcrumb">
                <li><a href="mall.html#mallContent">基因说·{{title}}</a></li>
                <li class="active">套餐详情</li>
            </ol>
        </div>
        <i class="jumpBuy">购物车</i>
    </div>
    <p class="getUp">为了方便您购买，请先登录<a href="#">立即登录</a></p>
    <div class="contentUp">
        <img src={{img1}}/>
        <div>
            <h5 class="product">基因说·{{title}}套餐</h5>
            <p>{{remark}}</p>
            <p>
                {{#with combo}}
                <span>{{0.price}}元-{{1.price}}元</span>
                {{/with}}
            </p>
            <h6>选择套餐分类</h6>
            <div class="tab">
                {{#with combo}}
                <a class="btn3" state="true" href="#"><span>{{0.name}}</span>{{0.price}}元</a>
                <a class="btn3" state="false" href="#"><span>{{1.name}}</span>{{1.price}}元</a>
                {{#if 2.name}}
                <a class="btn3" state="false" href="#"><span>{{2.name}}</span>{{2.price}}元</a>
                {{/if}}
                {{/with}}
            </div>
            <div>
                <a class="btn3 add" href="#">加入购物车</a>
                <a class="btn3 buy" href="#">立即购买</a>
            </div>
        </div>
    </div>
    <img class="img-responsive imgDetail" src={{img2}}>
    <h4 class="text-center">产品内容</h4>
    <p class="contentP">{{content}}</p>
    {{#each combo}}
    <h5 class="text-center">{{this.name}}</h5>
    {{#if this.group}}
    {{#each this.group}}
    <h6 class="text-center">{{option}}</h6>
    <div class="maxTable">
        {{#each item}}
        <div class="minTable">
            <table class="table table-striped">
                <thead>
                <th>产品编号</th>
                <th>项目名称</th>
                </thead>
                <tbody>
                {{#each this}}
                <tr>
                    <td>{{产品编号}}</td>
                    <td>{{项目名称}}</td>
                </tr>
                {{/each}}
                </tbody>
            </table>
        </div>
        {{/each}}
    </div>
    {{/each}}
    {{else}}
    <div class="maxTable">
        <table class="table table-striped">
            <thead>
            <th>产品编号</th>
            <th>项目名称</th>
            <th>Name</th>
            <th>检测基因</th>
            </thead>
            <tbody>
            {{#each this.item}}
            <tr>
                <td>{{产品编号}}</td>
                <td>{{项目名称}}</td>
                <td>{{name}}</td>
                <td>{{检测基因}}</td>
            </tr>
            {{/each}}
            </tbody>
        </table>
    </div>
    {{/if}}
    {{/each}}
    <script src="js/detail-template.js"></script>
    <script src="js/template/buy.js"></script>
`;



(function($){
    $.getUrlParam = function(name)
    {
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r!=null) return r[2]; return null;
    }
})(jQuery);
var url='data/'+$.getUrlParam('page')+'.json';
$.get(url,function (data) {
    var context=data;
    for (var i=0;i<context.combo.length;i++){
        if (context.combo[i].group){
            var oldArr=context.combo[i].group;
            oldArr.map(function (it,k) {
                var middle=Math.ceil((it.item.length)/2);
                var arr1=it.item.slice(0,middle+1);
                var arr2=it.item.slice(middle-1);
                var newArr=[arr1,arr2];
                context.combo[i].group[k].item=newArr
            })
        }
    }
    var template = Handlebars.compile(tpl);
    //匹配json内容
    var html = template(context);
    //输入模板
    $('body').html(html);
});