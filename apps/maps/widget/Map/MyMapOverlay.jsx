const { toggleOverlay, focusedMarker } = props;

const Button = styled.button`
  background: #191a1a;
  border-radius: 6px;
  color: white;
  z-index: 1;
  padding: 10px 22px;
`;

const Profile = styled.div`
  position: absolute;
  right: 50px;
  top: 30px;
  @media (max-width: 510px) {
    padding: 6px 15px;
    right: 15px;
    top: 15px;
  }
`;

const Inspect = styled.div`
  position: absolute;
  left: 50px;
  top: 30px;
  @media (max-width: 510px) {
    padding: 6px 15px;
    right: 15px;
    top: 15px;
  }
`;

const Location = styled.div`
  position: absolute;
  bottom: 50px;
  @media (max-width: 510px) {
    padding: 6px 15px;
    bottom: 15px;
  }
`;

function DownIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 48 48"
    >
      <mask id="ipSDownOne0">
        <path
          fill="#fff"
          stroke="#fff"
          strokeLinejoin="round"
          strokeWidth="4"
          d="M36 19L24 31L12 19h24Z"
        />
      </mask>
      <path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSDownOne0)" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M13 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z" />
        <path d="M17.5 9.5c0 3.038-2 6.5-5.5 10.5c-3.5-4-5.5-7.462-5.5-10.5a5.5 5.5 0 1 1 11 0Z" />
      </g>
    </svg>
  );
}

return (
  <>
    <Profile>
      <Button
        onClick={() => {
          State.update({ showForm: !state.showForm });
        }}
      >
        {`${state.showForm ? "Hide" : "Show"} Form`}
        <DownIcon />
      </Button>
    </Profile>
    <Inspect>{JSON.stringify(focusedMarker)}</Inspect>
    <Location>
      <Button
        onClick={
          state.edit
            ? () => handleSave()
            : () => State.update({ edit: !state.edit })
        }
      >
        {`${!state.edit ? "Edit" : "Save"}`}
        <LocationIcon />
      </Button>
      {state.edit && (
        <Button onClick={() => State.update({ edit: false, showForm: false })}>
          Cancel
        </Button>
      )}
    </Location>
  </>
);
