function main(){
    var exam1=parseInt(readLine(),10);
    var exam2=parseInt(readLine(),10);
    var exam3=parseInt(readLine(),10);

    console.log(Exams.average(exam1, exam2, exam3));
}

class Exams{
    constructor(x,y,z){
        this.x=x;
        this.y=y;
        this.z=z;
    }
    static average(x,y,z){
        const avg=(x+y+z)/3;
        return Math.round(avg);
    }
}