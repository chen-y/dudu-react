import React, { Children } from 'react';

interface TabsProps {
  activeKey?: string;
  onChange?: (activeKey: string) => void;
}

function Tabs(props: React.PropsWithChildren<TabsProps>) {
  console.log(props.children);
  return (
    <div>
      <div className="toggle-titles"></div>
      <div className="toggle-panels">
        {React.Children.map(props.children, (item) => {

          return item;
        })}
      </div>
    </div>
  );
}

export default Tabs;
