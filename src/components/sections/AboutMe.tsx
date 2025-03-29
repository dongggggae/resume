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
            웹 퍼블리셔로 다양한 프로젝트를 진행하며, UI·UX 구현과 웹 표준·접근성을 고려한 마크업에 강점을 가지고
            있습니다.
          </Text>
          <Text color="secondary" size="lg">
            현재는 &nbsp;
            <span className="d-inline-flex h-stack gap-1 badge-box">
              <Badge text="React" size="sm" />,
              <Badge text="Vue" size="sm" />,
              <Badge text="TypeScript" size="sm" />
            </span>
            &nbsp;등을 학습하며 퍼블리셔로서의 역량을 더욱 강화하고 있습니다.
          </Text>
          <Text color="secondary" size="lg">
            디자인과 개발의 경계를 이해하며, 더 나은 사용자 경험을 제공하는 퍼블리셔가 되고자 합니다.
          </Text>
        </div>
      </div>
    </Container>
  );
};

export default AboutMe;
