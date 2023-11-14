function main(){
    var iD= readLine();
    var p= parseInt(readLine(),10);
    var d= parseInt(readLine(),10);

    var prod1= new product(iD,p);
    console.log(prod1.pID + "price:"+ prod1.price);
    prod1.changePrice(d);
    console.log(prod1.pID+"new price: "+prod1.price)
}

function product(pID,price){
    this.pID=pID;
    this.price=price;
    this.changePrice=function(discount){
        this.price=price-(price*discount/100);
    }
}

