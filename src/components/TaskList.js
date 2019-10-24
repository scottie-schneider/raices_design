import React from 'react';
import styled, { keyframes } from 'styled-components'
import Task from './Task';
const rotate = keyframes`
  0% {
    background-position: -468px 0;
  }
  
  100% {
    background-position: 468px 0; 
  }
`;
const LoadingRow = (
  <div className="loading-item">
    <span className="glow-checkbox" />
    <span className="glow-text">
      <span>Loading</span> <span>cool</span> <span>state</span>
    </span>
  </div>
);

const LoadingRowHolder = styled.div`
  display: grid;
  grid-gap: 10px;
  .glow-text span {
    -webkit-animation-duration: 2s;
    -webkit-animation-fill-mode: forwards;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-name: ${rotate};
    -webkit-animation-timing-function: linear;
    background: #f6f7f9;
    background-image: linear-gradient(to right, #f6f7f9 0%, #e9ebee 20%, #f6f7f9 40%, #f6f7f9 100%);
    background-repeat: no-repeat;
    background-size: 800px 104px;    
    position: relative;
  }
  .glow-text span {    
    color: transparent;
    cursor: progress;
    display: inline-block;
  }
`

// const LoadingRow = styled.div`
//   height: 3rem;
//   width: 100%;
//   background: white;
//   display: flex;
//   align-items: center;
//   line-height: 1rem;
//   padding-left: 16px;
//   .glow-checkbox,
  
//   .glow-checkbox {
//     margin-right: 16px;
//     width: 12px;
//     height: 12px;
//   }
// `


function TaskList({ loading, tasks, onPinTask, onArchiveTask }) {
  const events = {
    onPinTask,
    onArchiveTask,
  };

  if (loading) {
    return (
      <LoadingRowHolder>
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </LoadingRowHolder>
    )
  }
  if (tasks.length === 0) {
    return <div className="list-items">empty</div>;
  }

  return (
    <div className="list-items">
      {tasks.map(task => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  )
}

export default TaskList;