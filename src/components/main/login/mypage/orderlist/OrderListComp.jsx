import React from 'react'
import { Wrap, ContentWrap, OrderWrap, Title, OderNum, OderInfo, ProductImg,
  ProductInfo, ProductState, Brand, Name, NumWrap, Num, Date, Delev

} from './styles/OrderStylecomp'
import { Nav } from '../../../../../layout/Nav'

export const OrderListComp = () => {
  return (
    <Wrap>
      <div style={{ position: "relative", top: "50px" }}>
        <Nav />
      </div>
      <Title>주문내역</Title>
      <ContentWrap>
        <OrderWrap>
          <OderNum>주문번호:  ORD20230429-7085698</OderNum>
          <OderInfo>
            {/* 상품이미지 */}
            <ProductImg/>
            {/* 브랜드/이름/가격 */}
            <ProductInfo>
              <Brand>브랜드</Brand>
              <Name>이름</Name>
              <NumWrap>
                <Num>가격 / </Num>
                <Num>수량</Num>
              </NumWrap>
            </ProductInfo>
            {/* 주문일자/배송상태 */}
            <ProductState>
              <Date>주문일자</Date>
              <Delev>배송상태</Delev>
            </ProductState>
          </OderInfo>
        </OrderWrap>
      </ContentWrap>
    </Wrap>
  )
}
