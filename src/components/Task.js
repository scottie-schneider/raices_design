import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

const TaskHolder = styled.div`
  display: flex;
`
const Checkbox = styled.div`
  display: inline-block;
`;
const TaskTitle = styled.div`
  margin-left: 5px;
`

export default function Task({ task: {id, title, state }, onArchiveTask, onPinTask }) {
  return (
    <div className={`list-item ${state}`}>
      <TaskHolder>
        <label className="checkbox">
          <Checkbox>
            <input
              type="checkbox"
              defaultChecked={state === 'TASK_ARCHIVED'}
              disabled={true}
              name="checked"
            />
          </Checkbox>
          <span className="checkbox-custom" onClick={() => onArchiveTask(id)}/>      
        </label>
        <TaskTitle>
          <input 
            type="text"
            value={title}
            readOnly={true}
            placeholder="Input Title"
          />
        </TaskTitle>
      </TaskHolder>      
      <div className="actions" onClick={event => event.stopPropagation()}>
        {state !== 'TASK_ARCHIVED' && (
          <a onClick={() => onPinTask(id)}>
            <span className={`icon-star`} />
          </a>
        )}
      </div>
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  onArchiveTask: PropTypes.func,
  onPinTask: PropTypes.func,
}