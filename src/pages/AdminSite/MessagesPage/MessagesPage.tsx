import React from 'react';
import NavbarComp from './../../../components/AdminSite/NavbarComp/NavbarComp';
import MessagesComp from './../../../components/AdminSite/MessagesComp/MessagesComp';
import { contactApiUrl } from './../../../apiURLs/apiURLs';

export default class MessagesPage extends React.Component{
    constructor(props:any){
        super(props);

        this.state = {
            messagesObj:[],
            messages:[],
            showMore:{
                id: undefined,
                show: false
            }
        }

        this.showMore = this.showMore.bind(this);
    }
    componentDidMount(){
        const app: any = this;
        app.getData();
    }

    getData(){
        const app: any = this;
        fetch(contactApiUrl)
            .then(response=>{
                return response.json();
            })
            .then(result=>{
                app.setState({messagesObj:result})
            })
    }

    showMore(component:any){
        const app: any = this;
        if (component.props.arrayId === app.state.showMore.id && app.state.showMore.show===true){
            app.setState({
                showMore:{
                    show:false,
                    id:undefined,
                },
                messages: []
            });
        }else{
            console.log(false);
            app.setState({
                showMore:{
                    show:true,
                    id:component.props.arrayId,
                },
                messages: []
            });
        }
    }

    createMessages(){
        const app: any = this;
        let messages: any = app.state.messagesObj;

        for (let i:number=messages.length-1; i>=0; i--){
            if(messages[i].clientName){
                let showMore:boolean = app.state.showMore.id===i && app.state.showMore.show===true ? true : false;
                app.state.messages.push(
                    <MessagesComp
                        clientName={messages[i].clientName}
                        clientEmail={messages[i].email}
                        message={messages[i].message}
                        handleShowMoreClick={app.showMore}
                        showMore={showMore}
                        arrayId={i}
                        key={i}
                    />
                );
            }
        }
    }

    render(){
        const app: any = this;
        app.createMessages();

        return(
            <div>
                <NavbarComp currentPage={"messages"}/>

                <div className="[ admin-messages ]">
                    <h1 className="[ admin-messages__heading ]">Messages</h1><br/>
                    <div>
                        {app.state.messages}
                    </div>
                </div>
            </div>
        );
    }
}