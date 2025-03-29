import React from 'react';

import { Badge, Container, Heading, Text, Stack } from 'hyun-design-system';
import BarBox from '../common/BarBox';
import StepTitle from '../common/StepTitle';

const WorkExperience = () => {
  return (
    <Container className="section">
      <StepTitle title="Work Experience" />
      <div className="content__wrap">
        <div className="content-left content">
          <Stack direction="col" gap={1}>
            <Heading size={5} level="h3" color="primary">
              하이컨시
            </Heading>
            <Text className="fw--600">FE개발팀 / 웹 퍼블리셔</Text>
            <Text color="secondary">
              <a target="_blank" href="https://www.hiconsy.com/" className="text-underline">
                https://www.hiconsy.com/
              </a>
            </Text>
            <Text className="fw--300">2023.01.30 ~ 2024.12.06</Text>
          </Stack>
        </div>
        <div className="content-right content">
          <Stack direction="col" gap={8}>
            <Stack direction="col" gap={3}>
              <Heading size={6} level="h6" color="primary">
                Nuxt를 활용한 관리자 페이지 대시보드 구현
              </Heading>
              <BarBox>
                <Stack gap={2} direction="col">
                  <Stack direction="col" gap={1}>
                    <Text size="lg" color="primary" className="fw--600">
                      Description
                    </Text>
                    <ul className="list">
                      <li>
                        <Text>
                          온라인 강의, 배송, 환불, 결제 등을 관리할 수 있는 백오피스 대시보드를 Nuxt로 구현했습니다.
                        </Text>
                      </li>
                    </ul>
                  </Stack>
                  <Stack direction="col" gap={1}>
                    <Text size="lg" color="primary" className="fw--600">
                      What did I do
                    </Text>
                    <ul className="list">
                      <li>
                        <Text>Nuxt.js를 사용해 관리자 대시보드의 페이지 및 기능을 구현했습니다.</Text>
                      </li>
                      <li>
                        <Text>기존 디자인 시스템을 프로젝트 요구에 맞게 오버라이딩하여 적용했습니다.</Text>
                      </li>
                      <li>
                        <Text>VeeValidate와 Yup을 활용한 유효성 검사 기능을 구현했습니다.</Text>
                      </li>
                      <li>
                        <Text>
                          더미 데이터를 JS로 만들어 화면에 표시하는 작업을 진행하며, 데이터를 동적으로 렌더링 하는
                          방법을 경험했습니다.
                        </Text>
                      </li>
                    </ul>
                  </Stack>
                  <Stack direction="col" gap={1}>
                    <Text size="lg" color="primary" className="fw--600">
                      Tech Stack
                    </Text>
                    <ul className="list">
                      <li>
                        <Stack gap={1}>
                          <Badge text="Nuxt" size="sm" />
                          <Badge text="Design System" size="sm" />
                          <Badge text="VeeValidate" size="sm" />
                          <Badge text="Yup" size="sm" />
                        </Stack>
                      </li>
                    </ul>
                  </Stack>
                </Stack>
              </BarBox>
            </Stack>

            <Stack direction="col" gap={3}>
              <Heading size={6} level="h6" color="primary">
                비디오 스트리밍 기반 온라인 강의 홈페이지 구축
              </Heading>
              <BarBox>
                <Stack gap={2} direction="col">
                  <Stack direction="col" gap={1}>
                    <Text size="lg" color="primary" className="fw--600">
                      Description
                    </Text>
                    <ul className="list">
                      <li>
                        <Text>온라인 강의를 제공하는 비디오 스트리밍 기반 플랫폼 홈페이지를 구축했습니다.</Text>
                      </li>
                    </ul>
                  </Stack>
                  <Stack direction="col" gap={1}>
                    <Text size="lg" color="primary" className="fw--600">
                      What did I do
                    </Text>
                    <ul className="list">
                      <li>
                        <Text>강의 소개 페이지 개발</Text>
                      </li>
                      <li>
                        <Text>SEO 작업을 위해 meta 태그를 개선하는 작업을 했습니다.</Text>
                      </li>
                    </ul>
                  </Stack>
                  <Stack direction="col" gap={1}>
                    <Text size="lg" color="primary" className="fw--600">
                      Tech Stack
                    </Text>
                    <ul className="list">
                      <li>
                        <Stack gap={1}>
                          <Badge text="Nuxt" size="sm" />
                          <Badge text="SEO" size="sm" />
                          <Badge text="Design System" size="sm" />
                        </Stack>
                      </li>
                    </ul>
                  </Stack>
                </Stack>
              </BarBox>
            </Stack>

            <Stack direction="col" gap={3}>
              <Heading size={6} level="h6" color="primary">
                공통 컴포넌트 개발 및 디자인 시스템 라이브러리 유지보수
              </Heading>
              <BarBox>
                <Stack gap={2} direction="col">
                  <Stack direction="col" gap={1}>
                    <Text size="lg" color="primary" className="fw--600">
                      Description
                    </Text>
                    <ul className="list">
                      <li>
                        <Text>사내 프로젝트 전반에 사용될 공통 컴포넌트에 대한 디자인 시스템을 유지보수했습니다.</Text>
                      </li>
                    </ul>
                  </Stack>
                  <Stack direction="col" gap={1}>
                    <Text size="lg" color="primary" className="fw--600">
                      What did I do
                    </Text>
                    <ul className="list">
                      <li>
                        <Text>SCSS 함수 작성 및 활용으로 코드의 재사용성과 유지보수성 향상했습니다.</Text>
                      </li>
                      <li>
                        <Text>기존 디자인 시스템을 새로운 프로젝트에 맞게 오버라이딩하여 적용했습니다.</Text>
                      </li>
                      <li>
                        <Text>Vue 기반 컴포넌트 호출 방식 및 사용 가이드를 작성했습니다.</Text>
                      </li>
                    </ul>
                  </Stack>
                  <Stack direction="col" gap={1}>
                    <Text size="lg" color="primary" className="fw--600">
                      Tech Stack
                    </Text>
                    <ul className="list">
                      <li>
                        <Stack gap={1}>
                          <Badge text="Vue" size="sm" />
                          <Badge text="SCSS" size="sm" />
                          <Badge text="Storybook" size="sm" />
                        </Stack>
                      </li>
                    </ul>
                  </Stack>
                </Stack>
              </BarBox>
            </Stack>

            <Stack direction="col" gap={3}>
              <Heading size={6} level="h6" color="primary">
                통합 회원 인증 및 알림 메일 템플릿 개발
              </Heading>
              <BarBox>
                <Stack gap={2} direction="col">
                  <Stack direction="col" gap={1}>
                    <Text size="lg" color="primary" className="fw--600">
                      Description
                    </Text>
                    <ul className="list">
                      <li>
                        <Text>회원 인증 및 주요 이벤트 알림을 위한 메일 템플릿을 개발했습니다.</Text>
                      </li>
                    </ul>
                  </Stack>
                  <Stack direction="col" gap={1}>
                    <Text size="lg" color="primary" className="fw--600">
                      What did I do
                    </Text>
                    <ul className="list">
                      <li>
                        <Text>
                          회원 가입, 비밀번호 재설정, 계정 알림 등 주요 프로세스에 사용되는 메일 템플릿 개발했습니다.
                        </Text>
                      </li>
                      <li>
                        <Text>HTML/CSS 를 활용하여 다양한 디바이스에서 최적화된 이메일 디자인을 구현했습니다.</Text>
                      </li>
                      <li>
                        <Text>다양한 플랫폼에서의 메일 호환성을 고려한 테스트를 수행했습니다.</Text>
                      </li>
                    </ul>
                  </Stack>
                  <Stack direction="col" gap={1}>
                    <Text size="lg" color="primary" className="fw--600">
                      Tech Stack
                    </Text>
                    <ul className="list">
                      <li>
                        <Stack gap={1}>
                          <Badge text="HTML/CSS" size="sm" />
                        </Stack>
                      </li>
                    </ul>
                  </Stack>
                </Stack>
              </BarBox>
            </Stack>

            <Stack direction="col" gap={3}>
              <Heading size={6} level="h6" color="primary">
                수강 신청 및 컨설팅 페이지 유지보수, 성적 분석 시스템 구축
              </Heading>
              <BarBox>
                <Stack gap={2} direction="col">
                  <Stack direction="col" gap={1}>
                    <Text size="lg" color="primary" className="fw--600">
                      Description
                    </Text>
                    <ul className="list">
                      <li>
                        <Text>
                          학생 성적 데이터 시각화 및 컨설팅 페이지, 수강 신청 페이지 개발/유지보수를 수행했습니다.
                        </Text>
                      </li>
                    </ul>
                  </Stack>
                  <Stack direction="col" gap={1}>
                    <Text size="lg" color="primary" className="fw--600">
                      What did I do
                    </Text>
                    <ul className="list">
                      <li>
                        <Text>Chart.js를 활용한 학생별 모의고사 성적 추이 분석 그래프 개발 및 개선했습니다.</Text>
                      </li>
                      <li>
                        <Text>컨설팅 페이지 유지보수와 요구사항 기반 신규 기능을 추가했습니다.</Text>
                      </li>
                      <li>
                        <Text>수강 신청 페이지의 유지보수를 수행하며, 기능 개선 작업을 진행했습니다.</Text>
                      </li>
                    </ul>
                  </Stack>
                  <Stack direction="col" gap={1}>
                    <Text size="lg" color="primary" className="fw--600">
                      Tech Stack
                    </Text>
                    <ul className="list">
                      <li>
                        <Stack gap={1}>
                          <Badge text="Chart.js" size="sm" />
                          <Badge text="HTML/CSS" size="sm" />
                          <Badge text="GitHub Actions" size="sm" />
                        </Stack>
                      </li>
                    </ul>
                  </Stack>
                </Stack>
              </BarBox>
            </Stack>

            <Stack direction="col" gap={3}>
              <Heading size={6} level="h6" color="primary">
                도서 판매 플랫폼 유지보수 및 프로모션 페이지 개발
              </Heading>
              <BarBox>
                <Stack gap={2} direction="col">
                  <Stack direction="col" gap={1}>
                    <Text size="lg" color="primary" className="fw--600">
                      Description
                    </Text>
                    <ul className="list">
                      <li>
                        <Text>도서 판매 플랫폼의 전반적인 유지보수 및 개선 작업 수행했습니다.</Text>
                      </li>
                    </ul>
                  </Stack>
                  <Stack direction="col" gap={1}>
                    <Text size="lg" color="primary" className="fw--600">
                      What did I do
                    </Text>
                    <ul className="list">
                      <li>
                        <Text>도서 판매 상세페이지 UI 개편 및 사용자 경험 최적화했습니다.</Text>
                      </li>
                      <li>
                        <Text>시즌별 굿즈 프로모션 페이지 리뉴얼했습니다.</Text>
                      </li>
                      <li>
                        <Text>상시 운영되는 프로모션 페이지 신규 개발 및 배포했습니다.</Text>
                      </li>
                    </ul>
                  </Stack>
                  <Stack direction="col" gap={1}>
                    <Text size="lg" color="primary" className="fw--600">
                      Tech Stack
                    </Text>
                    <ul className="list">
                      <li>
                        <Stack gap={1}>
                          <Badge text="AOS" size="sm" />
                          <Badge text="HTML/CSS" size="sm" />
                          <Badge text="GitHub Actions" size="sm" />
                        </Stack>
                      </li>
                    </ul>
                  </Stack>
                </Stack>
              </BarBox>
            </Stack>
          </Stack>
        </div>
      </div>
    </Container>
  );
};

export default WorkExperience;
