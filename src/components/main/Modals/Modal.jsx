import Modal from 'react-modal';
import ReactDaumPost from 'react-daumpost-hook';
import React, { useState, useRef, useEffect } from 'react';

export function AddressModal(props) {
    const [addressDetail, setAddressDetail] = useState('');
    const [isOpenPost, setIsOpenPost] = useState(false);
    const ref = useRef(null);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const onChangeOpenPost = () => {
        setIsOpenPost((prevIsOpenPost) => !prevIsOpenPost);
    };

    const onCompletePost = (data) => {
        let fullAddr = data.address;
        let extraAddr = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddr += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddr +=
                    extraAddr !== '' ? `, ${data.buildingName}` : data.buildingName;
            }
            fullAddr += extraAddr !== '' ? ` (${extraAddr})` : '';
        }

        setAddressDetail(fullAddr);
        setIsOpenPost(true);

        /*
        if (ref.current) {
            ref.current.style.display = 'none';
        }
        */
    };
    
    const postConfig = {
        ref: ref,
        onComplete: onCompletePost
    };
    const postCode = ReactDaumPost(postConfig);
    
    
    useEffect(() => {
        if(ref.current) {
        }
        postCode();
    });

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '400px',
            height: '178px'
        },
    };

    return (
        <>
        {
            props.isOpen && (
                <Modal isOpen={true} onRequestClose={props.onClose} style={customStyles}>
                    <div ref={ref}></div>
                </Modal>) 
        }
        </>
    );
};
