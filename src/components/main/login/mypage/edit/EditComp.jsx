import React, { useState, useRef } from 'react';
import { Nav } from '../../../../../layout/Nav';
import DaumPostCode from 'react-daum-postcode';
import ReactDaumPost from 'react-daumpost-hook';
import Modal from '@mui/material/Modal';

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
  ModalInfo
} from './styles/EditStylecomp';

export const EditComp = () => {
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
                <div ref={ref}></div>
                <p>dididi</p>
              </ModalInfo>
            </ModalStyle>
          </AddWrap>
        </StyledFieldset>
      </ContentWrap>
    </Wrap>
  );
};
