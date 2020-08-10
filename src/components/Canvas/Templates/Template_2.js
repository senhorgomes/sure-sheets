import React, { forwardRef }from 'react'
import { Stage, Layer, Rect } from 'react-konva'
import Clippings from '../Clippings'


export default forwardRef(function Template1(props, stageRef) {
  function stageref(e) {
    console.log("this is where I'm clicking:", stageRef.current.getPointersPositions(e))
  }

  return (
    <Stage
      width={794}
      height={1123}
      ref={stageRef}
      onMouseDown={props.checkDeselect}
      onTouchStart={props.checkDeselect}
      onDrop={props.onDrop}
      onDragOver={props.onDragOver}
      onClick={stageref}
    >
      <Layer>
        <Rect
          x={275}
          y={15}
          width={300}
          height={100}
          fill={'white'}
          shadowColor={'gray'}
          stroke={'black'}
          strokeWidth={4}
          cornerRadius={10}
          // draggable={true}
        />
        
        <Rect
          x={275}
          y={175}
          width={300}
          height={500}
          fill={'white'}
          shadowColor={'gray'}
          stroke={'black'}
          strokeWidth={4}
          cornerRadius={10}
          // draggable={true}
          />

        <Rect
          x={30}
          y={150}
          width={200}
          height={125}
          fill={'white'}
          shadowColor={'gray'}
          stroke={'black'}
          strokeWidth={4}
          cornerRadius={10}
        // draggable={true}
        />

        <Rect
          x={30}
          y={290}
          width={200}
          height={125}
          fill={'white'}
          shadowColor={'gray'}
          stroke={'black'}
          strokeWidth={4}
          cornerRadius={10}
        // draggable={true}
        />

        <Rect
          x={30}
          y={430}
          width={200}
          height={125}
          fill={'white'}
          shadowColor={'gray'}
          stroke={'black'}
          strokeWidth={4}
          cornerRadius={10}
        // draggable={true}
        />

        <Rect
          x={30}
          y={570}
          width={200}
          height={125}
          fill={'white'}
          shadowColor={'gray'}
          stroke={'black'}
          strokeWidth={4}
          cornerRadius={10}
        // draggable={true}
        />

        <Rect
          x={30}
          y={150}
          width={200}
          height={125}
          fill={'white'}
          shadowColor={'gray'}
          stroke={'black'}
          strokeWidth={4}
          cornerRadius={10}
        // draggable={true}
        />

        <Rect
          x={620}
          y={290}
          width={200}
          height={125}
          fill={'white'}
          shadowColor={'gray'}
          stroke={'black'}
          strokeWidth={4}
          cornerRadius={10}
        // draggable={true}
        />

        <Rect
          x={620}
          y={430}
          width={200}
          height={125}
          fill={'white'}
          shadowColor={'gray'}
          stroke={'black'}
          strokeWidth={4}
          cornerRadius={10}
        // draggable={true}
        />

        <Rect
          x={620}
          y={570}
          width={200}
          height={125}
          fill={'white'}
          shadowColor={'gray'}
          stroke={'black'}
          strokeWidth={4}
          cornerRadius={10}
        // draggable={true}
        />

        <Rect
          x={620}
          y={710}
          width={200}
          height={125}
          fill={'white'}
          shadowColor={'gray'}
          stroke={'black'}
          strokeWidth={4}
          cornerRadius={10}
        // draggable={true}
        />

        <Rect
          x={620}
          y={850}
          width={200}
          height={125}
          fill={'white'}
          shadowColor={'gray'}
          stroke={'black'}
          strokeWidth={4}
          cornerRadius={10}
        // draggable={true}
        />

        <Rect
          x={30}
          y={710}
          width={200}
          height={125}
          fill={'white'}
          shadowColor={'gray'}
          stroke={'black'}
          strokeWidth={4}
          cornerRadius={10}
        // draggable={true}
        />

        <Rect
          x={30}
          y={850}
          width={200}
          height={125}
          fill={'white'}
          shadowColor={'gray'}
          stroke={'black'}
          strokeWidth={4}
          cornerRadius={10}
        // draggable={true}
        />

        <Rect
          x={620}
          y={150}
          width={200}
          height={125}
          fill={'white'}
          shadowColor={'gray'}
          stroke={'black'}
          strokeWidth={4}
          cornerRadius={10}
        // draggable={true}
        />

        <Rect
          x={275}
          y={740}
          width={300}
          height={200}
          fill={'white'}
          shadowColor={'gray'}
          stroke={'black'}
          strokeWidth={4}
          cornerRadius={10}
        // draggable={true}
        />

        <Rect
          x={275}
          y={740}
          width={300}
          height={200}
          fill={'white'}
          shadowColor={'gray'}
          stroke={'black'}
          strokeWidth={4}
          cornerRadius={10}
        // draggable={true}
        />

        <Rect
          x={275}
          y={990}
          width={135}
          height={100}
          fill={'white'}
          shadowColor={'gray'}
          stroke={'black'}
          strokeWidth={4}
          cornerRadius={10}
        // draggable={true}
        />

        <Rect
          x={455}
          y={990}
          width={135}
          height={100}
          fill={'white'}
          shadowColor={'gray'}
          stroke={'black'}
          strokeWidth={4}
          cornerRadius={10}
        // draggable={true}
        />





        <Clippings
          canvasItems={props.canvasItems}
          setCanvasItems={props.setCanvasItems}
          fontSize={props.fontSize}
          fill={props.fill}
          targetShape={props.targetShape}
          setTargetShape={props.setTargetShape}
          
        />
      </Layer>
    </Stage>
  )
})
