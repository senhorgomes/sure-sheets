import React, { forwardRef } from 'react'
import {Stage, Layer, Rect} from 'react-konva'
import Clippings from '../Clippings'

export default forwardRef(function Template1(props, stageRef) {
  function stageref(e) {
    console.log("this is where I'm clicking:", stageRef.current.getPointersPositions(e))
  }
  return (
    <Stage
      width={850}
      height={1100}
      ref={stageRef}
      onMouseDown={props.checkDeselect}
      onTouchStart={props.checkDeselect}
      onDrop={props.onDrop}
      onDragOver={props.onDragOver}
      onClick={stageref}
    >
      <Layer>
        <Rect
          x={30}
          y={35}
          width={200}
          height={100}
          {...props.shapeProps}
        />

        <Rect
          x={620}
          y={35}
          width={200}
          height={100}
          {...props.shapeProps}
        />

        <Rect
          x={275}
          y={35}
          width={300}
          height={100}
          {...props.shapeProps}
        />

        <Rect
          x={275}
          y={170}
          width={550}
          height={200}
          {...props.shapeProps}
        />

        <Rect
          x={275}
          y={630}
          width={550}
          height={200}
          {...props.shapeProps}
        />

        <Rect
          x={30}
          y={170}
          width={200}
          height={200}
          {...props.shapeProps}
        />

        <Rect
          x={30}
          y={630}
          width={200}
          height={200}
          {...props.shapeProps}
        />

        <Rect
          x={30}
          y={400}
          width={550}
          height={200}
          {...props.shapeProps}
        />

        <Rect
          x={30}
          y={860}
          width={550}
          height={200}
          {...props.shapeProps}
        />

        <Rect
          x={30}
          y={860}
          width={550}
          height={200}
          {...props.shapeProps}
        />
        <Rect
          x={620}
          y={400}
          width={200}
          height={200}
          {...props.shapeProps}
        />

        <Rect
          x={620}
          y={860}
          width={200}
          height={200}
          {...props.shapeProps}
        />
        
        <Clippings
          canvasItems={props.canvasItems}
          setCanvasItems={props.setCanvasItems}
          targetShape={props.targetShape}
          setTargetShape={props.setTargetShape} 
        />
      </Layer>
    </Stage>
  )
})
