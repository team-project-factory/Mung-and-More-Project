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
  ModalStyle
} from './styles/EditStylecomp';



export const EditComp = () => {
  const [addressDetail, setAddressDetail] = useState('');
  const [isOpenPost, setIsOpenPost] = useState(false);

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
  };

  // 다음 api
  const ref = useRef(null);

  const postConfig = {
    ref: ref,
    onComplete: (data) => {
      console.log(data);
      // 검색후 해당 컴포넌트를 다시 안보이게 하는 부분
      //ref.current.style.display = "none";
    }
  };
  const postCode = ReactDaumPost(postConfig);


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            <AddressBtn onClick={postCode}>
              우편번호
            </AddressBtn>
            <button onClick={handleOpen}>Open modal</button>
            <ModalStyle
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <p>냥냥냥ㄴ얀얀얀얀야야~~~
              </p>
            </ModalStyle>
          </AddWrap>
          <div ref={ref}></div>
        </StyledFieldset>
      </ContentWrap>
    </Wrap>
  );
};
