'use client';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/redux/store/store';
import { increment, decrement } from '@/lib/redux/slices/counterSlice';
import { useGetPostsQuery } from '@/lib/redux/api/jsonApi';

export default function Home() {

  const { data: posts, error, isLoading } = useGetPostsQuery(undefined);

 

  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();


  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching posts!</p>;

  return (

    <>

    <div>
    <h1>Posts</h1>
    <ul>
      {posts?.slice(0, 5).map((post: any) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  </div>
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>

    </>
  );
}
