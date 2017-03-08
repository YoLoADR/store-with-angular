"use strict";
var catalog_1 = require('./catalog');
describe('Catalog', function () {
    it('should create an instance', function () {
        expect(new catalog_1.Catalog()).toBeTruthy();
    });
    it('should accept values in the constructor', function () {
        var catalog = new catalog_1.Catalog({
            _id: 1,
            title: 'Install Angular CLI',
            isDone: true
        });
        expect(catalog._id).toEqual(1);
        expect(catalog.title).toEqual('Install Angular CLI');
        expect(catalog.isDone).toEqual(true);
    });
});
//# sourceMappingURL=catalog.spec.js.map