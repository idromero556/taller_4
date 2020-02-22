describe('Los estudiantes under monkeys', function() {
    it('visits los estudiantes and survives monkeys', function() {
        cy.visit('https://losestudiantes.co');
        cy.contains('Cerrar').click();
        //cy.contains('Ingresar').click();
        cy.wait(1000);
        randomEvent(10);
    })
})
function randomClick(monkeysLeft) {

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    var monkeysLeft = monkeysLeft;
    if(monkeysLeft > 0) {
        cy.get('a').then($links => {
            var randomLink = $links.get(getRandomInt(0, $links.length));
            if(!Cypress.dom.isHidden(randomLink)) {
                cy.wrap(randomLink).click({force: true});
                monkeysLeft = monkeysLeft - 1;
            }
            cy.wait(1000);
            randomClick(monkeysLeft);
        });
    }   
}
function randomEvent(eventsLeft){

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };
    var c= getRandomInt(1,4);
    var eventsLeft = eventsLeft;
    

    if(eventsLeft>0){
        if(c==1){

            cy.get('a').then($links => {
                var randomLink = $links.get(getRandomInt(0, $links.length));
                if(!Cypress.dom.isHidden(randomLink)) {
                    cy.wrap(randomLink).click({force: true});
                    eventsLeft = eventsLeft - 1;
                }
                cy.wait(1000);
                randomEvent(eventsLeft);
            });
        }; if(c==2){
            cy.get('input').then($inputs=>{
                var randomInput=$inputs.get(getRandomInt(0, $inputs.length));
                if(!Cypress.dom.isHidden(randomInput)) {
                    cy.wrap(randomInput).click({force: true}).type("ABCD",{force: true});
                    eventsLeft = eventsLeft - 1;
                }
                cy.wait(1000);
                randomEvent(eventsLeft);

            });
        }; if(c==3){
            cy.get('body').then(($body) => {
                if ($body.find('select').length) {
                    cy.get('select').then($selects=>{
                        var randomSelect=$selects.get(getRandomInt(0, $selects.length));
                        if(!Cypress.dom.isHidden(randomSelect)) {
                            cy.wrap(randomSelect).trigger('change',{force:true});
                            eventsLeft = eventsLeft - 1;
                        }
                        cy.wait(1000);
                        randomEvent(eventsLeft);
                    });
                }else{cy.wait(1000);
                randomEvent(eventsLeft);}
            });
            
            
        }; if(c==4){
            cy.get('button').then($button =>{
                var randomBtn = $button.get(getRandomInt(0, $button.length));
                if(!Cypress.dom.isHidden(randomBtn)){
                    cy.wrap(randomBtn).click({force:true});
                    eventsLeft = eventsLeft - 1;
                }
                cy.wait(1000);
                randomEvent(eventsLeft);
            });
        }
    }
}