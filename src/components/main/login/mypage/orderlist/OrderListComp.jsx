import React from 'react'
import { Wrap, ContentWrap, OrderWrap, Title, OderNum, OderInfo, ProductImg,
  ProductInfo, ProductState

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
              <p>브랜드</p>
              <p>이름</p>
              <p>가격</p>
            </ProductInfo>
            {/* 주문일자/배송상태 */}
            <ProductState>
              <p>주문일자</p>
              <p>배송상태</p>
            </ProductState>
          </OderInfo>
        </OrderWrap>
      </ContentWrap>
    </Wrap>
  )
}
