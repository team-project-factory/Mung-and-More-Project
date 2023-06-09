import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function FAQListComp() {
  // useState를 이용해 각 리스트를 클릭했을 때 상세 내용 표시
  // activeMore: 각 리스트 아이템의 표시/숨김 상태를 저장
  const [activeMore, setActiveMore] = useState([]);

  const handleMoreClick = (index) => {
    setActiveMore((prevActiveMore) => {
      const updatedActiveMore = [...prevActiveMore];
      updatedActiveMore[index] = !prevActiveMore[index];
      return updatedActiveMore;
    });
  };

  // styled-components로 컴포넌트 정의
  const FAQ = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: "Montserrat", "SUITE-Regular";
    margin-top: 50px;
    font-size: 1.25rem;
  `;

  const ListSet = styled.div`
    margin: auto;
  `;

  const List = styled.div`
    display: flex;
    justify-content: space-between;
    width: 815px;
    padding: 20px;
    border-top: 0.7px solid #c9c9c9;
    margin-bottom: 5px;
    padding-top: 25px;

    &:hover {
      cursor: pointer;
    }

    &:first-child {
      border: none;
    }
  `;

  const ListMore = styled.div`
    width: 815px;
    padding: 20px;
    border-radius: 7px;
    margin-bottom: 30px;
    display: ${(props) => (props.active ? "block" : "none")};
    font-size: 1.1rem;
    background-color: #c2dcf475;
  `;

  const Content = styled.div``;

  // Button에 적용될 애니메이션
  const BtnAnimation = keyframes`from {transform: rotate(0deg);} to {transform: rotate(180deg);}
  `;

  const Button = styled.div`
    transition: transform 0.2s linear;
    transform: ${(props) => (props.active ? "rotate(180deg)" : "rotate(0deg)")};
    animation: ${(props) =>
      props.active
        ? css`
            ${BtnAnimation} 0.3s linear
          `
        : "none"};
  `;

  const ActiveList = styled(List)`
    font-family: "SUITE-Bold";
    font-weight: bold;
  `;

  const DeactiveList = styled(List)`
    &:hover {
      font-family: "SUITE-Bold";
      font-weight: bold;
    }
  `;

  return (
    <FAQ>
      <ListSet>
        <List
          onClick={() => handleMoreClick(0)}
          className={activeMore[0] ? "active" : ""}
          as={activeMore[0] === true ? ActiveList : DeactiveList}
        >
          <Content>FAQ 첫 번째 내용입니다</Content>
          <Button active={activeMore[0]}>
            <FontAwesomeIcon icon={faAngleDown} />
          </Button>
        </List>

        <ListMore active={activeMore[0]}>
          있는 같이, 아름답고 열락의 뛰노는 있으랴? 사라지지 품었기 가는 뛰노는
          말이다. 열락의 이것은 이상 인생을 무한한 뼈 끝에 우리는 기관과
          쓸쓸하랴? 쓸쓸한 이상 곳으로 있는 실로 용기가 굳세게 보라. 이상
          이것이야말로 것은 예수는 품에 돋고, 교향악이다. 착목한는 있는 청춘은
          심장은 아니한 오아이스도 주는 목숨이 보라. 인도하겠다는 돋고, 이상
          사랑의 대한 무엇이 가치를 것은 봄바람을 위하여서. 속에서 것은 얼마나
          같은 이것이다. 수 노래하며 불어 위하여서, 못할 그들의 뜨고, 위하여
          부패뿐이다. 하였으며, 힘차게 못하다 어디 그들은 과실이 이것이다. 별과
          그와 찾아다녀도, 되는 붙잡아 그들에게 속에 사막이다. 위하여서
          원대하고, 튼튼하며, 풀이 밝은 것이다. 보는 석가는 가진 그들의
          위하여서.
        </ListMore>

        <List
          onClick={() => handleMoreClick(1)}
          className={activeMore[1] ? "active" : ""}
          as={activeMore[1] === true ? ActiveList : DeactiveList}
        >
          <Content>FAQ 두 번째 내용입니다</Content>
          <Button active={activeMore[1]}>
            <FontAwesomeIcon icon={faAngleDown} />
          </Button>
        </List>
        <ListMore active={activeMore[1]}>
          희망의 찾아 관현악이며, 못하다 산야에 보이는 장식하는 타오르고 힘있다.
          피어나기 어디 원대하고, 오직 보이는 대고, 설산에서 것이다. 있을 그들의
          돋고, 가진 봄바람이다. 인간에 청춘의 온갖 아니한 두기 눈에 우는 심장의
          못할 이것이다. 할지니, 오직 풀이 눈이 얼음에 영락과 설레는 찾아다녀도,
          것이다. 청춘의 없으면, 이는 소리다.이것은 천하를 오직 사막이다. 끝까지
          천지는 어디 눈이 그들의 원대하고, 돋고, 사랑의 쓸쓸하랴? 있으며,
          청춘을 청춘의 공자는 불러 반짝이는 끓는다. 행복스럽고 가지에 예수는
          사람은 넣는 그들의 칼이다. 꽃이 동산에는 얼음이 열락의 것이다. 같은
          얼마나 가치를 찾아다녀도, 방황하여도, 하였으며, 풍부하게 못하다 가장
          그리하였는가? 봄날의 주며, 우리 위하여, 하여도 사막이다. 사랑의 피부가
          놀이 청춘의 불어 하는 목숨을 뜨거운지라, 그들은 뿐이다.
        </ListMore>

        <List
          onClick={() => handleMoreClick(2)}
          className={activeMore[2] ? "active" : ""}
          as={activeMore[2] === true ? ActiveList : DeactiveList}
        >
          <Content>FAQ 세 번째 내용입니다</Content>
          <Content>
            <FontAwesomeIcon icon={faAngleDown} />
          </Content>
        </List>
        <ListMore active={activeMore[2]}>
          예가 따뜻한 인도하겠다는 청춘이 것이다. 위하여, 인생을 얼마나 무엇이
          평화스러운 길지 몸이 간에 창공에 사막이다. 과실이 희망의 끓는 미묘한
          보라. 만물은 심장의 보배를 있으며, 더운지라 이것이다. 끝에 목숨을
          얼마나 자신과 아름다우냐? 인간의 보배를 천자만홍이 끓는 인류의
          장식하는 피에 방황하여도, 꽃 것이다. 청춘이 이 가는 것은 따뜻한
          부패뿐이다. 너의 불러 같으며, 원질이 피고 황금시대다. 끓는 가치를 새가
          있는 것이다. 가치를 없으면 품으며, 꾸며 구하지 설레는 것이다. 인생에
          같은 불러 이상 곳이 같으며, 있으랴? 보배를 우리 뛰노는 모래뿐일
          것이다. 구할 뼈 품에 밝은 무엇을 전인 같이 얼마나 이것이야말로 듣는다
        </ListMore>

        <List
          onClick={() => handleMoreClick(3)}
          className={activeMore[3] ? "active" : ""}
          as={activeMore[3] === true ? ActiveList : DeactiveList}
        >
          <Content>FAQ 네 번째 내용입니다</Content>
          <Content>
            <FontAwesomeIcon icon={faAngleDown} />
          </Content>
        </List>
        <ListMore active={activeMore[3]}>
          이 넣는 얼음 인생을 운다. 그들에게 밥을 봄바람을 이것이다. 구하기 어디
          그들의 그들은 가진 소담스러운 내려온 충분히 끓는다. 크고 풍부하게
          위하여, 뭇 너의 속잎나고, 봄날의 이상의 살았으며, 사막이다. 구할
          생명을 같이, 않는 얼마나 소담스러운 때문이다. 청춘 얼마나 얼마나 끓는
          우리의 청춘에서만 인간의 청춘을 따뜻한 것이다. 긴지라 만물은 맺어,
          교향악이다. 하는 것은 품에 방지하는 없으면 튼튼하며, 고행을 풍부하게
          원대하고, 아니다. 거친 이것을 기쁘며, 속잎나고, 그러므로 길을
          그리하였는가? 무엇을 오직 수 것이다. 싸인 사람은 그들은 그림자는
          되려니와, 무한한 청춘의 찾아 보라. 이것은 천지는 사랑의 그들은 봄날의
          힘차게 피에 품고 말이다. 일월과 뜨고, 대중을 기쁘며, 구하지 온갖 이
          것이다.
        </ListMore>

        <List
          onClick={() => handleMoreClick(4)}
          className={activeMore[4] ? "active" : ""}
          as={activeMore[4] === true ? ActiveList : DeactiveList}
        >
          <Content>FAQ 다섯 번째 내용입니다</Content>
          <Content>
            <FontAwesomeIcon icon={faAngleDown} />
          </Content>
        </List>
        <ListMore active={activeMore[4]}>
          발휘하기 더운지라 별과 뭇 꽃 현저하게 오직 불어 뿐이다. 아니더면, 오직
          품으며, 너의 칼이다. 얼음이 앞이 인생에 따뜻한 되려니와, 힘차게 끓는
          말이다. 속잎나고, 얼음에 타오르고 뼈 때문이다. 아니더면, 이상의
          노래하며 위하여서. 밝은 영락과 이상의 아니더면, 봄바람이다. 얼마나
          보이는 피어나는 구하지 인간이 우리 피고 못할 보는 보라. 풀밭에 이것은
          찾아 피에 아니다. 너의 쓸쓸한 보이는 얼음 사라지지 없으면 끓는다. 길지
          이것을 그것을 피고 고행을 살았으며, 인간에 새 쓸쓸하랴? 반짝이는 청춘
          피어나는 뿐이다. 꽃이 사랑의 가는 청춘은 불러 시들어 있는 그들에게
          싸인 봄바람이다. 무엇을 인생을 청춘의 아름답고 오아이스도 보라.
        </ListMore>
      </ListSet>
    </FAQ>
  );
}
