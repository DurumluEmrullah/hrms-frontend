import React, {useEffect, useState} from "react";
import NavForGuest from "../../components/NavForGuest/NavForGuest";
import { Container } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";
import "./GuestLayout.css"
import SearchArea from "../../components/SearchArea/SearchArea";
import AdvertisementService from "../../services/AdvertisementService";
export default function GuestLayout() {
    const [advertisements, setAdvertisements] = useState({})
    useEffect(()=>{
        let advertisementService= new AdvertisementService()
        advertisementService.getAll().then(result=>setAdvertisements(result.data.data))
    },[])

  return (
    <div>
      <NavForGuest></NavForGuest>
      <SearchArea></SearchArea>
      <Container className="mt">

      <Grid >
          <Grid.Column floated="left" width={5}>
              <div className="custom-card clearfix">

                  <h3 className="custom-text clearfix"> Uzman</h3>
                  <p className="detail-text ">
                      {advertisements.length} iş ilanı
                  </p>
                  <p className="footer-text ">
                      İncelemek İçin Tıkla
                  </p>
                  <img src="https://aday-asset.mncdn.com/img/uzman-profil.png" alt=""/>
              </div>
          </Grid.Column>
          <Grid.Column floated="left" width={5}>
              <div className="custom-card clearfix">

                  <h3 className="custom-text clearfix"> Yönetici</h3>
                  <p className="detail-text ">
                      {advertisements.length} iş ilanı
                  </p>
                  <p className="footer-text ">
                      İncelemek İçin Tıkla
                  </p>
                  <img src="https://aday-asset.mncdn.com/img/yonetici-profil.png" alt=""/>
              </div>
          </Grid.Column>
          <Grid.Column floated="left" width={5}>
              <div className="custom-card clearfix">

                  <h3 className="custom-text clearfix"> Yeni Mezun</h3>
                  <p className="detail-text ">
                      {advertisements.length} iş ilanı
                  </p>
                  <p className="footer-text ">
                      İncelemek İçin Tıkla
                  </p>
                  <img src="https://aday-asset.mncdn.com/img/yeni-mezun-profil.png" alt=""/>
              </div>
          </Grid.Column>
          <Grid.Column floated="left" width={5}>
              <div className="custom-card clearfix">

                  <h3 className="custom-text clearfix">İşçi ve mavi yaka</h3>
                  <p className="detail-text ">
                      {advertisements.length} iş ilanı
                  </p>
                  <p className="footer-text ">
                      İncelemek İçin Tıkla
                  </p>
                  <img src="https://aday-asset.mncdn.com/img/isci-profil.png" alt=""/>
              </div>
          </Grid.Column>
          <Grid.Column floated="left" width={5}>
              <div className="custom-card clearfix">

                  <h3 className="custom-text clearfix"> Hizmet Personeli</h3>
                  <p className="detail-text ">
                      {advertisements.length} iş ilanı
                  </p>
                  <p className="footer-text ">
                      İncelemek İçin Tıkla
                  </p>
                  <img src="https://aday-asset.mncdn.com/img/hizmet-profil.png" alt=""/>
              </div>
          </Grid.Column>
          <Grid.Column floated="left" width={5}>
              <div className="custom-card clearfix" >

                  <h3 class="custom-text clearfix"> Engelli</h3>
                  <p class="detail-text ">
                      {advertisements.length} iş ilanı
                  </p>
                  <p className="footer-text ">
                      İncelemek İçin Tıkla
                  </p>
                  <img src="https://aday-asset.mncdn.com/img/engelli-profil.png" alt=""/>
              </div>
          </Grid.Column>

      </Grid>
      </Container>
    </div>
  );
}
