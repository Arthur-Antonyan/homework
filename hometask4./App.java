public class App {
    public static void main(String[] args) {


 //hometask 1
        String [][] matrix = {{"*","*","*","*"},
                              {"*","*","*","*"},
                              {"*","*","*","*"},
                              {"*","*","*","*"}};

int len = matrix.length;
for(int i =0;i<len;i++){
    
    for(int j =0;j<matrix[i].length;j++){
        if(i>=j)                          
        System.out.print(matrix[i][j]+" ");
        
    }System.out.println();
}



//hometask 2  (doesn't work;just check the logic)

     

int [][] matrix = {{1,2,3},
                   {4,5,6},
                   {7,8,9}} ;
for(int i=0;i<matrix.length;i++){
    for (int j =0;j<matrix[i].length;j++){
       
        if(i+j>=matrix.length-1 && i>=j){
           
           System.out.println(matrix[i][j]);
        }System.out.println();
    
}
}

        //hometask 3


int[] arr = {1, 2, 3, -2, -6, -9, 10, 11};
int [] positive = new int [arr.length];
int [] negative = new int [arr.length];
        
for(int i =0; i<arr.length;i++){
    
    if(arr[i]>0){
        positive[i]=arr[i];
        System.out.println(positive[i]);
    }
    else if(arr[i]<0){
        negative[i]=arr[i];
            // System.out.println(negative[i]);
    }
          
            
}


//hometask4

String str = "The lorem ipsum gets  its name from the Latin phrase Neque porro quisquam est qui translates dolorem ipsum quia dolor sit amet. which  to “Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain.";
String [] arr = str.split(" ");
int max = 0;
for(int i =0;i<arr.length;i++){
    
    if(arr[i].length()>max){
        max = arr[i].length();
    }   
}
for(int i =0;i<arr.length;i++){   
        if(arr[i].length()==max){
            System.out.println(arr[i]);  
           }    
}



//hometask 5

 

int n = 10;
int [] arr = new int [n/2];
int [] newArr = new int [n];

for(int i = 0,j=-n;i<arr.length;i++,j++){
    arr[i] =j;
    newArr[i]=arr[i];
    newArr[arr.length+i]=Math.abs(arr[i]); 
}
for (int element:newArr) 
System.out.println(element);





//hometask 6

int [][] matrix = new int [5][5];

for(int i = 0; i<matrix.length;i++){
    for(int j =0; j<matrix[i].length;j++){
        matrix[i][j]=i-j;
        System.out.print(matrix[i][j]+" ");
    }System.out.println();
}
  

//hometask 7

int [][] matrix = {{0,22,3,48,5},
                  {2,13,5,23,9},
                  {4,46,7,33,5},
                  {1,14,8,44,67},
                  {6,10,3,45,5}};
int count = 0;
int sum =0;
int [] arrMin = new int [matrix.length];
int max = 0;  
int [] newArray = new int [matrix.length];


for(int i = 0;i<matrix.length;i++){
    
    for(int j=0;j<matrix[i].length;j++){

//hometask 7a

       if(matrix[i][j]>=10){             
           count+=1;
       }

  //  hometask7c
    
    if(i+j==matrix.length-1){            
        newArray[i]= matrix[i][j];
        System.out.println(newArray[i]);
    }
   
   // hometask 7d

        if(i<=j && matrix[i][j]% 2!=0){
            sum+=matrix[i][j];  
            
        }
        
     }
     
     
    
} 
System.out.println(count); //hometask 7a
System.out.println(sum);    //hometask7d       

///hometask 7b


    for(int i=0;i<matrix.length;i++){
    int min = matrix[0][i];
    for (int j=1;j<matrix[i].length;j++){
        
        if(matrix[j][i]<min){
            min=matrix[j][i];
        }
        arrMin[i]=min;
    
    }if(arrMin[i]>max){
        max=arrMin[i];
    }
}
System.out.println(max); //hometask7b







        
     }
     
 }



    
