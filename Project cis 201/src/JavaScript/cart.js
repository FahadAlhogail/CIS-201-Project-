var order_list = new Array();
  function add(x){
    order_list.push(x);
    var y = "1";
    document.getElementById('cart').style.backgroundImage = "url(../src/imgs/cart2.jpg)";
    var item_count = document.getElementById("items-No").textContent;
    var value = item_count + "+"+y;
    document.getElementById("items-No").innerHTML = eval(value);
  }
