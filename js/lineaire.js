var btn;

btn=document.querySelector("#btn");


btn.addEventListener("click",function(){
    var a1,a2,a3,b1,b2,b3,c1,c2,c3,delta,d1,d2,d3;
   
             a1=parseFloat(document.querySelector("#a1").value);
             a2=parseFloat(document.querySelector("#a2").value);
             a3=parseFloat(document.querySelector("#a3").value);
             b1=parseFloat(document.querySelector("#b1").value);
             b2=parseFloat(document.querySelector("#b2").value);
             b3=parseFloat(document.querySelector("#b3").value);
             c1=parseFloat(document.querySelector("#c1").value);
             c2=parseFloat(document.querySelector("#c2").value);
             c3=parseFloat(document.querySelector("#c3").value);
             d1=parseFloat(document.querySelector("#d1").value);
             d2=parseFloat(document.querySelector("#d2").value);
             d3=parseFloat(document.querySelector("#d3").value);
             delta= ((a1*b2*c3)+(b1*c2*a3)+(c1*a2*b3))-((a3*b2*c1)+(b3*c2*a1)+(c3*a2*b1));
             if(delta==0)
             {
                 alert("pas de solution");
             }else{
                 
                var delta1,delta2,delta3,x,y,z;
                delta1=(((d1*b2*c3)+(b1*c2*d3)+(c1*d2*b3))-((d3*b2*c1)+(b3*c2*d1)+(c3*d2*b1)));
                delta2=(((a1*d2*c3)+(d1*c2*a3)+(c1*a2*d3))-((a3*d2*c1)+(d3*c2*a1)+(c3*a2*d1)));
                delta3=(((a1*b2*d3)+(b1*d2*a3)+(d1*a2*b3))-((a3*b2*d1)+(b3*d2*a1)+(d3*a2*b1)));
                x=delta1/delta;
                y=delta2/delta;
                z=delta3/delta;
               
                document.querySelector("#x").value="x="+x;
                document.querySelector("#y").value="y="+y;
                document.querySelector("#z").value="z="+z;
             }

})
var btn2;
btn2=document.querySelector("#ref");


btn2.addEventListener(
    "click",function(){
    document.querySelector("#a1").value="";
    document.querySelector("#a2").value="";
    document.querySelector("#a3").value="";
    document.querySelector("#b1").value="";
    document.querySelector("#b2").value="";
    document.querySelector("#b3").value="";
    document.querySelector("#c1").value="";
    document.querySelector("#c2").value="";
    document.querySelector("#c3").value="";
    document.querySelector("#d1").value="";
    document.querySelector("#d2").value="";
    document.querySelector("#d3").value="";
    document.querySelector("#x").value="";
    document.querySelector("#y").value="";
    document.querySelector("#z").value="";
}
    )



 
