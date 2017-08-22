var Customer = function(parameters) {

	if (!parameters) {

		parameters = {
			name : '',
			address1 : '',
			address2 : '',
			city : '',
			state : '',
			zipcode : '',
			country : '',
			phone : '',
			email : '',
			ip : '1.1.1.1'
		};
	}
	this.name = parameters.name;
	this.address1 = parameters.address1;
	this.address2 = parameters.address2;
	this.city = parameters.city;
	this.state = parameters.state;
	this.zipcode = parameters.zipcode;
	this.country = parameters.country;
	this.phone = parameters.phone;
	this.email = parameters.email;
	this.ip = parameters.ip;

};

var Ccinfo = function(parameters) {
	if (!parameters) {

		parameters = {
			type : '',
			ccnum : '',
			cvv2 : '',
			expmonth : '',
			expyear : ''

		};
	}

	this.type = parameters.type;
	this.ccnum = parameters.ccnum;
	this.cvv2 = parameters.cvv2;
	this.expmonth = parameters.expmonth;
	this.expyear = parameters.expyear;

};

var Product = function(parameters) {
	if (!parameters) {
		parameters = {};
	}
		
	this.code = parameters.code;
	this.price = parameters.price;
	this.deliverydate = parameters.deliverydate;
	this.cardmessage = parameters.cardmessage;
	this.specialinstructions = parameters.specialinstructions;
	this.recipient = {};

};

var FLORISTONESERVICECHARGE = 14.99;
var prodPrice = context.getVariable("apigee.productPrice");

var Order = function(parameters) {
	if (!parameters) {
		parameters = {};
	}

	this.products = [];
	this.customer = {};
	this.ccinfo = {};

	this.customer.name = '';
	this.customer.address1 = '';
	this.customer.address2 = '';
	this.customer.city = '';
	this.customer.state = '';
	this.customer.zipcode = '';
	this.customer.country = '';
	this.customer.phone = '';
	this.customer.email = '';
	this.customer.ip = '';

	this.ccinfo.type = '';
	this.ccinfo.ccnum = 1234512345123455;
	this.ccinfo.cvv2 = '';
	this.ccinfo.expmonth = '';
	this.ccinfo.expyear = '';
	this.ordertotal = 134.89;

	if (parameters['customer']) {
		var customer = parameters.customer;

		this.customer.name = customer.name;
		this.customer.address1 = customer.address1;
		this.customer.address2 = customer.address2;
		this.customer.city = customer.city;
		this.customer.state = customer.state;
		this.customer.zipcode = customer.zipcode;
		this.customer.country = customer.country;
		this.customer.phone = customer.phone;
		this.customer.email = customer.email;
		this.customer.ip = customer.ip;

	}

	if (parameters['ccinfo']) {
		var ccinfo = parameters.ccinfo;

		this.ccinfo.type = ccinfo.type;
		this.ccinfo.ccnum = ccinfo.ccnum;
		this.ccinfo.cvv2 = ccinfo.cvv2;
		this.ccinfo.expmonth = ccinfo.expmonth;
		this.ccinfo.expyear = ccinfo.expyear;

	}

};

Order.prototype.addItem = function(Item) { // Add product to Order
	this.products.push(Item);
};

Order.prototype.placeOrder = function(callback) {
	var obj = new Object();

	obj['products'] = JSON.stringify(this.products);
	obj['customer'] = JSON.stringify(this.customer);
	obj['ccinfo'] = JSON.stringify(this.ccinfo);
	obj['ordertotal'] = JSON.stringify(this.ordertotal);

	console.log(JSON.stringify(obj));

	stringified = JSON.stringify(obj);

	httpJson.post(stringified, callback);

};

var total_item = ['T22-3A','T22-3A','T22-3A'];
var price_list =['59.95','59.95','59.95'];

for (var i = 0; i < total_item.length; i++) {
	
	
	product.cardmessage = "This is a card message";
	product.deliverydate = "2017-08-28";
	product.specialinstructions = "Special delivery instructions go here";
	product.code = total_item[i];
	product.price = price_list[i];

	
	product.recipient.name = "phil";
	product.recipient.institution = "House";
	product.recipient.address1 = "123 Big St";
	product.recipient.address2 = "";
	product.recipient.city = "Wilmington";
	product.recipient.state = "DE";
	product.recipient.country = "US";
	product.recipient.phone = '1234567890';
	product.recipient.zipcode = "19805";

	order.addItem(product);
}


