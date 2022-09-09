import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';
import { FadeTransform } from 'react-animation-components';

function RenderCard({item}) {
    return(
        <FadeTransform
        in
        transformProps={{
            exitTransform: 'scale(0.2) translateY(-50%)'
        }}>
        <Card>
            <CardImg src={baseUrl + item.image} />
            <CardBody>
            <CardTitle>{item.name}</CardTitle>
            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
            <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
        </FadeTransform>
    );

}

function Home(props) {
    if (props.isDishLoading || props.isLeaderLoading) {
        return(
                <Loading />
        );
    }
    else if (props.dishesErrMess || props.leadersErrMess) {
        return(
                <h4>{props.dishesErrMess}</h4>
        );
    }
    else if (props.leadersErrMess) {
        return(
                <h4>{props.leadersErrMess}</h4>
        );
    }
    else  {
        return(
            <div className="container">
                <div className="row align-items-start">
                    <div className="col-12 col-md m-1">
                        <RenderCard item={props.dish} isLoading={props.dishesLoading} errMess={props.dishesErrMess}/>
                    </div>
                    <div className="col-12 col-md m-1">
                        <RenderCard item={props.promotion} isLoading={props.dishesLoading} errMess={props.dishesErrMess}/>
                    </div>
                    <div className="col-12 col-md m-1">
                        <RenderCard item={props.leader} isLoading={props.dishesLoading} errMess={props.dishesErrMess}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;