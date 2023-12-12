const buttons = [
  { icon: "bi bi-book", title: "Library", to: "/*__@appAccount__*//widget/Map.Library" },
  { icon: "bi bi-hammer", title: "Workspace", to: "/*__@appAccount__*//widget/Map.Workspace" },
  { icon: "bi bi-chat-left-dots", title: "Discussion", to: "/*__@appAccount__*//widget/Map.Discussion" },
  { icon: "bi bi-globe", title: "Explore", to: "/*__@appAccount__*//widget/Map.Explore" },
];

const ButtonGrid = ({ buttons }) => {
  return (
    <div className="button-grid">
      {buttons.map((button, index) => (
        <button key={index} className="button">
          <i className={button.icon} />
          {button.title}
        </button>
      ))}
    </div>
  );
};

const CSS = styled.div`
  .app {
    height: 85vh;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .button-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    margin: 1rem;
  }


  .button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    padding: 1rem;
    background-color: #f8f8f8; 
    transition: all 0.3s ease;
    cursor: pointer;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

    &:hover {
      transform: translateY(-3px); 
      box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.2);
    }
`;

return (
  <CSS>
    <div className="app">
      <div className="container">
        <ButtonGrid buttons={buttons} />
      </div>
    </div>
  </CSS>
);
