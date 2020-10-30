describe("MaiorEMenor", function() {

    it("deve entender numeros em ordem nao sequencial", function() {
        var algoritmo = new MaiorEMenor();
        algoritmo.encontra([5,15,7,9]);
        
        expect(algoritmo.pegaMaior()).toEqual(15);
        expect(algoritmo.pegaMenor()).toEqual(5);    
    });

    it("deve entender numeros em ordem crescente", function() {
        var algoritmo = new MaiorEMenor();
        algoritmo.encontra([1,3,9,11]);

        expect(algoritmo.pegaMaior()).toEqual(11);
        expect(algoritmo.pegaMenor()).toEqual(1);
    });

    it("deve entender numeros em ordem decrescente", function() {
        var algoritmo = new MaiorEMenor();
        algoritmo.encontra([11,9,6,5]);

        expect(algoritmo.pegaMaior()).toEqual(11);
        expect(algoritmo.pegaMenor()).toEqual(5);
    });

});