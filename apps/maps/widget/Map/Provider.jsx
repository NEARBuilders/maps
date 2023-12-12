const Children = props.Children || (() => {});

const [focusedMarker, setFocusedMarker] = useState(null);

return (
  <Children focusedMarker={focusedMarker} setFocusedMarker={setFocusedMarker} />
);
