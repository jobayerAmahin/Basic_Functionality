function main(){
    var increase= parseInt(readLine(),10);
    var prices=[98, 15, 20,23];

    var u= new Array();

    for (i=0;i<prices.length;i++){
        var s=prices[i]+increase;
        u[i]=s;
    }
    console.log(u);
}