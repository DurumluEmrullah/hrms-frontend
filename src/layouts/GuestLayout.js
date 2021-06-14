import React from "react";
import NavForGuest from "../components/NavForGuest";
import { Container } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";
import MenuComponenet from "../components/MenuComponent";
import AdvertisementsPage from "../pages/AdvertisementsPage";

export default function GuestLayout() {
  return (
    <div>
      <NavForGuest></NavForGuest>
      <Container className="mt">
      <Grid>
          <Grid.Column floated="left" width={3}>
            <MenuComponenet></MenuComponenet>
          </Grid.Column>
          <Grid.Column floated="right" width={13}>
           <AdvertisementsPage></AdvertisementsPage>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}
