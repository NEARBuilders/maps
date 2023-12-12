const { Map } = VM.require("/*__@appAccount__*//widget/Map");

const data = fetch("https://data.cityofnewyork.us/resource/if26-z6xq.json");

const locations = data?.body;

const mapData = locations.map((item) => ({
  id: item.object_id,
  lng: parseFloat(item.longitude),
  lat: parseFloat(item.latitude),
}));

const markerImageUrl =
  "https://researchathon.mypinata.cloud/ipfs/Qmcppuc1eeK4vvdgpXmJkMDcpfeYdgaHXihkKbdjWQNi4B";

return (
  <Map
    markers={mapData}
    markerAsset={markerImageUrl}
    Overlay={(p) => (
      <Widget src="/*__@appAccount__*//widget/Map.MyMapOverlay" props={p} />
    )}
    onMarkerClick={(e) => console.log("marker click from the demo : ", e)}
    onMapClick={(e) => console.log("map click from the demo : ", e)}
  />
);
