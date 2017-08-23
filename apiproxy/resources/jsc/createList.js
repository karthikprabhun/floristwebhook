function makeList() {
    var ep = context.getVariable("existing_price");
    var ei = context.getVariable("existing_item");

    var PP = context.getVariable("apigee.productPrice");
    var PC = context.getVariable("product_code");

    var price_list = context.getVariable("price_list") + '';
    var item_list = context.getVariable("item_list") + '';

    if (ep == 0 && ei == 0) {
        price_list = [], item_list = [];
        price_list.push(PP);
        item_list.push(PC);
        print(PP)
    } else {
        price_list = [price_list], item_list = [item_list];
        price_list.push(PP);
        item_list.push(PC);

    }

    context.setVariable("existing_price_list", price_list + '');
    context.setVariable("existing_item_list", item_list + '');
}
makeList();