import React, { useState } from 'react';
import classes from "./Footerx.module.css";
import Footer from 'rc-footer';
import 'rc-footer/assets/index.css';
import { common } from '@material-ui/core/colors';

import WhatsAppIcon from '@material-ui/icons/WhatsApp';

import {
    WhatsappShareButton,
} from "react-share";


class Footerx extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
    }

    renderModal() {
        this.setState(() => { return { showModal: true } })
    }

    closeModal() {
        this.setState(() => { return { showModal: false } })
    }


    render() {

        return (
            <div>
                <div onClick={this.renderModal.bind(this)}>
                    <Footer
                    className={classes.Footer}
                        columns={[
                            {
                                title: "Thanks for visting! Please Share this application",
                                icon: (
                                    // <img src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg" />
                                    <WhatsappShareButton id={"whatsapp"} title='Co-Plasma Web Application' url="https://co-plasma.herokuapp.com/" ><WhatsAppIcon></WhatsAppIcon></WhatsappShareButton>
                                    
                                ),
                               
                                openExternal: false,

                            },
                        ]}
                        bottom="Made with ❤️ by SS"
                    />


                </div>
                {/* <FormModal show={this.state.showModal} onHide={this.closeModal.bind(this)} /> */}
            </div>
        );
    }
}
export default Footerx;