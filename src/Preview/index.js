//Replace this with index.tsx for check pas
import React, { useState, Fragment } from 'react';
import oneByOne from '../images/1-1.jpg';
import twoByThree from '../images/2-3.jpg';
import threeByTwo from '../images/3-2.jpg';
import './preview.scss';

const PastBook = () => {
  const [imageUrl, setImageUrl] = useState(oneByOne);
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [aspect, setAspect] = useState(1);

  const placeholderWidth = 450;
  const placeholderHeight = placeholderWidth / aspect;
  const imageWidth = placeholderWidth;

  const [autoFocus, setAutoFocus] = useState();

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
      <ControlWrapper label="Image source">
        <select value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}>
          <option value={oneByOne}>1:1 image</option>
          <option value={twoByThree}>2:3 image</option>
          <option value={threeByTwo}>3:2 image</option>
        </select>
      </ControlWrapper>
      <ControlWrapper label="Position (X%, Y%)">
        <input
          type="number"
          value={positionX}
          step="10"
          onChange={(e) => {
            setAutoFocus(1);
            setPositionX(e.target.value);
          }}
          style={{
            width: '48%',
          }}
          autoFocus={autoFocus === 1}
        />
        <input
          type="number"
          value={positionY}
          step="10"
          onChange={(e) => {
            setAutoFocus(2);
            setPositionY(e.target.value);
          }}
          key={2}
          style={{
            width: '48%',
            marginLeft: '4%',
          }}
          autoFocus={autoFocus === 2}
        />
      </ControlWrapper>
      <ControlWrapper label="Zoom">
        <input
          type="number"
          value={zoom}
          step=".1"
          onChange={(e) => {
            setAutoFocus(3);
            e.target.value > 0 ? setZoom(e.target.value) : setZoom(0.01);
          }}
          autoFocus={autoFocus === 3}
        />
      </ControlWrapper>
      <ControlWrapper label="Rotation">
        <input
          type="number"
          value={rotation}
          step="10"
          onChange={(e) => {
            setAutoFocus(4);
            e.target.value < 360 && e.target.value > 0
              ? setRotation(e.target.value)
              : setRotation(0);
          }}
          autoFocus={autoFocus === 4}
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
