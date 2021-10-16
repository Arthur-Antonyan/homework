public class App {
    public static void main(String[] args)  {


               //  //HOMETASK 1
               int a = 12;
               int b =8;
       
               //arithmetic operators
               System.out.println(a+b);
               System.out.println(a-b);
               System.out.println(a*b);
               System.out.println(a/b);
               System.out.println(a%b);
               System.out.println(a++);
               System.out.println(a--);
               System.out.println(++b);
               System.out.println(--b);
       
               //assignment operators
               System.out.println(a=b);
               System.out.println(a+=b);
               System.out.println(a-=b);
               System.out.println(a/=b);
               System.out.println(a*=b);
               System.out.println(a%=b);
               System.out.println(a&=b);
               System.out.println(a^=b);
               System.out.println(a|=b);
               System.out.println(a>>=b);
               System.out.println(a<<=b);
       
                //comparison operators
               System.out.println(a>b);
               System.out.println(a<b);
               System.out.println(a>=b);
               System.out.println(a<=b);
               System.out.println(a==b);
               System.out.println(a!=b);
       
               //logical operators
               System.out.println((a>5) && (b>7));
               System.out.println((a>5) || (b<7));
               System.out.println(!(a>5) && (b<7));
       
               //bitwise operators
               System.out.println(a|b);
               System.out.println(a^b);
               System.out.println(a&b);
               System.out.println(~b);
       
       
       
       
       
       
              //  //HOMETASK 2 
               
              
       
               int a=23;
               if(a % 3 == 0 && a % 5 == 0){
                   System.out.println(a +" " + "is divided to 3 and 5");
               }
               else System.out.println("the division can't be done");
       
       
       
              //  //HOMETASK 3
       
               int a = 3;
               int b = 4;
               int c = 5;
               if (a>b && a>c){
                   System.out.println(a);           //variant 1
               }else if (b>c){
                   System.out.println(b);
               }else System.out.println(c);
       
       
       
               int  result =   (a>b)  ? a: (b>c) ?  b:  c  ;      // variant 2
               System.out.println(result);
       
               
               System.out.println(Math.max(Math.max(a,b),c));       //variant 3
              
       
       
       
              //  //HOMETASK 4
       
       
       
               
               int a = 4;
               int b = 6;
               int result = 5;
       
       
               if(a>b){
               result *= (a-b);
               }else result *=(a+b);              //variant 1
               System.out.println(result);
       
       
               result = (a>b) ? (result *=(a-b)) : (result *= (a+b));    //variant 2
               System.out.println(result);
       
       
       
              //  //HOMETASK 5
       
       
               int a = 3;
               switch(a){
                   case 1:
                       System.out.println("monday");
                       break;
                   case 2:
                       System.out.println("tuesday");
                       break;
                    case 3:
                       System.out.println("wednesday");
                       break;
                   case 4:
                       System.out.println("thirsday");
                       break;
                   case 5:
                       System.out.println("friday");
                       break;
                   case 6:
                       System.out.println("sadurday");
                       break;
                   case 7:
                       System.out.println("sunday");
                       break;
                    default:
                    System.out.println("there is no such day");
                  }
       
               
          

           HOMETASK 6
       
          int n = 100;
          for(int i = 0; i<n; i++){
              if((i % 3 ==0) && (i%5 == 0)){
                  System.out.println(i);

              }
              
          } 

             
      // HOMETASK 7

          int n = 1284;
          int a = Math.round((n/100)%10);
          int b = Math.round(n/1000);
          int c = Math.round((n/10)%10);
          int d = Math.round(n%10);
          int result = a + b + c + d;
          if(result % 2 != 0 ){
          System.out.println("Oddish");

          }else{ System.out.println("Evenish");
      };


              // HOMETASK 8



              int n = 100;
          for(int i = n; i!=0; i--){
            
                  System.out.println(i);

              }


          //HOMETASK 9

          int n = 10;
          for(int i = 1; i<=n; i++){
              
                  System.out.println("7x" + i+ "=" + 7*i);

              
              
          } 
        
    }
}
