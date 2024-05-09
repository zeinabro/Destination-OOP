import Bag from "../../classes/Bag";
import { describe, it } from '@jest/globals'

describe('bag class',()=>{
    const bag = new Bag(10,1)

    it('has correct properties',()=>{
        expect(bag.weight).toBe(10)
        expect(bag.id).toBe(1)
        expect(bag.getOwner()).toBe(null)
    })

    it('can assign new owner',()=>{
        bag.assignOwner("Hoda")
        expect(bag.getOwner()).toBe("Hoda")
    })
})