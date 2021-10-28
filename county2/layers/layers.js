var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KisiiCounty_1 = new ol.format.GeoJSON();
var features_KisiiCounty_1 = format_KisiiCounty_1.readFeatures(json_KisiiCounty_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KisiiCounty_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KisiiCounty_1.addFeatures(features_KisiiCounty_1);
var lyr_KisiiCounty_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KisiiCounty_1, 
                style: style_KisiiCounty_1,
                interactive: true,
                title: '<img src="styles/legend/KisiiCounty_1.png" /> KisiiCounty'
            });
var format_Migorii_2 = new ol.format.GeoJSON();
var features_Migorii_2 = format_Migorii_2.readFeatures(json_Migorii_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Migorii_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Migorii_2.addFeatures(features_Migorii_2);
var lyr_Migorii_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Migorii_2, 
                style: style_Migorii_2,
                interactive: true,
                title: '<img src="styles/legend/Migorii_2.png" /> Migorii'
            });

lyr_OSMStandard_0.setVisible(true);lyr_KisiiCounty_1.setVisible(true);lyr_Migorii_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_KisiiCounty_1,lyr_Migorii_2];
lyr_KisiiCounty_1.set('fieldAliases', {'Name': 'Name', 'CountyNo': 'CountyNo', 'Region': 'Region', });
lyr_Migorii_2.set('fieldAliases', {'Name': 'Name', 'Region': 'Region', 'CountyNo': 'CountyNo', 'xCentroid': 'xCentroid', });
lyr_KisiiCounty_1.set('fieldImages', {'Name': 'TextEdit', 'CountyNo': 'TextEdit', 'Region': 'TextEdit', });
lyr_Migorii_2.set('fieldImages', {'Name': 'TextEdit', 'Region': 'TextEdit', 'CountyNo': 'TextEdit', 'xCentroid': 'TextEdit', });
lyr_KisiiCounty_1.set('fieldLabels', {'Name': 'no label', 'CountyNo': 'no label', 'Region': 'no label', });
lyr_Migorii_2.set('fieldLabels', {'Name': 'no label', 'Region': 'no label', 'CountyNo': 'no label', 'xCentroid': 'no label', });
lyr_Migorii_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});