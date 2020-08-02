import React from "react";

const ProfilePageHeader = (props) => {
  let pageHeader = React.createRef();


  React.useEffect(() => {
   
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
 
  const clearInputs = () => {
    // setEmail('');
    // setPassword('');
    // setNewPassword('');
  };
  return (
    <>
      <div
        className="page-header clear-filter page-header-small"
        filter-color="blue"
      >
        <div
          className="page-header-image"
          // style={{
          //   backgroundImage: "url(" + require("assets/img/bg11.jpg") + ")"
          // }}
          ref={pageHeader}
        ></div>
        
      </div>
    </>
  );
}

export default ProfilePageHeader;
