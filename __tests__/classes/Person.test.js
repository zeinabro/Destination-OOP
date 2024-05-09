const Person = require('../../classes/Person')
const { describe, it } = require('@jest/globals')

describe('person class',()=>{
    const person = new Person("Hoda","Sydney")

    it('has correct properties assigned',()=>{
        expect(person.name).toBe("Hoda")
        expect(person.destination).toBe("Sydney")
        expect(person.getBags()).toEqual([])
    })

    it('can add bag',()=>{
        const bag = {
            weight:10,
            id:2,
        }
        person.addBag(bag)
        expect(person.getBags()).toEqual([{
            weight:10,
            id:2,
        }])
    })
})