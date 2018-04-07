

describe('Homepage', function()  {
    
    it('perform api',function(){
        browser.driver.get('http://localhost:4200/')

        exepect(element(by.id('title')).getText()).toEqual('COMO FUNCIONA');

     });

});