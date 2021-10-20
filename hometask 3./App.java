public class App {
    public static void main(String[] args)  {

//hometask 1

let arr = [2,23,43,55,5,6];              
let max = arr[0];
let min = arr[0];
for (let i=1; i<arr.length; i++){
   if(arr[i]>max){
      max = arr[i]
   };
     
}

for (let i=1; i<arr.length; i++){
   if(arr[i]<min){
      min = arr[i]
   }
     
}console.log(max*min)

 //   hometask 2 a
let arr =[];
for (let i = -100; i<=100; i++){     
  arr[i]=i

   if (i%3 !==0){
      console.log(arr[i])
   }
   if(i>0){
      arr [i]=i;
      
      
   }
   
}


//hometask 2b
let arr =[];
for (let i = -100; i<=100; i++){     
  arr[i]=i
   console.log(arr[i])
}

//hometask 2c

let arr =[];
let count = 0;
for (let i = -100; i<=100; i++){     
   if(i<0){
      count+=1;
      
      
   }
}console.log(count)

//hometask 2d

let arr =[];
let count1 = 0;
let count2 = 0;
for (let i = -100; i<=100; i++){     
   if(i>0){
    a= count1+=i;
    b = count2+=1;
   };   
}

console.log(a/b) 
     

//hometask 2e

let arr =[];
let count = 0;
for (let i = 0; i<=100; i++){     
     arr[i]=i;
     if(arr.indexOf(i)%2!==0){
        count+=i
     
   
     }
}console.log(count)

//hometask 2f

let arr =[];
let count = 0;
for (let i = 0; i<=100; i++){     
     arr[i]=i;
     if(arr[i]%7==0){
      
      count+=arr.indexOf(i)
   
     }
}console.log(count)

 //hometask 3

let str = "abbe";
let arr = str.split("");             
let reverse = arr.reverse();
let newStr = reverse.join("")
if (Object.is(newStr,str)){
   alert (true)
}
else alert(false)
   
//hometask4

let str = "The lorem ipsum gets its name from the Latin phrase Neque porro quisquam est qui dolorem ipsum quia dolor sit amet. which translates to “Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain.”";
let arr = str.split(" ");
let  newArr =[];
for (let i = 1; i<arr.length;i=i+2){
   
   a=arr[i].toUpperCase()
   
   newArr[i]=arr[i-1] + " " +a;
  
}
newStr = newArr.join(" ")
console.log(newStr)
    
 }
}