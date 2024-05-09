const Airport = require("../classes/Airport.js")
const { describe, it } = require("@jest/globals")

describe('airport class',()=>{
    const airport = new Airport("Heathrow Airport")

    it('correctly assigns variables',()=>{
        expect(airport.name).toBe("Heathrow Airport")
        expect(airport.getPlanes()).toEqual([])
        expect().toBe("1")
    })

    it('has correct airport code value',()=>{
        expect(Airport.airportCode).toBe("1")
    })

    it('can add planes',()=>{
        airport.addPlane('plane1')
        expect(airport.getPlanes()).toEqual(['plane1'])
        airport.addPlane('plane2')
        expect(airport.getPlanes()).toEqual(['plane1','plane2'])
    })

    it('')
})