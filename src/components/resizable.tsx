import './resizable.css';
import { ResizableBox, ResizableBoxProps } from 'react-resizable';

interface ResizableProps {
  direction: 'horizontal' | 'vertical';
}

const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
  let resizableProps: ResizableBoxProps;

  if(direction === 'horizontal') {
    resizableProps = {
      className: 'resize-horizontal',
      maxConstraints: [window.innerHeight * 0.2, Infinity],
      minConstraints: [window.innerHeight * 0.75, Infinity],
      height: Infinity,
      width: window.innerHeight * 0.75, 
      resizeHandles: ['e'],
    }
  } else {
    resizableProps = {
      maxConstraints: [Infinity, window.innerHeight * 0.95],
      minConstraints: [Infinity, 30],
      height: 300,
      width: Infinity, 
      resizeHandles: ['s'],
    }
  }

  return (
    <ResizableBox {...resizableProps}>
      {children}
    </ResizableBox>
  );
};

export default Resizable;
