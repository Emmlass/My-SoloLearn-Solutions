/*
You are making a currency converter app. 
Create a function called convert, which takes two parameters: the amount to convert, and the rate, and returns the resulting amount.
The code to take the parameters as input and call the function is already present in the Playground. 
Create the function to make the code work. 

Sample Input:
100
1.1

Sample Output:
110

*/
function main() {
    var amount = parseFloat(readLine(), 10);
    var rate = parseFloat(readLine(), 10);
    function convert(amount,rate){
        return amount * rate;
    }
    console.log(convert(amount, rate));
}
