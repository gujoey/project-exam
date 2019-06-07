import React from 'react';
import { Row, Col, UncontrolledTooltip } from 'reactstrap';

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
    handleSubmit: any;
}

export default class NewEstablishmentComp extends React.Component<NewEstablishmentCompProps>{
    constructor(props:any){
        super(props);

        this.handleValidation = this.handleValidation.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleValidation(inputRef:string){
        const app: any = this;        
        let inputValue: string = app.refs[inputRef].value;

        app.props.handleInputValidation(inputRef, inputValue);
    }
    handleSubmit(e:any){
        const app: any = this;
        app.props.handleSubmit(e);
    }
    render(){
        const app: any = this;
        let inputErr: string = "[ new-establishment__input--error ]";
        let textErrHide: string = "[ new-establishment__error-text ]"
        let textErrShow: string = "[ new-establishment__error-text--show ]"
        let validate = {
            estName:{
                inputErr: app.props.estNameErr ? inputErr : "",
                textErr: app.props.estNameErr ? textErrShow : textErrHide
            },
            email:{
                inputErr: app.props.emailErr ? inputErr : "",
                textErr: app.props.emailErr ? textErrShow : textErrHide
            },
            position:{
                latitude:{
                    inputErr: app.props.latitudeErr ? inputErr : "",
                    textErr: app.props.latitudeErr ? textErrShow : textErrHide
                },
                longitude:{
                    inputErr: app.props.longitudeErr ? inputErr : "",
                    textErr: app.props.longitudeErr ? textErrShow : textErrHide
                }
            },
            maxGuests:{
                inputErr: app.props.maxGuestsErr ? inputErr : "",
                textErr: app.props.maxGuestsErr ? textErrShow : textErrHide
            },
            price:{
                inputErr: app.props.priceErr ? inputErr : "",
                textErr: app.props.priceErr ? textErrShow : textErrHide
            },
            estId:{
                inputErr: app.props.estIdErr ? inputErr : "",
                textErr: app.props.estIdErr ? textErrShow : textErrHide
            },
            imageUrl:{
                inputErr: app.props.imageUrlErr ? inputErr : "",
                textErr: app.props.imageUrlErr ? textErrShow : textErrHide
            },
            description:{
                inputErr: app.props.descriptionErr ? inputErr : "",
                textErr: app.props.descriptionErr ? textErrShow : textErrHide
            }
        }

        return(
            <div>
                <form onSubmit={app.handleSubmit}>
                    <label htmlFor="estName">Establishment name <span className="[ new-establishment__input--required ]">*</span></label>
                    <input className={validate.estName.inputErr} id="estName" type="text" onBlur={(()=>{app.handleValidation("estName")})} ref="estName" placeholder="Establishment name"/>
                    <span className={validate.estName.textErr}>Please enter an establishment name</span>
                    <br/><br/>

                    <label htmlFor="email">Establishments e-mail adress <span className="[ new-establishment__input--required ]">*</span></label>
                    <input className={validate.email.inputErr} id="email" type="email" onBlur={(()=>{app.handleValidation("email")})} ref="email" placeholder="E-mail adress"/>
                    <span className={validate.email.textErr}>Please enter an valid email adress (e.g john@example.com)</span>
                    <br/><br/>
                    <Row>
                        <Col md="6">
                            <label htmlFor="latitude">Latitude <span className="[ new-establishment__input--required ]">*</span></label>
                            <input className={validate.position.latitude.inputErr} id="latitude" type="text" onBlur={(()=>{app.handleValidation("latitude")})} ref="latitude" placeholder="Establishment latitude"/>
                            <span className={validate.position.latitude.textErr}>Please enter a valid latitude position</span>
                        </Col>
                        <Col md="6">
                            <label htmlFor="longitude">Longitude <span className="[ new-establishment__input--required ]">*</span></label>
                            <input className={validate.position.longitude.inputErr} id="longitude" type="text" onBlur={(()=>{app.handleValidation("longitude")})} ref="longitude" placeholder="Establishment longitude"/>
                            <span className={validate.position.longitude.textErr}>Please enter a valid longitude position</span>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col md="4">
                            <label htmlFor="maxGuests">Max guests <span className="[ new-establishment__input--required ]">*</span></label>
                            <input className={validate.maxGuests.inputErr} id="maxGuests" type="text" onBlur={(()=>{app.handleValidation("maxGuests")})} ref="maxGuests" placeholder="max guests"/>
                            <span className={validate.maxGuests.textErr}>Please enter max guests for this establishment</span>
                        </Col>
                        <Col md="4">
                            <label htmlFor="price">Price per night in dollar <span className="[ new-establishment__input--required ]">*</span></label>
                            <input className={validate.price.inputErr} id="price" type="text" onBlur={(()=>{app.handleValidation("price")})} ref="price" placeholder="Price per night"/>
                            <span className={validate.price.textErr}>Please enter a price for this establishment</span>
                        </Col>
                        <Col md="4">
                            <label htmlFor="estId">Establishment id &nbsp;<strong id="estIdLabel">?</strong></label>
                            <input className={validate.estId.inputErr} id="estId" type="text" onBlur={(()=>{app.handleValidation("estId")})} ref="estId" placeholder="Establishment id"/>
                            <span className={validate.estId.textErr}>This id already exists on another establishment. Please provide a unique id</span>
                            <UncontrolledTooltip placement="top" target={"estIdLabel"}>
                                If you leave this field empty, an id will be automatically created for the establishment
     			 		    </UncontrolledTooltip>
                        </Col>
                    </Row>
                    <br/>

                    <label htmlFor="image">Image url <span className="[ new-establishment__input--required ]">*</span></label>
                    <input className={validate.imageUrl.inputErr} id="image" type="text" onBlur={(()=>{app.handleValidation("imageUrl")})} ref="imageUrl" placeholder="Image url"/>
                    <span className={validate.imageUrl.textErr}>Please enter a valid image url</span>
                    <br/><br/>

                    <label htmlFor="desctiption">Description <span className="[ new-establishment__input--required ]">*</span></label>
                    <textarea className={validate.description.inputErr} id="description" onBlur={(()=>{app.handleValidation("description")})} ref="description" placeholder="Description of establishment"/>
                    <span className={validate.description.textErr}>Please enter a description for this establishment</span>
                    <br/><br/>

                    <label htmlFor="foodService">Establishment offers food service</label>
                    <input id="foodService" type="checkbox" ref="foodService"/>
                    <br/>

                    <button className="[ new-establishment__button ]">Create establishment</button>
                </form>
            </div>
        );
    }
}