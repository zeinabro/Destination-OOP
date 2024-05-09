class Person {
    #bags
    constructor(name,destination){
        this.name=name
        this.destination=destination
        this.#bags=[]
    }

    addBag(bag){
        bag.assignOwner(this)
        this.#bags.push(bag)
    }

    getBags(){
        return this.#bags
    }

}


module.exports = Person;