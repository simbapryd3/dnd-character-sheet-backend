// global.fetch = require('node-fetch');

module.exports = {
    async findAll() {
        try {
            const options = { method: "GET", headers: {"Accept": "application/json"}}
            const url = 'http://dnd5eapi.co/api/races/';
            const rawResponse = await fetch(url, options);
            const races = await rawResponse.json();
            return races;

        } catch (err) {
            return err
        }
    },
    
    async findById(id) {
        const url = `http://dnd5eapi.co/api/races/${id}`
        const rawResponse = await fetch(url); 
        const race = await rawResponse.json();
        return race;
    }
}
