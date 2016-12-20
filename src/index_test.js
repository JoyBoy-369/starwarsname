var expect = require('chai').expect;
var starWars = require('./index')

describe('starwarsname', function () {
    describe('all', function () {
        it('array of strings', function () {
            expect(starWars.all).to.satisfy(isArrayOfStrings);

            function isArrayOfStrings(array) {
                return array.every(function (item) {
                    return typeof item === 'string';
                })
            }
        })

        it('should contain oluke skywalker', function () {
            expect(starWars.all).to.include('Luke Skywalker');
        })
    })

    describe('random', function () {
        it('should contain random', function () {
            var randomItem = starWars.random();
            expect(starWars.all).to.include(randomItem);
        })

        it('should return a random number of items given a number', function () {
            var randomItems = starWars.random(3);
            randomItems.forEach(function (item) {
                expect(starWars.all).to.include(item);
            })
        })
    })
})