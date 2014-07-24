/// <reference path="~/jasmine/jasmine.js"/>
/// <reference path="~/jasmine/jasmine-html.js"/>
/// <reference path="~/jasmine/boot.js" />
/// <reference path="~/angular/angular.js" />
/// <reference path="~/angular/angular-mocks.js" />
/// <reference path="controllers.js" />
'use strict';

/* jasmine specs for controllers go here */
describe('PhoneCat controllers', function () {

    describe('controller', function () {
        it("should do something", function () { });
    });

    describe('PhoneListCtrl', function () {

        beforeEach(module('phonecatApp'));

        it('should create "phones" model with 3 phones', inject(function ($controller) {
            var scope = {},
                ctrl = $controller('PhoneListCtrl', { $scope: scope });

            expect(scope.phones.length).toBe(3);
        }));

    });

});
