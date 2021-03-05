//Replace this with index.tsx for check pas
import React, { useState, useEffect } from 'react';

const Preview = () => {
  const [imageUrl, setImageUrl] = useState(
    'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-0/p320x320/111607881_114981553627847_15083785481239512_o.jpg?_nc_cat=108&ccb=2&_nc_sid=e007fa&_nc_ohc=H5XdyfRLtwIAX8LImhw&_nc_ht=scontent-sea1-1.xx&tp=6&oh=4ee2d19b1d07ee6569b223674b333114&oe=604684C3'
  );
  const [position, setPosition] = useState('0, 0');
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [aspect, setAspect] = useState(1);

  const placeholderWidth = 350;
  const placeholderHeight = placeholderWidth / aspect;
  const imageWidth = placeholderWidth;

  const Controls = () => (
    <div>
      <select value={aspect} onChange={(e) => setAspect(e.target.value)}>
        <option value={1}>1:1</option>
        <option value={0.5}>1:2</option>
        <option value={2}>2:1</option>
      </select>
      <input
        type="text"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <input
        type="text"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />
      <input
        type="text"
        value={zoom}
        onChange={(e) => setZoom(e.target.value)}
      />
      <input
        type="text"
        value={rotation}
        onChange={(e) => setRotation(e.target.value)}
      />
    </div>
  );

  return (
    <div>
      <div
        className="container"
        style={{
          width: `${placeholderWidth}px`,
          height: `${placeholderHeight}px`,
          transformOrigin: 'top left',
          backgroundColor: 'black',
        }}
      >
        <div
          className="page"
          style={{
            width: `${placeholderWidth}px`,
            height: `${placeholderHeight}px`,
          }}
        >
          <div className="page-preview">
            <div
              className="photo-grid--wrapper"
              style={{
                position: 'relative',
                padding: '0px',
              }}
            >
              <div
                className="photo-grid--wrapper__boundary"
                style={{
                  width: `${placeholderWidth}px`,
                  height: `${placeholderHeight}px`,
                  position: 'relative',
                }}
              >
                <div
                  className="photo-grid--placeholder"
                  style={{
                    width: `${placeholderWidth}px`,
                    height: `${placeholderHeight}px`,
                    position: 'absolute',
                    top: '0px',
                    left: '0px',
                  }}
                >
                  <div
                    className="photo-grid--placeholder__image"
                    style={{
                      width: `${placeholderWidth}px`,
                      height: `${placeholderHeight}px`,
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src={imageUrl}
                      alt={imageUrl}
                      className="photo"
                      style={{
                        top: `0px`,
                        bottom: `0px`,
                        left: `0px`,
                        right: `0px`,
                        width: `${imageWidth}px`,
                        transformOrigin: 'center center',
                        transform: `translate(${position}) rotate(${rotation}deg) scale(${zoom})`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Controls />
    </div>
  );
};

export default Preview;
