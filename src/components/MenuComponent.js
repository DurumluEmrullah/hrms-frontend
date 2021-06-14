import React from "react";
import { Menu } from "semantic-ui-react";

export default function MenuComponenet() {
  return (
    <div className="mb">
      <Menu  pointing secondary vertical>
        <Menu.Item name="home" />
        <Menu.Item name="messages" />
        <Menu.Item name="friends" />

      </Menu>
    </div>
  );
}
