var requestVerb = context.getVariable("request.verb");
context.setVariable("requestVerb",requestVerb);
var json = JSON.parse(context.getVariable("request.content"));
//context.setVariable("product_code",json.result.contexts[3].parameters.Products[0]);//enable this during sending call to order product
//var item_code =json.result.contexts[1].parameters.Item_1;
var item1 = json.result.parameters.Item_1;
var item2 = json.result.parameters.Item_2;
var item3 = json.result.parameters.Item_3;

var context_loop ="";

for(var k = 0;context_loop != "product-in-context";k++){
    context_loop = json.result.contexts[k].name;
    context.setVariable("price_list",json.result.contexts[k].parameters.Price_list +'');
    context.setVariable("item_list",json.result.contexts[k].parameters.Item_list+'');
}
context.setVariable("existing_price",json.result.parameters.existing_item);
context.setVariable("existing_item",json.result.parameters.existing_price);
/*context.setVariable("price_list",json.result.contexts[k].parameters.Price_list);
context.setVariable("item_list",json.result.contexts[k].parameters.Item_list);*/

context.setVariable("item1",item1);
context.setVariable("item2",item2);
context.setVariable("item3",item3);

if(json.result.contexts[1].parameters.Item_1){
context.setVariable("product_code",json.result.contexts[1].parameters.Item_1);
context.setVariable("Price_no","Price_01");
context.setVariable("Item_no","Item_01");
// give if condition to check the context product-in-context
}else if(json.result.contexts[1].parameters.Item_2 ){ 
context.setVariable("product_code",json.result.contexts[1].parameters.Item_2);
context.setVariable("Price_no","Price_02");
context.setVariable("Item_no","Item_02");
}else{
context.setVariable("product_code",json.result.contexts[1].parameters.Item_3);
context.setVariable("Price_no","Price_03");
context.setVariable("Item_no","Item_03");
}

var action = json.result.action;
var path = context.getVariable("proxy.pathsuffix");
if(action == 'placeOrder'){
var newPath = context.getVariable("proxy.pathsuffix");

//context.setVariable("target.copy.pathsuffix", '/'+action);
context.setVariable("my.flow",action);
}else if(action == 'getproducts'){
/*context.setVariable("proxy.pathsuffix", '/'+action);
context.setVariable("api.ai.action", action);  */
//context.setVariable("proxy.pathsuffix", '/'+action);
context.setVariable("my.flow",action);
}else if(action == '1st-Item'){
    context.setVariable("my.flow",action);
   
}else if(action == '2nd-Item'){
    context.setVariable("my.flow",action);
   
}else if(action == '3rd-Item'){
    context.setVariable("my.flow",action);
   
}

