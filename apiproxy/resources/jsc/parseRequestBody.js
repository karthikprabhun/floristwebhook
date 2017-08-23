
var json_data = JSON.parse(context.getVariable("request.content"));

var item1 = json_data.result.parameters.Item_1;
var item2 = json_data.result.parameters.Item_2;
var item3 = json_data.result.parameters.Item_3;

var context_loop = "";

for (var k = 0; context_loop != "product-in-context"; k++) {
    context_loop = json_data.result.contexts[k].name;
    context.setVariable("price_list", json_data.result.contexts[k].parameters.Price_list + '');
    context.setVariable("item_list", json_data.result.contexts[k].parameters.Item_list + '');
    if (json_data.result.contexts[k].parameters.Item_1) {
        context.setVariable("product_code", json_data.result.contexts[k].parameters.Item_1);
        /*context.setVariable("Price_no", "Price_01");
        context.setVariable("Item_no", "Item_01");*/
        // give if condition to check the context product-in-context
    } else if (json_data.result.contexts[k].parameters.Item_2) {
        context.setVariable("product_code", json_data.result.contexts[k].parameters.Item_2);
        /*context.setVariable("Price_no", "Price_02");
        context.setVariable("Item_no", "Item_02");*/
    } else {
        context.setVariable("product_code", json_data.result.contexts[k].parameters.Item_3);
        /*context.setVariable("Price_no", "Price_03");
        context.setVariable("Item_no", "Item_03");*/
    }

}
context.setVariable("existing_price", json_data.result.parameters.existing_item);
context.setVariable("existing_item", json_data.result.parameters.existing_price);

context.setVariable("item1", item1);
context.setVariable("item2", item2);
context.setVariable("item3", item3);


var action = json_data.result.action;
if (action == 'placeOrder') {
    context.setVariable("my.flow", action);
}else if (action == 'getproducts') {
    context.setVariable("my.flow", action);
} else if (action == '1st-Item') {
    context.setVariable("my.flow", action);
} else if (action == '2nd-Item') {
    context.setVariable("my.flow", action);
} else if (action == '3rd-Item') {
    context.setVariable("my.flow", action);

}