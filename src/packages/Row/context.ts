import { createContext } from 'react';

interface LayoutConextProps {
  gutter?: number;
}

const layoutContext = createContext<LayoutConextProps>({});

export default layoutContext;
