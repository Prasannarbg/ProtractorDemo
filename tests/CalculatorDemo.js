var homepage = require('../POM/homePage');

describe('Demo of Calcultor', function(){

    it('Addition test',function(){
     
       // browser.get("https://juliemr.github.io/protractor-demo/");
      //  element(by.model('first')).sendKeys('2');
       // element(by.model('second')).sendKeys('3');
       // element
       
       homepage.GetUrl('https://juliemr.github.io/protractor-demo/');
       homepage.EnterFirstNumber('104');        
       homepage.EnterSecondNumber('14');
       homepage.GoClick();
       homepage.VerifyValue();
       homepage.SumValue();


    });
    it('Addition Failed test',function(){
     
        // browser.get("https://juliemr.github.io/protractor-demo/");
       //  element(by.model('first')).sendKeys('2');
        // element(by.model('second')).sendKeys('3');
        // element
        
        homepage.GetUrl('https://juliemr.github.io/protractor-demo/');
        homepage.EnterFirstNumber('104');        
        homepage.EnterSecondNumber('14');
        homepage.GoClicked();
        homepage.VerifyValue();
        homepage.SumValue();
 
 
     });

});