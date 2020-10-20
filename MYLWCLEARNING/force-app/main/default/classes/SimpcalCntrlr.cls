public class SimpcalCntrlr{
    public Integer number1{get;set;}
    public Integer number2{get;set;}
    public String result{get;set;}

    public void add(){
        Integer ans;
        ans = number1 + number2;
        //ans = (String) ans;String.valueOf(UserId)
        result = 'Result : ' + String.valueOf(ans );
        System.debug(result);
        }
        
    public void substract(){
        Integer ans;
        ans= number1 - number2;
        result = 'Result : ' + String.valueOf(ans );
        }
        
    public void multiply(){
        Integer ans;
        ans= number1 * number2;
        result = 'Result : ' + String.valueOf(ans );
        }
        
    public void divide(){
        Integer ans;
        ans= number1 / number2;
        result = 'Result : ' + String.valueOf(ans );
        }
}