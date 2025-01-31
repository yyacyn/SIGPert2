var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_UntitledspreadsheetSheet11_1 = new ol.format.GeoJSON();
var features_UntitledspreadsheetSheet11_1 = format_UntitledspreadsheetSheet11_1.readFeatures(json_UntitledspreadsheetSheet11_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UntitledspreadsheetSheet11_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UntitledspreadsheetSheet11_1.addFeatures(features_UntitledspreadsheetSheet11_1);
var lyr_UntitledspreadsheetSheet11_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UntitledspreadsheetSheet11_1, 
                style: style_UntitledspreadsheetSheet11_1,
                popuplayertitle: 'Untitled spreadsheet - Sheet1 (1)',
                interactive: true,
                title: '<img src="styles/legend/UntitledspreadsheetSheet11_1.png" /> Untitled spreadsheet - Sheet1 (1)'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_UntitledspreadsheetSheet11_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_UntitledspreadsheetSheet11_1];
lyr_UntitledspreadsheetSheet11_1.set('fieldAliases', {'lintang': 'lintang', 'bujur': 'bujur', 'nama': 'nama', });
lyr_UntitledspreadsheetSheet11_1.set('fieldImages', {'lintang': 'TextEdit', 'bujur': 'TextEdit', 'nama': 'TextEdit', });
lyr_UntitledspreadsheetSheet11_1.set('fieldLabels', {'lintang': 'no label', 'bujur': 'no label', 'nama': 'no label', });
lyr_UntitledspreadsheetSheet11_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});