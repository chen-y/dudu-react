import React from 'react';

interface PanelProps {
  tabKey: string;
  title?: React.ReactNode;
}

function TabPanel(props: React.PropsWithChildren<PanelProps>) {
  return (
    <div>
      TabPanel
    </div>
  );
}

TabPanel.displayName = 'TabPanel';

export default TabPanel;
