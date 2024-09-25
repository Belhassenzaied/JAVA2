//String Manipulation Functions:
//1)
function RString(str){
    var str2 = ""
for (i=str.length-1; i>=0; i--){
    str2= str2+ str[i]
}
return str2
}
//2)
function CString(str){
    var sum = 0
    do{
        i++
    }while(str[i] !==".")
        return i+1
}
//3)
function Maj(str){
    var Nstr = str[0].toUpperCase()
    for(i=0; i<str.length-1; i++){
        if(str[i]===""){
            Nstr=Nstr+str[i+1].toUpperCase()
        }else{
            Nstr=Nstr+str[i]
        }
    }
    return Nstr
}
//Array Functions:
//1)
function MinMax (Array){
    var min = Array[1]
    var max = Array[1]
    for (var i = 1; i < tab.length; i++) {
  
        if (tab[i] < min){
        return  min = tab[i]
        }else if(tab[i] > max){
            return  max = tab[i]
        }
      }
}
//2)
function sommeT(tab){
var somme = 0 
for(var i=0; i<tab.length; i++){
    somme+=tab[i]
  }
  return somme
}
//3)
function Filter(T){
    var type = ""
    for(var i=0; i<T.length; i++){
    type = typeof(T[i])
    }
    return type
}
//Mathematical Functions
//1)
function fact(n){
var f = 1
for(var i = 1;i<=n;i++){
    f = f * i
  }
  return(f)
}
//2)
function prime(n){
    var Ndiv =0
    for(var i=1; i<n; i++){
        if(n%i==0){
            Ndiv++
        }
    }
    if(Ndiv>1){
        return "Non prime"
    }else{
        return "prime"
    }
}