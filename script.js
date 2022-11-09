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
    obj.addItemToCart = function(name, price, count) {
        for(var item in cart) {
            if(cart[item].name === name) {
                cart[item].count ++;
                saveCart();
                return;
            }
        }

        var item = new Item(name, price, count);
        cart.push(item);
        saveCart();
    }

    // set count from item
    obj.setCountForItem = function(name, count) {
        for(var i in cart) {
            if (cart[i].name === name) {
                cart[i].count = count;
                break;
            }
        }
    };

    //removing item from cart 
    obj.removeItemFromCart = function(name) {
        for(var item in cart) {
            if(cart[item.name === name]) {
                cart[item].count --;
                if(cart[item].count === 0) {
                    cart.splice(item, 1);
                }
                break;
            }
    }
    saveCart();
    }

    //removing all items from cart 
    obj.removeItemFromCartAll = function(name) {
        for(var item in cart) {
            if(cart[item].name === name) {
                cart.splice(item, 1);
                break;
            }
        }
        saveCart();
    }

    // clearing the cart
    obj.clearCart = function() {
        cart = [];
        saveCart();
    }

})

