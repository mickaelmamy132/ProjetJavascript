var btn;

btn=document.querySelector("#btn");


btn.addEventListener("click",function(){
    var a,b,c,x1,x2;
    a=document.querySelector("#a").value;
    b=document.querySelector("#b").value;
    c=document.querySelector("#c").value;
    if (a=="" || b=="" || c=="") {
        alert('Veuillez completer les champs ')
    }else{
        if(isNaN(parseFloat(a)) || isNaN(parseFloat(b)) || isNaN(parseFloat(c))){
            alert("entrer uniquement des nombres")
        }else{
            if(parseFloat(a)==0){
                x1=-parseFloat(c)/parseFloat(b);
                document.querySelector("#x1").value="x="+x1;
                document.querySelector("#x2").value="x2=?";
                document.querySelector("#delta").value="delta=?";
            }else{
                var delta=parseFloat(b)*parseFloat(b)-(4*parseFloat(a)*parseFloat(c))
                document.querySelector("#delta").value="delta="+delta;
                if(delta>0){
                    var racineDelta=Math.sqrt(delta);
                    x1=(-parseFloat(b)-racineDelta)/(2*parseFloat(a));
                    x2=(-parseFloat(b)+racineDelta)/(2*parseFloat(a))
                    document.querySelector("#x1").value="x1="+x1;
                    document.querySelector("#x2").value="x2="+x2;
                }else if(delta==0){
                    x1=x2=(-parseFloat(b))/(2*parseFloat(a));
                    document.querySelector("#x1").value="x1=x2="+x1;
                    document.querySelector("#x2").value="x2=?";
                }else{
                    alert("pas de solution")
                }
            }
        
        }
    }
});
var btn2;
btn2=document.querySelector("#init");


btn2.addEventListener(
    "click",function(){
    document.querySelector("#a").value="";
    document.querySelector("#b").value="";
    document.querySelector("#c").value="";
    document.querySelector("#delta").value="";
    document.querySelector("#x1").value="";
    document.querySelector("#x2").value="";}
    )