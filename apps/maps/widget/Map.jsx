/**
 * MAP_STYLE
 * MAP_TOKEN
 *
 * center // [lng, lat]
 * zoom
 * onSave
 * Form
 * Inspect
 *
 * Overlay
 */

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: stretch;
  flex-direction: column;
  overflow: auto;
  position: relative;
  z-index: 100;
`;

const Overlay = props.Overlay || (() => {});

const Map = ({
  MAP_STYLE,
  MAP_TOKEN,
  height,
  center,
  zoom,
  onSave,
  Overlay,
  markers,
  markerAsset,
  onMapClick,
  onMarkerClick,
}) => {
  // DEFAULTS
  if (!MAP_STYLE) {
    MAP_STYLE = "mapbox://styles/mapbox/outdoors-v12";
  }
  if (!MAP_TOKEN) {
    MAP_TOKEN =
      "pk.eyJ1IjoidGVqMDEiLCJhIjoiY2xqcHZ2dGpkMDB5azNsbzQ0bmMwNjRjaCJ9.FVv2zRPaLwzZMgagbI2YZw";
  }
  if (!center) {
    center = [-74.00597, 40.71427];
  }
  if (!zoom) {
    zoom = 10;
  }
  if (!onSave) {
    onSave = () => {};
  }
  if (!Overlay) {
    Overlay = () => {};
  }
  if (!markers) {
    markers = [];
  }
  if (!height) {
    height = "100vh";
  }
  if (!onMapClick) {
    onMapClick = () => console.log("map clicked within Map module");
  }
  if (!onMarkerClick) {
    onMarkerClick = () => console.log("marker clicked within Map module");
  }

  return (
    <Container style={{ height: height }}>
      <Widget
        src="/*__@appAccount__*//widget/Map.Provider"
        props={{
          Children: (p) => (
            <>
              <Widget
                src="/*__@appAccount__*//widget/Map.Overlay"
                props={{
                  Children: () => <Overlay {...(p || [])} />,
                }}
              />
              <Widget
                src={"/*__@appAccount__*//widget/Map.Mapbox"}
                props={{
                  API_URL,
                  accessToken: MAP_TOKEN,
                  styleUrl: MAP_STYLE,
                  center,
                  zoom,
                  markers: markers, // array of long, lat, id
                  markerAsset: markerAsset,
                  onMapClick: (e) => {
                    onMapClick(e);
                  },
                  onMarkerClick: (e) => {
                    if (p.setFocusedMarker) {
                      p.setFocusedMarker(e);
                    }
                    onMarkerClick(e);
                  },
                  ...(p || [])
                }}
              />
            </>
          ),
        }}
      />
    </Container>
  );
};

return { Map };
