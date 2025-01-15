import React from 'react';

import { Badge, Container, Text, Stack } from 'hyun-design-system';
import StepTitle from '../common/StepTitle';

const AboutMe = () => {
  return (
    <Container className="section">
      <StepTitle title="About Me" />
      <div className="content__wrap">
        <div className="content-left content">
          <div className="profile-image"></div>
        </div>
        <div className="content-right content">
          <Text color="secondary">
            2년의 웹 퍼블리셔 경험을 바탕으로, 웹 페이지 구현 및 UI/UX 최적화 중심의{' '}
            <span className="fc--primary fw--700">프론트엔드 개발자</span>에 관심을 가지게 되었습니다.
          </Text>
          <Text color="secondary">
            HTML, CSS, JavaScript를 이용한 웹 구축과 프론트엔드 최적화 경험을 통해 &nbsp;
            <Stack gap={1} className="d-inline-flex badge-box">
              <Badge text="React" size="sm" />,
              <Badge text="Vue" size="sm" />,
              <Badge text="TypeScript" size="sm" />
            </Stack>
            &nbsp;등 최신 웹 기술을 학습하며 프론트엔드 개발자로의 전환을 목표로 하고 있습니다.
          </Text>
          <Text color="secondary">
            퍼블리셔로서 프로젝트의 처음부터 끝까지 참여하면서 프론트엔드 개발에 대한{' '}
            <span className="fw--700">관심과 역량</span>을 쌓았고, 앞으로는 더 효율적이고 확장 가능한 프론트엔드 시스템
            구축을 목표로 하고 있습니다.
          </Text>
        </div>
      </div>
    </Container>
  );
};

export default AboutMe;
