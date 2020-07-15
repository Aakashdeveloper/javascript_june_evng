7557

var palindrome = (data) => {
    var rem,temp,final=0;
    temp=data;
    while(data>0){
        rem = data%10;
        data=parseInt(data/10)
        final = final*10+rem
    }
    if(final == temp ){
        console.log("Nmber is palindrome")
    }else{
        console.log("Nmber is not a palindrome")
    }
}

palindrome(8877)
VM769:12 Nmber is not a palindrome
undefined
palindrome(887788)
VM769:10 Nmber is palindrome