function NavbarView() {
  return (
    <div className="navbar">
      <div onClick={onClickHomeACB}>
        <button> Home </button>
      </div>
      <button>Projects</button>
      <button>CV</button>
    </div>
  );
}

function onClickHomeACB() {
  window.location.hash = "#/home";
}

export default NavbarView;
