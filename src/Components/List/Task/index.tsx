import React, { useMemo } from 'react';

import { useCore } from '../../../Provider/Core';
import { TaskProps } from '../../../Provider/Core/type';

import * as S from './style';
import CardTask from '../../Card/Task';

const ListTask = () => {
  const { tasks, activeUser } = useCore();

  const TaskList = useMemo(() => {
    const response = tasks?.map(
      (item: TaskProps) =>
        item.userId === activeUser?.id && (
          <CardTask title={item.title} completed={item.completed} />
        ),
    );

    return response;
  }, [tasks]);

  return <S.Container>{TaskList}</S.Container>;
};

export default ListTask;
