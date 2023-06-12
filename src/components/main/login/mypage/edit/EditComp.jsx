import React, { useState, useRef } from 'react';
import { Nav } from '../../../../../layout/Nav';
import DaumPostCode from 'react-daum-postcode';
import ReactDaumPost from 'react-daumpost-hook';
import Modal from '@mui/material/Modal';
import { AddressModal } from '../../../Modals/Modal';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../../../../data/firebase';


import {
  Wrap,
  ContentWrap,
  Title,
  StyledFieldset,
  StyledLabel,
  StyledWrapper,
  StyledInput,
  AddressBtn,
  AddWrap,
  PostCodeStyle,
  ModalStyle,
  ModalInfo,
  StyledInputInfo, Submit
} from './styles/EditStylecomp';

export const EditComp = () => {
  const [addressDetail, setAddressDetail] = useState('');
  const [infoAddress, setInfoAddress] = useState('');

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
    setIsOpenPost(false);

    if (ref.current) {
      ref.current.style.display = 'none';
    }
  };

  const postConfig = {
    ref: ref,
    onComplete: onCompletePost
  };
  const postCode = ReactDaumPost(postConfig);

  const saveAddress = (address) => {
    try {
      const addressCollection = collection(db, "addresses");
      addDoc(addressCollection, address);
    } catch (error) {
      console.error("Error saving address:", error);
    }
  };

  const handleSaveAddress = () => {
    const address = {
      postalCode: addressDetail,
      detail: infoAddress
    };
    saveAddress(address);
  };

  return (
    <Wrap>
      <div style={{ position: 'relative', top: '50px' }}>
        <Nav />
      </div>
      <Title>배송지 수정</Title>
      <ContentWrap>
        {/* 우편번호 */}
        <StyledFieldset>
          <StyledLabel>우편번호</StyledLabel>
          <AddWrap>
            <StyledWrapper>
              <StyledInput
                id="email"
                aria-invalid="false"
                autoComplete="username"
                placeholder="주소를 입력해주세요"
                inputProps={{
                  maxLength: 60,
                  autoComplete: 'off',
                }}
                variant="outlined"
                value={addressDetail}
                onChange={(e) => setAddressDetail(e.target.value)}
              />
            </StyledWrapper>
            <AddressBtn onClick={postCode}>우편번호</AddressBtn>
            <ModalStyle
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <ModalInfo>
                <p>dididi</p>
              </ModalInfo>
            </ModalStyle>
          </AddWrap>
          <div ref={ref}></div>
        </StyledFieldset>
        {/* 상세주소 1 */}
        <StyledFieldset>
          <StyledLabel>상세주소</StyledLabel>
          <AddWrap>
            <StyledWrapper>
              <StyledInputInfo
                id="email"
                aria-invalid="false"
                autoComplete="username"
                placeholder="상세주소를 입력해주세요"
                inputProps={{
                  maxLength: 60,
                  autoComplete: 'off',
                }}
                variant="outlined"
                value={infoAddress}
                onChange={(e) => setInfoAddress(e.target.value)}
              />
            </StyledWrapper>
          </AddWrap>
          <div ref={ref}></div>
        </StyledFieldset>
        
        <div style={{textAlign:"right"}}>
          <Submit>저장하기</Submit>
        </div>
        
      </ContentWrap>
    </Wrap>
  );
};
