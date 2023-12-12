const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: 999;

  pointer-events: none;

  button {
    pointer-events: all;
  }

  .interactive {
    pointer-events: all;
  }
`;

const Children = props.Children || (() => {});

const [showOverlay, setShowOverlay] = useState(true);

const toggleOverlay = () => {
  setShowOverlay(!showOverlay);
};

return (
  <Overlay style={{ display: showOverlay ? "flex" : "none" }}>
    <Children toggleOverlay={toggleOverlay} />
  </Overlay>
);
