/*const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
*/
const passwordBox = document.getElementById("password")

const  length =12
const uppercase ="A,B,C,D,E,F,G,H,L,M,N,O,P,Q,R,S,T,U,V,X,Z,W";

const lowercase =" a,b,c,d,e,f,g,h,l,m,n,o,p.q.r.s.t.u.v.x.z.w";
const number = "0,1,2,3,4,5,6,7,8,9";
 const symbols =" @ # $ % & * ( ) _ + ! ~ } { : ? / < > ";
 const  allchars = lowercase+uppercase+number+symbols;
 
 
 function createpassword(){
     let password =" "
     password += uppercase[Math.floor((Math.random)()*uppercase.length)];
     password += lowercase[Math.floor(Math.random()*lowercase.length)];
     password += number[Math.floor(Math.random()*number.length)];
     password == symbols[Math.floor(Math.random()*symbols.length)];
     
    while(length > password.length){
        password += allchars[Math.floor(Math.random()*allchars.length)];
        
    }
    
    passwordBox.value=password;
   
 
 }
 
 function copypassword(){
     passwordBox.select();
     document.execCommand("copy");}
 





    





 



