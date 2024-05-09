class Bag {
    #owner
    constructor(weight,id){
        this.weight=weight
        this.id=id
        this.#owner=null
    }

    getOwner(){
        return this.#owner
    }

    assignOwner(owner){
        this.#owner=owner
    }

}


module.exports = Bag;