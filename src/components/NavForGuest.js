import React from "react";

import {
  Button,
  Dropdown,
  Menu,
  Container,
  Icon,
  Header,
} from "semantic-ui-react";

export default function NavForGuest() {
  return (
    <div>
      <Menu size="large" className="p-3" fixed="top">
        <Container>
          <Menu.Item>
            <Header as="h2">Cariyer.Net</Header>
          </Menu.Item>
          <Menu.Item>
            İş ara <Icon className="ml-2" name="search" size="large" />
          </Menu.Item>
          <Menu.Item name="Hakkımızda" />
          <Menu.Item >Neden Cariyer.Net</Menu.Item>
          <Menu.Menu position="right">
            <Dropdown className="bg-primary" item text="Aday ">
              <Dropdown.Menu>
                <Dropdown.Item>Giriş Yap</Dropdown.Item>
                <Dropdown.Item>Kayıt Ol</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown className="bg-warning ml-2" item text="İş Veren">
              <Dropdown.Menu>
                <Dropdown.Item>Giriş Yap</Dropdown.Item>
                <Dropdown.Item>Kayıt Ol</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
