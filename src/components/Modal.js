import React, {component} from "react";
import styled from "styled-components";
import {ProductConsumer} from '../Context';
import {ButtonContainer} from './Button';
import {Link} from 'react-router-dom';

class Modal extends React.Component {
    render() {
        return(
            <ProductConsumer>
                {(value) => {
                    const {modalOpen, closeModal} = value;
                    const {img, title,price} = value.modalProduct;

                    if(!modalOpen) {
                        return null;
                    } else {
                        return(
                        <ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <div id="modal" className="col-8 mx-auto py-4 col-md-6 col-lg-4 text-center text-capitalize">
                                        <h5>Item added to the cart</h5>
                                        <img src={img} className="img-fluid" alt="produk"/>
                                        <h5>{title}</h5>
                                        <h5 className="text-muted">price : Rp. {price}</h5>
                                        <Link to='/' className="mr-3">
                                            <ButtonContainer onClick={() => {closeModal()}}>
                                                Continue Shopping
                                            </ButtonContainer>
                                        </Link>
                                        <Link to='/cart'>
                                            <ButtonContainer cart onClick={() => {closeModal()}}>
                                                Go to Cart
                                            </ButtonContainer>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ModalContainer>
                        );
                    }
                }}
            </ProductConsumer>
            // <div className="modal">
            //     <div className="modal-dialog">
            //         <div className="modal-content">
            //             <div className="modal-header">
            //                 <h5 className="modal-title">Modal title</h5>
            //                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            //                 </div>
            //             <div className="modal-body">
            //                 <p>Modal body text goes here.</p>
            //                 </div>
            //             <div className="modal-footer">
            //                 <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            //                 <button type="button" className="btn btn-primary">Save changes</button>
            //             </div>
            //         </div>
            //     </div>
            // </div>
        );
    }
}

export default Modal;

const ModalContainer = styled.div `
    position: fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background: rgba(0,0,0,0.3);
    display:flex;
    align-items:center;
    justify-content: center;
    #modal {
        background: var(--mainWhite);
    }
`;