var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var fileTypes = {
    "360 VR Experience": "file",
    "App Builder Extension": "file",
    "Application": "file",
    "ArcGIS Pro Add In": "file",
    "ArcGIS Pro Configuration": "file",
    "ArcPad Package": "file",
    "CAD Drawing": "file",
    "CSV": "file",
    "CSV Collection": "file",
    "CityEngine Web Scene": "file",
    "Code Sample": "file",
    "Dashboard": "file",
    "Desktop Add In": "file",
    "Desktop Application": "file",
    "Desktop Application Template": "file",
    "Desktop Style": "file",
    "Document Link": "file",
    "Explorer Add In": "file",
    "Explorer Layer": "file",
    "Explorer Map": "file",
    "Feature Collection": "file",
    "Feature Service": "file",
    "File Geodatabase": "file",
    "GeoJson": "file",
    "Geocoding Service": "file",
    "Geodata Service": "file",
    "Geometry Service": "file",
    "Geoprocessing Package": "file",
    "Geoprocessing Sample": "file",
    "Geoprocessing Service": "file",
    "Globe Document": "file",
    "Globe Service": "file",
    "Image": "file",
    "Image Collection": "file",
    "Image Service": "file",
    "Insights Workbook": "file",
    "KML": "file",
    "KML Collection": "file",
    "Layer": "file",
    "Layer Package": "file",
    "Layout": "file",
    "Locator Package": "file",
    "Map Document": "file",
    "Map Package": "file",
    "Map Service": "file",
    "Map Template": "file",
    "Microsoft Excel": "file",
    "Microsoft Powerpoint": "file",
    "Microsoft Word": "file",
    "Mobile Application": "file",
    "Mobile Basemap Package": "file",
    "Mobile Map Package": "file",
    "Network Analysis Service": "file",
    "Operations Dashboard Add In": "file",
    "Operations Dashboard Extension": "file",
    "PDF": "file",
    "Pro Map": "file",
    "Project Package": "file",
    "Project Template": "file",
    "Published Map": "file",
    "Raster function template": "file",
    "Rule Package": "file",
    "Scene Document": "file",
    "Scene Package": "file",
    "Scene Service": "file",
    "Service Definition": "file",
    "Shapefile": "file",
    "Stream Service": "file",
    "Task File": "file",
    "Visio Document": "file",
    "WFS": "file",
    "WMS": "file",
    "WMTS": "file",
    "Windows Mobile Package": "file",
    "Windows Viewer Add In": "file",
    "Workflow Manager Service": "file",
    "iWork Keynote": "file",
    "iWork Numbers": "file",
    "iWork Pages": "file",
    "Form": "file",
    "Workforce Project": "file"
};
exports.default = __assign({}, fileTypes, { "Web Map": "webmap", "Web Mapping Application": "webapp", "Web Scene": "webscene", "Dashboard": "webapp" });
//# sourceMappingURL=supportedItemTypes.js.map