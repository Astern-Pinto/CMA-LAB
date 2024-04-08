function clearscreen(){
    document.getElementById("result").value="";
}
function DisplayValue(Value){
    document.getElementById("result").value+=Value;
}
function Calcuate()
{
    let p=document.getElementById("result").value;
    q=eval(p);
    document.getElementById("result").value=q;
     if(q=="Infinity")
     {
        window.alert("Division by Zero")
     }
    } 
