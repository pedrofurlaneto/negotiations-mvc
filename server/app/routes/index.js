var api = require('../api');

module.exports  = function(app) {
    app.route('/', (req, res) => res.send("Ok!"))
    app.route('/negociacoes/semana')
        .get(api.listaSemana);
        
    app.route('/negociacoes/anterior')
        .get(api.listaAnterior);
        
    app.route('/negociacoes/retrasada')
        .get(api.listaRetrasada);  
        
    app.route('/negociacoes')
        .post(api.cadastraNegociacao);          
};