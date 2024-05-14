var wms_layers = [];

var lyr_lycee_2022_georeftif_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "lycee_2022_georef.tif",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/lycee_2022_georeftif_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [541793.240792, 5450755.857027, 544052.580204, 5452549.290022]
                            })
                        });
var format_zer_1 = new ol.format.GeoJSON();
var features_zer_1 = format_zer_1.readFeatures(json_zer_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zer_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zer_1.addFeatures(features_zer_1);
var lyr_zer_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_zer_1, 
                style: style_zer_1,
                interactive: true,
                title: '<img src="styles/legend/zer_1.png" /> zer'
            });

lyr_lycee_2022_georeftif_0.setVisible(true);lyr_zer_1.setVisible(true);
var layersList = [lyr_lycee_2022_georeftif_0,lyr_zer_1];
lyr_zer_1.set('fieldAliases', {'zonne': 'zonne', 'note': 'note', 'nb arbre': 'nb arbre', 'fleurie': 'fleurie', 'arbre mort': 'arbre mort', 'eau': 'eau', 'brousaille': 'brousaille', });
lyr_zer_1.set('fieldImages', {'zonne': 'Range', 'note': 'TextEdit', 'nb arbre': 'TextEdit', 'fleurie': 'TextEdit', 'arbre mort': 'TextEdit', 'eau': 'TextEdit', 'brousaille': 'TextEdit', });
lyr_zer_1.set('fieldLabels', {'zonne': 'no label', 'note': 'no label', 'nb arbre': 'no label', 'fleurie': 'no label', 'arbre mort': 'no label', 'eau': 'no label', 'brousaille': 'no label', });
lyr_zer_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});