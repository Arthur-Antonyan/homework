import java.util.Arrays;

public class App {
    public static void main(String[] args) {
        
        //hometask 1

int arr [] = {2,23,43,55,60,6};   
int max = arr[0];
int min = arr[0]; 
for (int i=1; i<arr.length; i++){
   if(arr[i]>max){
      max = arr[i];
   } 
   if(arr[i]<min){
          min = arr[i];
       }       
}      
System.out.println(min*max);



//hometask 2

int size = 201;
int arr[] =new int [size];
int count = 0;
int count1=0;
int count2=0;
int count3 = 0;
int count4=1;

for (int i = 0, j=-100; i<arr.length; i++, j++){     //hometask 2a
  arr[i]=j;

   if (j%3 !=0){                                    //hometask 2b
    //   System.out.println(j);
        if(j<0){                                    //hometask 2c
            count+=1; 
        }

        if(j>0){                                    //hometask 2d
            count1+=j;
            count2+=1;
              
        } 
      
         if(arr[i] %2!=0){                        //hometask 2e
            count3+=j;
        }
     
        if(j%7==0){                              //hometask 2f
            count4*=i;
           
            
        }       
           
             
   }
   
   
}
System.out.println(count); //hometask 2c 
System.out.println(count1/count2);  //hometask 2d
System.out.println(count3); //hometask 2e
System.out.println(count4); //hometask 2f

  

//hometask 3

String str= "abba";
char [] arr = str.toCharArray();
for( int i =0; i<arr.length/2;i++){
    char temp = arr[i];
    arr[i] = arr[arr.length-1-i];
    arr[arr.length-1-i] = temp;
}
String newStr = new String(arr);
System.out.println(str.equals(newStr));
  



//hometask 4


String str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";

//hometask 4a

String [] arr = str.split(" ");
String  newStr = new String ();
for (int i = 1; i<arr.length;i=i+2){
newStr=arr[i-1] + " " + " " + arr[i].toUpperCase() + " ";
System.out.print(newStr);
}


//hoematsk 4b


int sum = 0;
char check = 'a';
for (int i = 0; i<str.length();i++){
    if(str.charAt(i) ==check){
        sum+=1; 
    }
    
    }System.out.println(sum);
    
    
    

// hometask 4c
String newStr = " ";

newStr = str.replace(str.substring(str.indexOf("consectetur"),str.indexOf("sed")), " ");

System.out.println(newStr);



    }
}
