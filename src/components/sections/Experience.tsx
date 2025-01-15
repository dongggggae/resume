import React from 'react';

import { Badge, Container, Heading, Text, Stack } from 'hyun-design-system';
import StepTitle from '../common/StepTitle';

const Experience = () => {
  return (
    <Container className="section">
      <StepTitle title="Experience" />
      <div className="content__wrap">
        <div className="content-left content">
          <Stack direction="col" gap={0}>
            <Heading size={5} level="h3" color="primary" className="fw--500">
              하이컨시
            </Heading>
            <Text className="fw--600">프론트 엔드 개발자</Text>
            <Text color="secondary">
              <a target="_blank" href="https://www.hiconsy.com/" className="text-underline">
                https://www.hiconsy.com/
              </a>
            </Text>
            <Text className="fw--300">2023.01.30 ~ 2024.12.06</Text>
          </Stack>
        </div>
        <div className="content-right content">
          <ul className="list">
            <li>Nuxt를 활용한 관리자 페이지 대시보드 구현</li>
            <li>비디오 스트리밍 기반 온라인 강의 UI 개발</li>
            <li>공통 컴포넌트 개발 및 디자인 시스템 라이브러리 유지보수</li>
            <li>통합 회원 인증/알림 메일 템플릿 시스템 구현</li>
            <li>Vue를 활용한 프로모션/이벤트 랜딩 페이지 개발</li>
            <li>상시 수강신청, 컨설팅 페이지 유지보수</li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Experience;
