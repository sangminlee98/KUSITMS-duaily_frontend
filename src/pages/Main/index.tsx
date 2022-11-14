import React, { useEffect } from "react";
import jumbotImage2 from "@assets/jumboImage3.svg";
import logo from "@assets/logo.svg";
import styled from "styled-components";
import { motion } from "framer-motion";
import { MenuItemType } from "@types";
import { opacityVariants } from "@utils/variants";
import { dummy_house_data, dummy_review_data } from "@utils/dummy";
import { useNavigate } from "react-router-dom";
import HouseCard from "@components/HouseCard";
import ReviewCard from "@components/ReviewCard";
import Footer from "@components/Footer";

interface MainProps {
  setClickedMenu: React.Dispatch<React.SetStateAction<MenuItemType>>;
}

const DUMMY_HOUSE_DATA = dummy_house_data;
const DUMMY_REVIEW_DATA = dummy_review_data;

function Main({ setClickedMenu }: MainProps) {
  const navigate = useNavigate();
  useEffect(() => {
    setClickedMenu("duaily intro");
  }, [setClickedMenu]);
  return (
    <Container variants={opacityVariants} initial="initial" animate="mount">
      <JumbotronSection />
      <HouseSection>
        <HouseInfo>
          <HouseTitle>빈 집 매물</HouseTitle>
          <HouseLink onClick={() => navigate("/house")}>
            빈 집 더보기 &gt;
          </HouseLink>
        </HouseInfo>
        <HouseCardContainer>
          {DUMMY_HOUSE_DATA.map((house) => (
            <HouseCard
              key={house.id}
              houseImage={house.imageUrl}
              title={house.title}
              location={house.location}
              min_price={house.minPrice}
              max_price={house.maxPrice}
              upload_date={house.upload_date}
              author={house.author}
            />
          ))}
        </HouseCardContainer>
      </HouseSection>
      <ReviewSection>
        <ReviewInfo>
          <ReviewTitle>듀얼 라이프 생생 후기</ReviewTitle>
          <ReviewLink onClick={() => navigate("/community")}>
            후기 더보기 &gt;
          </ReviewLink>
        </ReviewInfo>
        <ReviewCardContainer>
          {DUMMY_REVIEW_DATA.map((review) => (
            <ReviewCard
              key={review.id}
              imageUrl={review.imageUrl}
              title={review.title}
              previewText={review.previewText}
              user={review.user}
            />
          ))}
        </ReviewCardContainer>
        <BottomTextContainer>
          <img src={logo} alt="logo" />
          <BottomText>
            <div>듀얼라이프 실현,</div>
            <div>이제는 듀얼리가 해결해드릴게요.</div>
          </BottomText>
        </BottomTextContainer>
      </ReviewSection>
      <Footer />
    </Container>
  );
}

export default Main;

const Container = styled(motion.div)`
  width: 100%;
  max-width: 1440px;
  min-height: 100%;
  margin: 0 auto;
`;
const JumbotronSection = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(${jumbotImage2});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const HouseSection = styled.div`
  width: 100%;
  padding: 60px 120px;
  background-color: #0453450c;
`;
const HouseInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
`;
const HouseTitle = styled.h1`
  color: ${(props) => props.theme.orange_color};
  font-size: 24px;
  font-weight: 900;
  text-decoration: underline;
  text-underline-position: under;
`;
const HouseLink = styled.p`
  color: ${(props) => props.theme.orange_color};
  font-size: 18px;
  font-weight: 900;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
const HouseCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 25px;
  column-gap: 20px;
  row-gap: 70px;
  margin-top: 55px;
`;
const ReviewSection = styled(HouseSection)`
  background-color: #ffb8000c;
`;
const ReviewInfo = styled(HouseInfo)``;
const ReviewTitle = styled(HouseTitle)`
  color: ${(props) => props.theme.green_color};
`;
const ReviewLink = styled(HouseLink)`
  color: ${(props) => props.theme.green_color};
`;
const ReviewCardContainer = styled(HouseCardContainer)``;
const BottomTextContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 150px 0 110px 0;
  height: 100px;
`;
const BottomText = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 30px;
  padding: 10px 0;
  height: 100%;
  color: ${(props) => props.theme.green_color};
  font-size: 24px;
  font-weight: 900;
  & > div {
    display: flex;
    align-items: center;
  }
`;
