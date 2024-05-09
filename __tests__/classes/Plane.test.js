const Plane = require('../../classes/Plane')
const { describe, it } = require('@jest/globals')

describe('plane class',()=>{
    const plane = new Plane('MyPlane','London','Paris')

    it('has correct properties assigned',()=>{
        expect(plane.company).toBe('MyPlane')
        expect(plane.origin).toBe('London')
        expect(plane.destination).toBe('Paris')
        expect(plane.getPassengers()).toEqual([])
    })

    it('can add passenger',()=>{
        const passenger = {
            name:"Zeinab",
            destination:"Paris",
            bags: []
        }
        plane.addPassenger(passenger)
        expect(plane.getPassengers()).toEqual([{
            name:"Zeinab",
            destination:"Paris",
            bags: []
        }])
    })
})