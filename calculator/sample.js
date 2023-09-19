function numbers(val){
    document.getElementById("demo2").value+=val 
}
function cdisply(){
    document.getElementById('demo2').value=""
}
function eql(){


     var a=document.getElementById('demo2').value
     var result=eval(a)
     document.getElementById('demo2').value=result
}


 