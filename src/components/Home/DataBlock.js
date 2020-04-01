import React from "react"
import { Card } from "react-bootstrap"
import { v1 as uuidv1 } from 'uuid';


const _data = [
    {
    cardLink:"https://www.google.com",
    src:"https://assets.blinkloader.com/3287797048/2988675947_3a5dzmx-1300-R.webp",
    cardTitle:"Card Title",
    cardText:"card Text"
    },
    {
    cardLink:"https://www.google.com",
    src:"https://uploads-ssl.webflow.com/5e35ec257c077b9ea1e069b3/5e35f56e7c077bd3a0e0e649_undraw_organize_resume_utk5-p-800.png",
    cardTitle:"Card Title",
    cardText:"card Text"
    },
    {
    cardLink:"https://www.google.com",
    src:"https://www.businesscloud.co.uk/images/comms/news/businesscloud/photos/16-03-2020/parsa.jpg",
    cardTitle:"Card Title",
    cardText:"card Text"
    },
    {
    src:"https://assets.blinkloader.com/3287797048/2988675947_3a5dzmx-1300-R.webp",
    cardTitle:"Card Title",
    cardText:"card Text"
    },
    {
    cardLink:"https://www.google.com",
    src:"https://assets.blinkloader.com/3287797048/2988675947_3a5dzmx-1300-R.webp",
    cardTitle:"Card Title",
    cardText:"card Text"
    }
];

export default () => (
    <div className="row data-block px-lg-0 px-3">
    <CardItems data={_data}/>
        <div>
        {
          // <MyCardItems data={_data}/>/}
        }
      </div>
  </div>
)

function CardItems(props) {
    const cardItems = props.data.map(function(data){
      return(
              <Card className="col-lg-4 col-md-6 col-sm-12" key={uuidv1()}>
                <Card.Img src={data.src} alt="Card image" />
                  <a href={data.cardLink}>
                    <div className="dimmer"></div>
                    <div className="card-center-text">
                      <span className="text-white">Center</span>
                    </div>
                    <div className="card-attributes">
                      <span className="card-ele top-left">TopLeft</span>
                      <span className="card-ele top-right">TopRight</span>
                      <span className="card-ele bottom-left">BottomLeft</span>
                      <span className="card-ele bottom-right">BottomRight</span>
                    </div>
                  </a>
              </Card>
      )
    });
    return (cardItems);
  }
