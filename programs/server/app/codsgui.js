(function(){if (Meteor.isClient) {

Meteor.startup(function() {
    GoogleMaps.load();
  });


Template.Home.helpers({
  exampleMapOptions: function() {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      // We can use the `ready` callback to interact with the map API once the map is ready.
      GoogleMaps.ready('trafficMap', function(map) {
        // Add a marker to the map once it's ready
      });

      var queryDict = {}
      window.location.search.substr(1).split("&").forEach(function(item) {queryDict[item.split("=")[0]] = item.split("=")[1]})
      // Map initialization options
      var _city = queryDict.city;
      var latlng;
      if(_city == "Bangalore"){
        latlng = new google.maps.LatLng(12.9539974, 77.6309395);
      }
      else if(_city == "Mumbai"){
        latlng = new google.maps.LatLng(19.0822507, 72.8812042);
      }
      else{
        latlng = new google.maps.LatLng(28.6454414, 77.0907573);
      }

      $(document).foundation();

      return {
        center: latlng,
        zoom: 11
      };
    }
  }
});

Template.header.events({
  'click .DelhiButton': function () {
      // increment the counter when button is clicked
      var latlng = new google.maps.LatLng(28.6454414, 77.0907573);
      GoogleMaps.maps.trafficMap.instance.setCenter(latlng);
      console.log('Welcome to Delhi');
    },

    'click .MumbaiButton': function () {
      // increment the counter when button is clicked
      var latlng = new google.maps.LatLng(19.0822507, 72.8812042);
      GoogleMaps.maps.trafficMap.instance.setCenter(latlng);
      console.log('Welcome to Mumbai');
    },

    'click .BangaloreButton': function () {
      // increment the counter when button is clicked
      var latlng = new google.maps.LatLng(12.9539974, 77.6309395);
      GoogleMaps.maps.trafficMap.instance.setCenter(latlng);
      console.log('Welcome to Bangalore');
    }

});

}//end of client



if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

})();
