import React from 'react';
import { Row, Col } from 'reactstrap';

interface NewEstablishmentCompProps{
    handleInputValidation: any;
    estNameErr: boolean;
    emailErr: boolean;
    latitudeErr: boolean;
    longitudeErr: boolean;
    maxGuestsErr: boolean;
    priceErr: boolean;
    estIdErr: boolean;
    imageUrlErr: boolean;
    descriptionErr: boolean;
}

export default class NewEstablishmentComp extends React.Component<NewEstablishmentCompProps>{
    constructor(props:any){
        super(props);

        this.handleValidation = this.handleValidation.bind(this);
    }

    handleValidation(inputRef:string){
        const app: any = this;        
        let inputValue: string = app.refs[inputRef].value;

        app.props.handleInputValidation(inputRef, inputValue);
    }
    render(){
        const app: any = this;
        let inputErr: string = "[ new-establishment__input--error ]";
        let validate = {
            estName:{
                inputErr: app.props.estNameErr ? inputErr : "",
                textErr: ""
            },
            email:{
                inputErr: app.props.emailErr ? inputErr : "",
                textErr: ""
            },
            position:{
                latitude:{
                    inputErr: app.props.latitudeErr ? inputErr : "",
                    textErr: ""
                },
                longitude:{
                    inputErr: app.props.longitudeErr ? inputErr : "",
                    textErr:""
                }
            },
            maxGuests:{
                inputErr: app.props.maxGuestsErr ? inputErr : "",
                textErr: ""
            },
            price:{
                inputErr: app.props.priceErr ? inputErr : "",
                textErr:""
            },
            estId:{
                inputErr: app.props.estIdErr ? inputErr : "",
                textErr:""
            },
            imageUrl:{
                inputErr:app.props.imageUrlErr ? inputErr : "",
                textErr:""
            },
            description:{
                inputErr: app.props.descriptionErr ? inputErr : "",
                textErr: ""
            }
        }

        return(
            <div>
                <form>
                    <label htmlFor="estName">Establishment name <span className="[ new-establishment__input--required ]">*</span></label>
                    <input className={validate.estName.inputErr} id="estName" type="text" onBlur={(()=>{app.handleValidation("estName")})} ref="estName" placeholder="Establishment name"/>
                    <br/><br/>

                    <label htmlFor="email">E-mail adress <span className="[ new-establishment__input--required ]">*</span></label>
                    <input className={validate.email.inputErr} id="email" type="email" onBlur={(()=>{app.handleValidation("email")})} ref="email" placeholder="E-mail adress"/>
                    <br/><br/>
                    <Row>
                        <Col md="6">
                            <label htmlFor="latitude">Latitude <span className="[ new-establishment__input--required ]">*</span></label>
                            <input className={validate.position.latitude.inputErr} id="latitude" type="text" onBlur={(()=>{app.handleValidation("latitude")})} ref="latitude" placeholder="Establishment latitude"/>
                        </Col>
                        <Col md="6">
                            <label htmlFor="longitude">Longitude <span className="[ new-establishment__input--required ]">*</span></label>
                            <input className={validate.position.longitude.inputErr} id="longitude" type="text" onBlur={(()=>{app.handleValidation("longitude")})} ref="longitude" placeholder="Establishment longitude"/>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col md="4">
                            <label htmlFor="maxGuests">Max guests <span className="[ new-establishment__input--required ]">*</span></label>
                            <input className={validate.maxGuests.inputErr} id="maxGuests" type="text" onBlur={(()=>{app.handleValidation("maxGuests")})} ref="maxGuests" placeholder="max guests"/>
                        </Col>
                        <Col md="4">
                            <label htmlFor="price">Price per night <span className="[ new-establishment__input--required ]">*</span></label>
                            <input className={validate.price.inputErr} id="price" type="text" onBlur={(()=>{app.handleValidation("price")})} ref="price" placeholder="Price per night"/>
                        </Col>
                        <Col md="4">
                            <label htmlFor="estId">Establishment id <span className="[ new-establishment__input--required ]">*</span></label>
                            <input className={validate.estId.inputErr} id="estId" type="text" onBlur={(()=>{app.handleValidation("estId")})} ref="estId" placeholder="Establishment id"/>
                        </Col>
                    </Row>
                    <br/>

                    <label htmlFor="image">Image url <span className="[ new-establishment__input--required ]">*</span></label>
                    <input className={validate.imageUrl.inputErr} id="image" type="text" onBlur={(()=>{app.handleValidation("imageUrl")})} ref="imageUrl" placeholder="Image url"/>
                    <br/><br/>

                    <label htmlFor="desctiption">Description <span className="[ new-establishment__input--required ]">*</span></label>
                    <textarea className={validate.description.inputErr} id="description" onBlur={(()=>{app.handleValidation("description")})} ref="description" placeholder="Description of establishment"/>
                    <br/><br/>

                    <label htmlFor="foodService">Establishment offers food service</label>
                    <input id="foodService" type="checkbox" ref="foodService"/>
                    <br/>

                    <button type="button">Create establishment</button>
                </form>
            </div>
        );
    }
}