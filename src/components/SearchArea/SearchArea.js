import React, {useEffect, useState} from "react";
import { Container } from "react-bootstrap";
import "./SearchArea.css";
import {Carousel,Card} from "react-bootstrap";
import AdvertisementService from "../../services/AdvertisementService";

export default function SearchArea() {
    const [advertisements, setAdvertisements] = useState({})
    useEffect(()=>{
        let advertisementService= new AdvertisementService()
        advertisementService.getAll().then(result=>setAdvertisements(result.data.data))
    },[])

    return (
    <div className="window">
      <div className="bg">
      <Container className=" ">
        <div class="ui list">
          <div class="item">
            <h2 class="ui header d-flex justify-content-start text-white">
              Senin için burada {advertisements.length} ilan var!
            </h2>
          </div>
          <div class="item mt-3">
            <div class="ui action input d-flex justify-content-start w-75">
              <input className="p-4" type="text" placeholder="Search..." />
              <button class="ui button bg-dark text-white">İş Bul</button>
            </div>
          </div>
        </div>

      </Container>

      </div>

      {/*<div className="ui list">*/}

      {/*  <div className="item mt-5">*/}
      {/*    <div className="carousel">*/}
      {/*      <Carousel>*/}
      {/*        <Carousel.Item>*/}
      {/*          <ul>*/}
      {/*            <li>*/}
      {/*              <div className="custom-card">meh</div>*/}
      {/*            </li>*/}
      {/*            <li>*/}
      {/*              <div className="custom-card">meh</div>*/}
      {/*            </li>*/}
      {/*            <li>*/}
      {/*              <div className="custom-card">meh</div>*/}
      {/*            </li>*/}
      {/*            <li>*/}
      {/*              <div className="custom-card">meh</div>*/}
      {/*            </li>*/}
      {/*            <li>*/}
      {/*              <div className="custom-card">meh</div>*/}
      {/*            </li>*/}
      {/*          </ul>*/}

      {/*        </Carousel.Item>*/}
      {/*        <Carousel.Item>*/}
      {/*          <ul>*/}
      {/*            <li>*/}
      {/*              <div className="custom-card">meh</div>*/}
      {/*            </li>*/}
      {/*            <li>*/}
      {/*              <div className="custom-card">meh</div>*/}
      {/*            </li>*/}
      {/*            <li>*/}
      {/*              <div className="custom-card">meh</div>*/}
      {/*            </li>*/}
      {/*            <li>*/}
      {/*              <div className="custom-card">meh</div>*/}
      {/*            </li>*/}
      {/*            <li>*/}
      {/*              <div className="custom-card">meh</div>*/}
      {/*            </li>*/}
      {/*          </ul>*/}
      {/*        </Carousel.Item>*/}
      {/*        <Carousel.Item>*/}
      {/*          <ul>*/}
      {/*            <li>*/}
      {/*              <div className="custom-card">meh</div>*/}
      {/*            </li>*/}
      {/*            <li>*/}
      {/*              <div className="custom-card">meh</div>*/}
      {/*            </li>*/}
      {/*            <li>*/}
      {/*              <div className="custom-card">meh</div>*/}
      {/*            </li>*/}
      {/*            <li>*/}
      {/*              <div className="custom-card">meh</div>*/}
      {/*            </li>*/}
      {/*            <li>*/}
      {/*              <div className="custom-card">meh</div>*/}
      {/*            </li>*/}
      {/*          </ul>*/}
      {/*        </Carousel.Item>*/}
      {/*      </Carousel>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}

    </div>
  );
}
