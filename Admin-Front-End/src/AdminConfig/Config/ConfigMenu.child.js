import React from "react";
import { Tabs, Button, Input } from "antd";

const { TabPane } = Tabs;

class MenuChild extends React.Component {
   constructor(props) {
      super(props);
      this.newTabIndex = 0;
      const panes = [
         { title: "Something", content: <div>something</div>, key: "1" },
      ];
      this.state = {
         activeKey: panes[0].key,
         panes,
      };
   }

   onChange = (activeKey) => {
      this.setState({ activeKey });
   };

   onEdit = (targetKey, action) => {
      this[action](targetKey);
   };

   add = () => {
      const { panes } = this.state;
      const activeKey = `newTab${this.newTabIndex++}`;
      panes.push({ title: "New Tab", content: "New Tab Pane", key: activeKey });
      this.setState({ panes, activeKey });
   };

   remove = (targetKey) => {
      let { activeKey } = this.state;
      let lastIndex;
      this.state.panes.forEach((pane, i) => {
         if (pane.key === targetKey) {
            lastIndex = i - 1;
         }
      });
      const panes = this.state.panes.filter((pane) => pane.key !== targetKey);
      if (panes.length && activeKey === targetKey) {
         if (lastIndex >= 0) {
            activeKey = panes[lastIndex].key;
         } else {
            activeKey = panes[0].key;
         }
      }
      this.setState({ panes, activeKey });
   };

   render() {
      return (
         <div>
            <div style={{ marginBottom: 16 }}>
               <Input
                  placeholder="Name subMenu is?"
                  style={{ width: "200px" }}
               />
               <Button onClick={this.add} className="ml-2">
                  Add New SubMenu
               </Button>
            </div>
            <Tabs
               hideAdd
               onChange={this.onChange}
               activeKey={this.state.activeKey}
               type="editable-card"
               onEdit={this.onEdit}
            >
               {this.state.panes.map((pane) => (
                  <TabPane tab={pane.title} key={pane.key}>
                     {pane.content}
                  </TabPane>
               ))}
            </Tabs>
         </div>
      );
   }
}

export default MenuChild;
