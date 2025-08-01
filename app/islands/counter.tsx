import { useState } from 'hono/jsx';
import type { FC } from 'hono/jsx';

const Counter: FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
