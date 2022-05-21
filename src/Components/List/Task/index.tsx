import React, { useCallback, useMemo, useState } from 'react';

import { useCore } from '../../../Provider/Core';
import { TaskProps } from '../../../Provider/Core/type';

import * as S from './style';
import CardTask from '../../Card/Task';
import { useForm } from 'react-hook-form';

const ListTask = () => {
  const { tasks, activeUser, setTasks } = useCore();
  const [title, setTitle] = useState('');

  const TaskList = useMemo(() => {
    const response = tasks?.map(
      (item: TaskProps) =>
        item.userId === activeUser?.id && (
          <CardTask title={item.title} completed={item.completed} id={item.id} />
        ),
    );

    return response;
  }, [tasks]);

  const handleGetInput = (e: any) => {
    setTitle(e.target.value);
  };

  const handleAddTodo = () => {
    const newItem = {
      userId: activeUser?.id,
      id: tasks.length + 1,
      title: title,
      completed: false,
    };
    setTasks([newItem, ...tasks]);
    setTitle('');
  };

  return (
    <S.Container>
      <S.FormAddTask>
        <input type='text' name='title' onChange={handleGetInput} value={title} />
        <button type='button' onClick={handleAddTodo}>
          teste
        </button>
      </S.FormAddTask>
      {TaskList}
    </S.Container>
  );
};

export default ListTask;
