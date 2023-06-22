import React from "react";
import styled, { keyframes } from "styled-components";

// 게시글 컴포넌트
import ListComp from "./EachListComp";

export default function FAQListComp() {
  // styled-components로 컴포넌트 정의
  // 전체를 감싸는 div
  const FAQ = styled.div`
    display: flex;
    justify-content: space-between;
    margin: auto;
    font-family: "Montserrat", "SUITE-Regular";
    margin-top: 80px;
    font-size: 1.25rem;
  `;

  // FAQ 항목 전체를 감싸는 div
  const ListSet = styled.div`
    margin: auto;
  `;

  return (
    <FAQ>
      <ListSet>
        <ListComp content="FAQ 게시판의 첫 번째 내용입니다." removeBorderTop>
          우리는 안고, 청춘의 것이다. 이상의 피가 못할 대한 천지는 그림자는
          튼튼하며, 속잎나고, 품으며, 것이다. 얼마나 얼마나 이상은 그리하였는가?
          인간에 위하여 보이는 갑 것이다. 그들은 위하여서, 영원히 천하를 못할
          하는 이성은 고행을 것이다. 넣는 귀는 위하여서, 기관과 것이다. 굳세게
          가슴에 대고, 곳으로 인간은 위하여, 천지는 말이다. 가슴이 거친 끓는 뼈
          이 대중을 천고에 아름다우냐? 할지니, 그들에게 군영과 운다. 남는 인생을
          우리 부패를 그들은 영락과 이상은 피다. 내려온 얼음과 인간의 우는
          이것이다. 우리 충분히 피가 그러므로 끝에 때에, 것이다. 속잎나고,
          이상을 천고에 보내는 대한 봄바람을 그들은 거선의 이것이다. 웅대한 내는
          투명하되 있으랴? 내려온 우리의 살 들어 가치를 실로 그들은 이상은
          인간은 뿐이다.
        </ListComp>
        <hr style={{border: '0.7px solid #f5f5f5', margin: '5px 0'}}/>
        <ListComp content="FAQ 게시판의 두 번째 내용입니다.">
          이상이 든 만물은 생생하며, 것이다. 하는 가지에 청춘은 인간은 방지하는
          무엇을 그들의 뭇 있는 것이다. 이상의 방지하는 보는 그들은 듣는다.
          발휘하기 별과 역사를 무엇을 끝까지 돋고, 그들에게 뿐이다. 것이 천고에
          끓는 풍부하게 이상의 꽃 피다. 청춘의 긴지라 같이 사라지지 청춘의
          소담스러운 바로 부패뿐이다. 남는 곳이 눈이 아니더면, 쓸쓸하랴? 같으며,
          열매를 것은 때에, 그들의 황금시대를 이상 있는가? 유소년에게서 보는
          가슴에 되려니와, 공자는 약동하다. 붙잡아 생명을 청춘의 따뜻한 장식하는
          우리 힘있다. 천지는 사람은 그러므로 우리의 장식하는 생명을 이상의
          있으랴? 발휘하기 위하여 이상이 보이는 천고에 그들에게 힘차게 실로
          굳세게 쓸쓸하랴? 피는 이는 그들은 풍부하게 청춘은 발휘하기 그들의
          운다. 인간이 뛰노는 못하다 이상의 사막이다. 꾸며 위하여서 품으며, 청춘
          일월과 예수는 봄바람이다. 갑 바이며, 열락의 위하여서. 청춘 뛰노는
          열락의 있을 아니다.
        </ListComp>
        <hr style={{border: '0.7px solid #f5f5f5', margin: '5px 0'}}/>
        <ListComp content="FAQ 게시판의 세 번째 내용입니다.">
          위하여서, 눈에 인생에 긴지라 그들의 미인을 사람은 위하여서. 인간의
          얼마나 크고 피고 것이다. 방지하는 곳으로 가슴에 힘차게 갑 위하여서.
          이상을 남는 그들은 가장 못할 이상 운다. 생생하며, 우리의 생명을
          이것이야말로 가슴이 고행을 설레는 황금시대다. 가슴이 이상이 싹이
          구하지 주는 청춘의 우리는 끓는다. 공자는 무엇을 들어 만물은
          뜨거운지라, 끝까지 가치를 무엇을 봄바람이다. 심장의 충분히 위하여,
          사랑의 주는 같이, 인간은 아니다. 피가 같으며, 피고, 것이다. 청춘의
          몸이 오직 대중을 얼마나 뜨거운지라, 더운지라 우리 속잎나고, 것이다.
          모래뿐일 얼마나 것은 뛰노는 피다. 더운지라 가치를 인간이 뜨거운지라,
          아니다. 끝에 착목한는 가치를 사는가 끝까지 하였으며, 꾸며 사라지지
          뿐이다. 돋고, 위하여 온갖 인간에 불어 아니더면, 것이다.
        </ListComp>
        <hr style={{border: '0.7px solid #f5f5f5', margin: '5px 0'}}/>
        <ListComp content="FAQ 게시판의 네 번째 내용입니다.">
          피고, 얼음이 같은 봄바람이다. 청춘에서만 기관과 그들은 이 천지는
          공자는 심장의 사는가 교향악이다. 못할 대한 용기가 보라. 위하여서 생의
          거선의 생생하며, 앞이 부패뿐이다. 든 열락의 뭇 바로 위하여 뿐이다.
          많이 능히 그들을 그들은 곳이 봄바람을 철환하였는가? 트고, 자신과
          산야에 칼이다. 구하지 온갖 천지는 피어나기 사막이다. 공자는 더운지라
          불어 꽃이 굳세게 않는 보라. 가는 주는 무엇을 없으면, 길을 맺어,
          황금시대다. 보이는 그들의 있으며, 사랑의 운다. 인도하겠다는 속에서
          그들에게 없는 피부가 이것이다. 청춘은 어디 무엇을 그들은 장식하는
          아니한 부패뿐이다. 때에, 그들을 웅대한 찾아다녀도, 우리는 위하여서.
          하는 위하여 설레는 간에 사막이다. 그것을 얼마나 그러므로 그들은 자신과
          관현악이며, 웅대한 풍부하게 사막이다.
        </ListComp>
        <hr style={{border: '0.7px solid #f5f5f5', margin: '5px 0'}}/>
        <ListComp content="FAQ 게시판의 다섯 번째 내용입니다.">
          않는 곳이 트고, 이상은 듣는다. 피가 보는 오아이스도 그들의 위하여서.
          생명을 꽃 되는 전인 미묘한 있는 그들의 것이다. 산야에 피에 공자는
          철환하였는가? 지혜는 실현에 속에서 풍부하게 있는 찾아다녀도, 싶이
          그리하였는가? 무한한 품었기 미인을 있으랴? 얼마나 피가 거친 열락의
          인생에 위하여, 부패뿐이다. 할지라도 따뜻한 열락의 황금시대를 청춘의
          공자는 날카로우나 아니다. 현저하게 이상의 이상이 보라. 새가
          소리다.이것은 귀는 주며, 그들은 같이, 이 풀이 인생에 철환하였는가?
          지혜는 끓는 뜨고, 이것은 구할 그들의 어디 방황하여도, 물방아 사막이다.
          구할 그들은 불어 곳이 발휘하기 끓는다. 뭇 사랑의 청춘을 어디 그들의
          것이 아니다. 것은 만물은 길을 그들의 방황하여도, 운다. 바로 위하여
          귀는 평화스러운 능히 것이다.
        </ListComp>
      </ListSet>
    </FAQ>
  );
}
