class Airport {
    static airportCode = "1"
    #planes
    constructor(name){
        this.name=name
        this.#planes=[]
    }

    getPlanes(){
        return this.#planes
    }

    addPlane(plane){
        this.#planes.push(plane)
    }

}

module.exports = Airport;