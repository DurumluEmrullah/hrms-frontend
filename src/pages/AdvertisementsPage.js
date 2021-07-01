import React, { useState, useEffect } from "react";
import { Card, Button } from "semantic-ui-react";
import AdvertisementService from "../services/AdvertisementService";

export default function AdvertisementsPage() {
  const [advertisements, setAdvertisements] = useState([]);

  useEffect(() => {
    let advertisementService = new AdvertisementService();
    advertisementService
      .getAdvertisements()
      .then((result) => setAdvertisements(result.data.data));
  });
  return (
    <div>
      {advertisements.map((advertisement) => (
        <Card fluid>
          <Card.Content>{advertisement.job.jobName}</Card.Content>
          <Card.Content description={advertisement.employer.companyName} />
          <Card.Content extra>
            <Button primary>İlanı Görüntüle</Button>
          </Card.Content>
        </Card>
      ))}
    </div>
  );
}
