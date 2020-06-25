let homePage = function(){


// Declare object

let firstNumber = element(by.model('first'));
let secondNumber = element(by.model('second'));
let  submitButton = element(by.css('[ng-click="doAddition()"]'));
let  outputValue = element(by.css('h2.ng-binding'));
let res=0 ;
let res1="";

    this.GetUrl = function(url){
    browser.get(url); 

    };

    this.EnterFirstNumber = function(firstValue){
    firstNumber.sendKeys(firstValue);
    res= parseInt(firstValue);
    };

    this.EnterSecondNumber =function(secondValue){
      secondNumber.sendKeys(secondValue)  
      res+= parseInt(secondValue); 

    };
    
    this.GoClick = function(){
     submitButton.click();

    };
  
    this.VerifyValue = function(){
      // let value= firstValue+secondValue;
        res1 = outputValue.getText();
        expect(res1).toEqual(res.toString());
       // console.log("The res1 is " ,outputValue.getText());
       // console.log("The res value is ",res);

    };
    
    this.SumValue = function(){
      //  console.log("the function sumvalue res1",res1);
        console.log("The Total Sum of Value is :",res);
    };

};
module.exports = new homePage();