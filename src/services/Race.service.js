module.exports = {
    async findAll() {
        const url = 'http://dnd5eapi.co/api/races/';
        const rawResponse = await fetch(url);
        const races = await rawResponse.json();
        return races;
    },
    
    async findById(id) {
        const url = `http://dnd5eapi.co/api/races/${id}`
        const rawResponse = await fetch(url); 
        const race = await rawResponse.json();
        return race;
    }
}
