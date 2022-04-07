import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardTitle,
    MDBCol
} from 'mdbreact';
import { Container } from 'reactstrap';

const TrendingBooks = (props) => {
    return (
        <Container>
            <MDBCol>
                <MDBCard style={{ width: "14rem" }}>
                    <MDBCardImage className="img-fluid" src={props.src} waves />
                    <MDBCardBody>
                        <MDBCardTitle>
                            {props.Title}
                        </MDBCardTitle>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </Container>
    )
}

export default TrendingBooks;