

/* Data points defined as an array of LatLng objects */
var heatmapData = [
    new google.maps.LatLng(37.782, -122.447),
    new google.maps.LatLng(37.782, -122.445),
    new google.maps.LatLng(37.782, -122.443),
    new google.maps.LatLng(37.782, -122.441),
    new google.maps.LatLng(37.782, -122.439),
    new google.maps.LatLng(37.782, -122.437),
    new google.maps.LatLng(37.782, -122.435),
    new google.maps.LatLng(37.785, -122.447),
    new google.maps.LatLng(37.785, -122.445),
    new google.maps.LatLng(37.785, -122.443),
    new google.maps.LatLng(37.785, -122.441),
    new google.maps.LatLng(37.785, -122.439),
    new google.maps.LatLng(37.785, -122.437),
    new google.maps.LatLng(37.785, -122.435)
  ];
  
  
  var heatmap = new google.maps.visualization.HeatmapLayer({
    data: heatmapData
  });
  heatmap.setMap(map);

  /* Data points defined as a mixture of WeightedLocation and LatLng objects */
var heatMapData = [
    {location: new google.maps.LatLng(37.782, -122.447), weight: 0.5},
    new google.maps.LatLng(37.782, -122.445),
    {location: new google.maps.LatLng(37.782, -122.443), weight: 2},
    {location: new google.maps.LatLng(37.782, -122.441), weight: 3},
    {location: new google.maps.LatLng(37.782, -122.439), weight: 2},
    new google.maps.LatLng(37.782, -122.437),
    {location: new google.maps.LatLng(37.782, -122.435), weight: 0.5},
  
    {location: new google.maps.LatLng(37.785, -122.447), weight: 3},
    {location: new google.maps.LatLng(37.785, -122.445), weight: 2},
    new google.maps.LatLng(37.785, -122.443),
    {location: new google.maps.LatLng(37.785, -122.441), weight: 0.5},
    new google.maps.LatLng(37.785, -122.439),
    {location: new google.maps.LatLng(37.785, -122.437), weight: 2},
    {location: new google.maps.LatLng(37.785, -122.435), weight: 3}
  ];
  
  
  var heatmap = new google.maps.visualization.HeatmapLayer({
    data: heatMapData
  });
  heatmap.setMap(map);