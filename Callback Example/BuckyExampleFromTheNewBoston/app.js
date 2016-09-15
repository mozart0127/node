/**
 * Created by zhehuang on 9/15/2016.
 */
function placeAnOrder(orderNumber)
{
    console.log("Customer order:", orderNumber);
    cookAndDeliverFood(function(){
        console.log("deliver food order:" ,orderNumber)
    })
}

//sumulate a 5 sencond opertion
function cookAndDeliverFood(callback){
    setTimeout(callback,5000);
}

//simulate users web request

placeAnOrder(1);

placeAnOrder(2);

placeAnOrder(3);

placeAnOrder(4);

placeAnOrder(5);

placeAnOrder(6);
