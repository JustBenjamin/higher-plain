var shoppingCart = (function() {

    cart = [];


    //constructor
    function Item(name, price, count) {
        this.name = name;
        this.price = price;
        this.count = count;
    }

    //save cart 
    function saveCart() {
        sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
    }

    //Load cart 
    function loadCart() {
        cart = JSON.parse(sessionStorage.getItem('shoppingCart'))
        if (sessionStorage.getItem("shoppingCart") != null) {
            loadCart();
        }
    }

    // public methods

    var obj = {};

    //adding to cart 
    


})

