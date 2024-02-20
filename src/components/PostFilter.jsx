import React from 'react';
import MySelect from './UI/Select/MySelect';
import MyInput from './UI/Input/MyInput';

export const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        placeholder="Поиск..."
        value={filter.query}
        onChange={e => setFilter({ ...filter, query: e.target.value})}
      />
      <MySelect
        value={filter.sort}
        onChange={(value) => setFilter({ ...filter, sort: value})}
        defaultValue="Сортировка"
        options={[
          { value: 'title', name: 'По названию' },
          { value: 'body', name: 'По описанию' },
        ]}
      />
    </div>
  );
}

export default PostFilter;
