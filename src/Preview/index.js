//Replace this with index.tsx for check pas
import React, { useState, Fragment } from 'react';
import './preview.scss';

const PastBook = () => {
  const [imageUrl, setImageUrl] = useState(
    'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-0/p320x320/111607881_114981553627847_15083785481239512_o.jpg?_nc_cat=108&ccb=2&_nc_sid=e007fa&_nc_ohc=H5XdyfRLtwIAX8LImhw&_nc_ht=scontent-sea1-1.xx&tp=6&oh=4ee2d19b1d07ee6569b223674b333114&oe=604684C3'
  );
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [aspect, setAspect] = useState(1);

  const placeholderWidth = 350;
  const placeholderHeight = placeholderWidth / aspect;
  const imageWidth = placeholderWidth;

  const ControlWrapper = ({ label, children }) => (
    <div className="control">
      <label>
        <span>{label}</span>
        {children}
      </label>
    </div>
  );

  const Controls = () => (
    <div className="control-container">
      <ControlWrapper label="Placeholder ratio">
        <select value={aspect} onChange={(e) => setAspect(e.target.value)}>
          <option value={1 / 1}>1:1</option>
          <option value={2 / 3}>2:3</option>
          <option value={3 / 2}>3:2</option>
        </select>
      </ControlWrapper>
      <ControlWrapper label="Image URL">
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </ControlWrapper>
      <ControlWrapper label="Position (X%, Y%)">
        <input
          type="text"
          value={positionX}
          onChange={(e) => setPositionX(e.target.value)}
          style={{
            width: '48%',
          }}
        />
        <input
          type="text"
          value={positionY}
          onChange={(e) => setPositionY(e.target.value)}
          style={{
            width: '48%',
            marginLeft: '4%',
          }}
        />
      </ControlWrapper>
      <ControlWrapper label="Zoom">
        <input
          type="text"
          value={zoom}
          onChange={(e) => setZoom(e.target.value)}
        />
      </ControlWrapper>
      <ControlWrapper label="Rotation">
        <input
          type="text"
          value={rotation}
          onChange={(e) => setRotation(e.target.value)}
        />
      </ControlWrapper>
    </div>
  );

  return (
    <div className="preview">
      <div className="preview-container">
        <span>Preview</span>
        <div
          className="container"
          style={{
            width: `${placeholderWidth}px`,
            height: `${placeholderHeight}px`,
            transformOrigin: 'top left',
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
                      <div
                        className="photo-grid--placeholder__image__positioner"
                        style={{
                          height: `${placeholderHeight}px`,
                          width: `${placeholderWidth}px`,
                          transform: `translate(${positionX}%, ${positionY}%)`,
                        }}
                      >
                        <img
                          src={imageUrl}
                          alt={imageUrl}
                          className="photo"
                          style={{
                            position: 'absolute',
                            top: `50%`,
                            left: `50%`,
                            width: `${imageWidth}px`,
                            transformOrigin: 'center center',
                            transform: `translate(-50%, -50%) rotate(${rotation}deg) scale(${zoom})`,
                          }}
                        />
                      </div>
                    </div>
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

export default PastBook;
