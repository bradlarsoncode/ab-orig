import React from 'react'
import Gallery from "react-photo-gallery";
import { photos } from "./Photos";
import { SRLWrapper } from "simple-react-lightbox";

const options = {
  settings: {
    overlayColor: "#e7d8c1",
  },
  buttons: {
    backgroundColor: "rgba(0,0,0,.8)",
    iconColor: "#FFFFFF",
  },

  caption: {
    captionAlignment: "center",
    captionColor: "#000000",
    captionContainerPadding: "20px 200px 40px 200px",
    captionFontFamily: "Georgia",
    captionFontSize: "inherit",
    captionFontStyle: "inherit",
    captionFontWeight: "inherit",
    captionTextTransform: "inherit",
    showCaption: true,
  },
};

function Pics() {
  return (
    <div class="bg-gray-50">
      {/* <Nav /> */}
      {/* <p className="instructions">
        Click photos to see artists. Leave comments at the bottom. And/or join
        the live video chat.
      </p> */}
      <div className="piecesContainer">
        <img
          src="https://webfilms-films.s3.amazonaws.com/photos/listings/0-PHL/thumbnail/0-3-PHL-thumb.jpeg"
          className="bigPhoto"
        ></img>
      
        <div className="pieces">
            <SRLWrapper options={options}>
            <Gallery photos={photos} className="photoscont" />
            </SRLWrapper>
        </div>
      </div>
    </div>
  );
}

export default Pics;