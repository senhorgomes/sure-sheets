import React, {useState, forwardRef} from 'react';
import './Canvas.scss';

import { Stage, Layer } from 'react-konva'



import Template1 from './Templates/Template_1'
import Template2 from './Templates/Template_2'
import Template3 from './Templates/Template_3'
import Template4 from './Templates/Template_4'


export default forwardRef(function Canvas(props, stageRef) {
  const [targetShape, setTargetShape] = useState(null);

  const checkDeselect = e => {
    console.log(e.target);
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      setTargetShape(null);
    }
  };
  return (
    <>
      <div
        className='canvas' 
        id='canvas'
        onDrop={props.onDrop}
        onDragOver={props.onDragOver}

      >
        {props.currentStage === 'Intro' &&
           <Stage
           width={794}
           height={1123}
           ref={stageRef}
           onMouseDown={props.checkDeselect}
           onTouchStart={props.checkDeselect}
           onDrop={props.onDrop}
           onDragOver={props.onDragOver}
           checkDeselect={checkDeselect}
           // onClick={stageref}
         >
           <Layer></Layer>
           </Stage>
        }
        {(props.currentStage === "Template 1") &&
          <Template1
            ref={props.stageRef}
            checkDeselect={checkDeselect}
            canvasItems={props.canvasItems}
            setCanvasItems={props.setCanvasItems}
            targetShape={targetShape}
            setTargetShape={setTargetShape}
            onDrop={props.onDrop}
            onDragOver={props.onDragOver}
            // setTextboxState={props.setTextboxState}
          />
        }
        {(props.currentStage === "Template 2") &&
          <Template2
          ref={props.stageRef}
          checkDeselect={checkDeselect}
          canvasItems={props.canvasItems}
          setCanvasItems={props.setCanvasItems}
          fontSize={props.fontSize}
          fill={props.fill}
          targetShape={targetShape}
          setTargetShape={setTargetShape}
          onDrop={props.onDrop}
          onDragOver={props.onDragOver}
          />
        }
        {(props.currentStage === "Template 4") &&
          <Template4
            ref={props.stageRef}
            checkDeselect={checkDeselect}
            canvasItems={props.canvasItems}
            setCanvasItems={props.setCanvasItems}
            fontSize={props.fontSize}
            fill={props.fill}
            targetShape={targetShape}
            setTargetShape={setTargetShape}
            onDrop={props.onDrop}
            onDragOver={props.onDragOver}
          />
        }
        {(props.currentStage === "Template 3") &&
          <Template3
            ref={props.StageRef}
            checkDeselect={checkDeselect}
            canvasItems={props.canvasItems}
            setCanvasItems={props.setCanvasItems}
            fontSize={props.fontSize}
            fill={props.fill}
            targetShape={targetShape}
            setTargetShape={setTargetShape}
          />
        }
      </div>
    </>
  )
})
