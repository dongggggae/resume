import React from 'react';

import { Badge, Container, Text } from 'hyun-design-system';
import StepTitle from '../common/StepTitle';

const AboutMe = () => {
  return (
    <Container className="section">
      <StepTitle title="About Me" />
      <div className="content__wrap">
        <div className="content-left content">
          <div className="profile-image">
            <span className="img"></span>
          </div>
        </div>
        <div className="content-right content">
          <Text color="secondary" size="lg">
            웹 퍼블리셔로 2년간 다양한 프로젝트를 진행하면서 자연스럽게 &nbsp;
            <span className="fc--primary fw--700">웹 퍼블리셔</span>에 대한 관심을 가지게 되었습니다.
          </Text>
          <Text color="secondary" size="lg">
            현재는 &nbsp;
            <span className="d-inline-flex h-stack gap-1 badge-box">
              <Badge text="React" size="sm" />,
              <Badge text="Vue" size="sm" />,
              <Badge text="TypeScript" size="sm" />
            </span>
            &nbsp;를 학습하며 개발자로서의 역량을 키워가고 있습니다.
          </Text>
          <Text color="secondary" size="lg">
            저는 웹 퍼블리셔로서 쌓은 <span className="fc--primary fw--700">경험</span>과 새롭게 배울 프론트엔드
            개발자로서의 <span className="fc--primary fw--700">역량</span>을 합쳐, 더 나은 사용자 경험을 만들어내는
            개발자가 되고 싶습니다.
          </Text>
        </div>
      </div>
    </Container>
  );
};

export default AboutMe;
