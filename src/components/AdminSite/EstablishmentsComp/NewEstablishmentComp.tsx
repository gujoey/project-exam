import React from 'react';
import { Row, Col } from 'reactstrap';

export default class NewEstablishmentComp extends React.Component{
    render(){
        return(
            <div>
                <form>
                    <Row>
                        <Col md="6">
                            <label htmlFor="estName">Establishment name</label>
                            <input id="estName" type="text" placeholder="Establishment name"/>
                        </Col>

                        <Col md="6">
                            <label htmlFor="estId">Establishment id</label>
                            <input id="estId" type="text" placeholder="Establishment id"/>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col md="6">
                            <label htmlFor="latitude">Latitude</label>
                            <input id="latitude" type="text" placeholder="Establishment latitude"/>
                        </Col>
                        <Col md="6">
                            <label htmlFor="longitude">Longitude</label>
                            <input id="longitude" type="text" placeholder="Establishment longitude"/>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col md="6">
                            <label htmlFor="maxGuests">Max guests</label>
                            <input id="maxGuests" type="text" placeholder="max guests"/>
                        </Col>
                        <Col md="6">
                            <label htmlFor="price">Price per night</label>
                            <input id="price" type="text" placeholder="Price per night"/>
                        </Col>
                    </Row>

                    <label htmlFor="email">E-mail adress</label>
                    <input id="email" type="email" placeholder="E-mail adress"/>

                    <label htmlFor="image">Image url</label>
                    <input id="image" type="text" placeholder="Image url"/>

                    <label htmlFor="desctiption">Description</label>
                    <textarea id="description" placeholder="Description of establishment"/>

                    <label htmlFor="foodService">Establishment offers foodService</label>
                    <input id="foodService" type="checkbox"/>

                    <button type="button">Create establishment</button>
                </form>
            </div>
        );
    }
}