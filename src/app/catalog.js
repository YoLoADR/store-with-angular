"use strict";
var Catalog = (function () {
    function Catalog(_id, title, description, image, category) {
        this._id = _id;
        this.title = title;
        this.description = description;
        this.image = image;
        this.category = category;
    }
    return Catalog;
}());
exports.Catalog = Catalog;
//# sourceMappingURL=catalog.js.map