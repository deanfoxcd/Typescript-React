import { Child } from './Child';

function Parent() {
  return <Child color='red' onClick={() => console.log('clicked')} />;
}

export default Parent;
