var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_KABTRENGGALEK_1 = new ol.format.GeoJSON();
var features_KABTRENGGALEK_1 = format_KABTRENGGALEK_1.readFeatures(json_KABTRENGGALEK_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KABTRENGGALEK_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KABTRENGGALEK_1.addFeatures(features_KABTRENGGALEK_1);
var lyr_KABTRENGGALEK_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KABTRENGGALEK_1, 
                style: style_KABTRENGGALEK_1,
                popuplayertitle: 'KAB. TRENGGALEK',
                interactive: false,
                title: '<img src="styles/legend/KABTRENGGALEK_1.png" /> KAB. TRENGGALEK'
            });
var format_PERMUKIMANTERJANGKAU7KM_2 = new ol.format.GeoJSON();
var features_PERMUKIMANTERJANGKAU7KM_2 = format_PERMUKIMANTERJANGKAU7KM_2.readFeatures(json_PERMUKIMANTERJANGKAU7KM_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PERMUKIMANTERJANGKAU7KM_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PERMUKIMANTERJANGKAU7KM_2.addFeatures(features_PERMUKIMANTERJANGKAU7KM_2);
var lyr_PERMUKIMANTERJANGKAU7KM_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PERMUKIMANTERJANGKAU7KM_2, 
                style: style_PERMUKIMANTERJANGKAU7KM_2,
                popuplayertitle: 'PERMUKIMAN TERJANGKAU 7KM',
                interactive: true,
                title: '<img src="styles/legend/PERMUKIMANTERJANGKAU7KM_2.png" /> PERMUKIMAN TERJANGKAU 7KM'
            });
var format_PERMUKIMANTERJANGKAU5KM_3 = new ol.format.GeoJSON();
var features_PERMUKIMANTERJANGKAU5KM_3 = format_PERMUKIMANTERJANGKAU5KM_3.readFeatures(json_PERMUKIMANTERJANGKAU5KM_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PERMUKIMANTERJANGKAU5KM_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PERMUKIMANTERJANGKAU5KM_3.addFeatures(features_PERMUKIMANTERJANGKAU5KM_3);
var lyr_PERMUKIMANTERJANGKAU5KM_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PERMUKIMANTERJANGKAU5KM_3, 
                style: style_PERMUKIMANTERJANGKAU5KM_3,
                popuplayertitle: 'PERMUKIMAN TERJANGKAU 5KM',
                interactive: true,
                title: '<img src="styles/legend/PERMUKIMANTERJANGKAU5KM_3.png" /> PERMUKIMAN TERJANGKAU 5KM'
            });
var format_PERMUKIMANTERJANGKAU3KM_4 = new ol.format.GeoJSON();
var features_PERMUKIMANTERJANGKAU3KM_4 = format_PERMUKIMANTERJANGKAU3KM_4.readFeatures(json_PERMUKIMANTERJANGKAU3KM_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PERMUKIMANTERJANGKAU3KM_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PERMUKIMANTERJANGKAU3KM_4.addFeatures(features_PERMUKIMANTERJANGKAU3KM_4);
var lyr_PERMUKIMANTERJANGKAU3KM_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PERMUKIMANTERJANGKAU3KM_4, 
                style: style_PERMUKIMANTERJANGKAU3KM_4,
                popuplayertitle: 'PERMUKIMAN TERJANGKAU 3KM',
                interactive: true,
                title: '<img src="styles/legend/PERMUKIMANTERJANGKAU3KM_4.png" /> PERMUKIMAN TERJANGKAU 3KM'
            });
var format_PERMUKIMANTERJANGKAU1KM_5 = new ol.format.GeoJSON();
var features_PERMUKIMANTERJANGKAU1KM_5 = format_PERMUKIMANTERJANGKAU1KM_5.readFeatures(json_PERMUKIMANTERJANGKAU1KM_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PERMUKIMANTERJANGKAU1KM_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PERMUKIMANTERJANGKAU1KM_5.addFeatures(features_PERMUKIMANTERJANGKAU1KM_5);
var lyr_PERMUKIMANTERJANGKAU1KM_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PERMUKIMANTERJANGKAU1KM_5, 
                style: style_PERMUKIMANTERJANGKAU1KM_5,
                popuplayertitle: 'PERMUKIMAN TERJANGKAU 1KM',
                interactive: true,
                title: '<img src="styles/legend/PERMUKIMANTERJANGKAU1KM_5.png" /> PERMUKIMAN TERJANGKAU 1KM'
            });
var format_RUTETERCEPAT7KM_6 = new ol.format.GeoJSON();
var features_RUTETERCEPAT7KM_6 = format_RUTETERCEPAT7KM_6.readFeatures(json_RUTETERCEPAT7KM_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUTETERCEPAT7KM_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUTETERCEPAT7KM_6.addFeatures(features_RUTETERCEPAT7KM_6);
var lyr_RUTETERCEPAT7KM_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUTETERCEPAT7KM_6, 
                style: style_RUTETERCEPAT7KM_6,
                popuplayertitle: 'RUTE TERCEPAT  7KM',
                interactive: false,
                title: '<img src="styles/legend/RUTETERCEPAT7KM_6.png" /> RUTE TERCEPAT  7KM'
            });
var format_RUTETERCEPAT5KM_7 = new ol.format.GeoJSON();
var features_RUTETERCEPAT5KM_7 = format_RUTETERCEPAT5KM_7.readFeatures(json_RUTETERCEPAT5KM_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUTETERCEPAT5KM_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUTETERCEPAT5KM_7.addFeatures(features_RUTETERCEPAT5KM_7);
var lyr_RUTETERCEPAT5KM_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUTETERCEPAT5KM_7, 
                style: style_RUTETERCEPAT5KM_7,
                popuplayertitle: 'RUTE TERCEPAT  5KM',
                interactive: false,
                title: '<img src="styles/legend/RUTETERCEPAT5KM_7.png" /> RUTE TERCEPAT  5KM'
            });
var format_RUTETERCEPAT3KM_8 = new ol.format.GeoJSON();
var features_RUTETERCEPAT3KM_8 = format_RUTETERCEPAT3KM_8.readFeatures(json_RUTETERCEPAT3KM_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUTETERCEPAT3KM_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUTETERCEPAT3KM_8.addFeatures(features_RUTETERCEPAT3KM_8);
var lyr_RUTETERCEPAT3KM_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUTETERCEPAT3KM_8, 
                style: style_RUTETERCEPAT3KM_8,
                popuplayertitle: 'RUTE TERCEPAT  3KM',
                interactive: false,
                title: '<img src="styles/legend/RUTETERCEPAT3KM_8.png" /> RUTE TERCEPAT  3KM'
            });
var format_RUTETERCEPAT1KM_9 = new ol.format.GeoJSON();
var features_RUTETERCEPAT1KM_9 = format_RUTETERCEPAT1KM_9.readFeatures(json_RUTETERCEPAT1KM_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUTETERCEPAT1KM_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUTETERCEPAT1KM_9.addFeatures(features_RUTETERCEPAT1KM_9);
var lyr_RUTETERCEPAT1KM_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUTETERCEPAT1KM_9, 
                style: style_RUTETERCEPAT1KM_9,
                popuplayertitle: 'RUTE TERCEPAT 1KM',
                interactive: true,
                title: '<img src="styles/legend/RUTETERCEPAT1KM_9.png" /> RUTE TERCEPAT 1KM'
            });
var format_RUMAHSAKIT_10 = new ol.format.GeoJSON();
var features_RUMAHSAKIT_10 = format_RUMAHSAKIT_10.readFeatures(json_RUMAHSAKIT_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUMAHSAKIT_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUMAHSAKIT_10.addFeatures(features_RUMAHSAKIT_10);
var lyr_RUMAHSAKIT_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUMAHSAKIT_10, 
                style: style_RUMAHSAKIT_10,
                popuplayertitle: 'RUMAH SAKIT',
                interactive: true,
                title: '<img src="styles/legend/RUMAHSAKIT_10.png" /> RUMAH SAKIT'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_KABTRENGGALEK_1.setVisible(true);lyr_PERMUKIMANTERJANGKAU7KM_2.setVisible(true);lyr_PERMUKIMANTERJANGKAU5KM_3.setVisible(true);lyr_PERMUKIMANTERJANGKAU3KM_4.setVisible(true);lyr_PERMUKIMANTERJANGKAU1KM_5.setVisible(true);lyr_RUTETERCEPAT7KM_6.setVisible(true);lyr_RUTETERCEPAT5KM_7.setVisible(true);lyr_RUTETERCEPAT3KM_8.setVisible(true);lyr_RUTETERCEPAT1KM_9.setVisible(true);lyr_RUMAHSAKIT_10.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_KABTRENGGALEK_1,lyr_PERMUKIMANTERJANGKAU7KM_2,lyr_PERMUKIMANTERJANGKAU5KM_3,lyr_PERMUKIMANTERJANGKAU3KM_4,lyr_PERMUKIMANTERJANGKAU1KM_5,lyr_RUTETERCEPAT7KM_6,lyr_RUTETERCEPAT5KM_7,lyr_RUTETERCEPAT3KM_8,lyr_RUTETERCEPAT1KM_9,lyr_RUMAHSAKIT_10];
lyr_KABTRENGGALEK_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Luas': 'Luas', });
lyr_PERMUKIMANTERJANGKAU7KM_2.set('fieldAliases', {'nama_rs': 'nama_rs', 'REMARK': 'REMARK', 'Luas Permukiman Terjangkau': 'Luas Permukiman Terjangkau', 'Persentase Permukiman Tidak Terjangkau': 'Persentase Permukiman Tidak Terjangkau', 'Persentase Permukiman Terjangkau': 'Persentase Permukiman Terjangkau', });
lyr_PERMUKIMANTERJANGKAU5KM_3.set('fieldAliases', {'nama_rs': 'nama_rs', 'REMARK': 'REMARK', 'Luas Permukiman Terjangkau': 'Luas Permukiman Terjangkau', 'Persentase Permukiman Tidak Terjangkau': 'Persentase Permukiman Tidak Terjangkau', 'Persentase Permukiman Terjangkau': 'Persentase Permukiman Terjangkau', });
lyr_PERMUKIMANTERJANGKAU3KM_4.set('fieldAliases', {'nama_rs': 'nama_rs', 'REMARK': 'REMARK', 'Luas Permukiman Terjangkau': 'Luas Permukiman Terjangkau', 'Persentase Permukiman Terjangkau': 'Persentase Permukiman Terjangkau', 'Persentase Permukiman Tidak Terjangkau': 'Persentase Permukiman Tidak Terjangkau', });
lyr_PERMUKIMANTERJANGKAU1KM_5.set('fieldAliases', {'nama_rs': 'nama_rs', 'REMARK': 'REMARK', 'Luas Permukiman Terjangkau': 'Luas Permukiman Terjangkau', 'Persentase Permukiman Terjangkau': 'Persentase Permukiman Terjangkau', 'Persentase Permukiman Tidak Terjangkau': 'Persentase Permukiman Tidak Terjangkau', });
lyr_RUTETERCEPAT7KM_6.set('fieldAliases', {'nama_rs': 'nama_rs', 'latitude': 'latitude', 'longitude': 'longitude', 'type': 'type', 'start': 'start', });
lyr_RUTETERCEPAT5KM_7.set('fieldAliases', {'nama_rs': 'nama_rs', 'latitude': 'latitude', 'longitude': 'longitude', 'type': 'type', 'start': 'start', });
lyr_RUTETERCEPAT3KM_8.set('fieldAliases', {'nama_rs': 'nama_rs', 'latitude': 'latitude', 'longitude': 'longitude', 'type': 'type', 'start': 'start', });
lyr_RUTETERCEPAT1KM_9.set('fieldAliases', {'nama_rs': 'nama_rs', 'latitude': 'latitude', 'longitude': 'longitude', 'type': 'type', 'start': 'start', });
lyr_RUMAHSAKIT_10.set('fieldAliases', {'nama_rs': 'nama_rs', 'latitude': 'latitude', 'longitude': 'longitude', 'Foto': 'Foto', 'Tipe': 'Tipe', 'Status': 'Status', 'Layanan': 'Layanan', 'Poliklinik': 'Poliklinik', });
lyr_KABTRENGGALEK_1.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'Range', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Luas': 'TextEdit', });
lyr_PERMUKIMANTERJANGKAU7KM_2.set('fieldImages', {'nama_rs': 'TextEdit', 'REMARK': 'TextEdit', 'Luas Permukiman Terjangkau': 'TextEdit', 'Persentase Permukiman Tidak Terjangkau': 'TextEdit', 'Persentase Permukiman Terjangkau': 'TextEdit', });
lyr_PERMUKIMANTERJANGKAU5KM_3.set('fieldImages', {'nama_rs': 'TextEdit', 'REMARK': 'TextEdit', 'Luas Permukiman Terjangkau': 'TextEdit', 'Persentase Permukiman Tidak Terjangkau': 'TextEdit', 'Persentase Permukiman Terjangkau': 'TextEdit', });
lyr_PERMUKIMANTERJANGKAU3KM_4.set('fieldImages', {'nama_rs': 'TextEdit', 'REMARK': 'TextEdit', 'Luas Permukiman Terjangkau': 'TextEdit', 'Persentase Permukiman Terjangkau': 'TextEdit', 'Persentase Permukiman Tidak Terjangkau': 'TextEdit', });
lyr_PERMUKIMANTERJANGKAU1KM_5.set('fieldImages', {'nama_rs': 'TextEdit', 'REMARK': 'TextEdit', 'Luas Permukiman Terjangkau': 'TextEdit', 'Persentase Permukiman Terjangkau': 'TextEdit', 'Persentase Permukiman Tidak Terjangkau': 'TextEdit', });
lyr_RUTETERCEPAT7KM_6.set('fieldImages', {'nama_rs': '', 'latitude': '', 'longitude': '', 'type': '', 'start': '', });
lyr_RUTETERCEPAT5KM_7.set('fieldImages', {'nama_rs': '', 'latitude': '', 'longitude': '', 'type': '', 'start': '', });
lyr_RUTETERCEPAT3KM_8.set('fieldImages', {'nama_rs': '', 'latitude': '', 'longitude': '', 'type': '', 'start': '', });
lyr_RUTETERCEPAT1KM_9.set('fieldImages', {'nama_rs': '', 'latitude': '', 'longitude': '', 'type': '', 'start': '', });
lyr_RUMAHSAKIT_10.set('fieldImages', {'nama_rs': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Foto': 'ExternalResource', 'Tipe': '', 'Status': '', 'Layanan': '', 'Poliklinik': '', });
lyr_KABTRENGGALEK_1.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'Luas': 'no label', });
lyr_PERMUKIMANTERJANGKAU7KM_2.set('fieldLabels', {'nama_rs': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'Luas Permukiman Terjangkau': 'inline label - always visible', 'Persentase Permukiman Tidak Terjangkau': 'inline label - always visible', 'Persentase Permukiman Terjangkau': 'inline label - always visible', });
lyr_PERMUKIMANTERJANGKAU5KM_3.set('fieldLabels', {'nama_rs': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'Luas Permukiman Terjangkau': 'inline label - always visible', 'Persentase Permukiman Tidak Terjangkau': 'inline label - always visible', 'Persentase Permukiman Terjangkau': 'inline label - always visible', });
lyr_PERMUKIMANTERJANGKAU3KM_4.set('fieldLabels', {'nama_rs': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'Luas Permukiman Terjangkau': 'inline label - always visible', 'Persentase Permukiman Terjangkau': 'inline label - always visible', 'Persentase Permukiman Tidak Terjangkau': 'inline label - always visible', });
lyr_PERMUKIMANTERJANGKAU1KM_5.set('fieldLabels', {'nama_rs': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'Luas Permukiman Terjangkau': 'inline label - always visible', 'Persentase Permukiman Terjangkau': 'inline label - always visible', 'Persentase Permukiman Tidak Terjangkau': 'inline label - always visible', });
lyr_RUTETERCEPAT7KM_6.set('fieldLabels', {'nama_rs': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_RUTETERCEPAT5KM_7.set('fieldLabels', {'nama_rs': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_RUTETERCEPAT3KM_8.set('fieldLabels', {'nama_rs': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_RUTETERCEPAT1KM_9.set('fieldLabels', {'nama_rs': 'inline label - always visible', 'latitude': 'inline label - always visible', 'longitude': 'inline label - always visible', 'type': 'inline label - always visible', 'start': 'inline label - always visible', });
lyr_RUMAHSAKIT_10.set('fieldLabels', {'nama_rs': 'inline label - always visible', 'latitude': 'inline label - always visible', 'longitude': 'inline label - always visible', 'Foto': 'no label', 'Tipe': 'inline label - always visible', 'Status': 'inline label - always visible', 'Layanan': 'inline label - always visible', 'Poliklinik': 'inline label - always visible', });
lyr_RUMAHSAKIT_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});