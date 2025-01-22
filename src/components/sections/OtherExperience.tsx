import React from 'react';

import { Badge, Container, Heading, Text, Stack } from 'hyun-design-system';
import BarBox from '../common/BarBox';
import StepTitle from '../common/StepTitle';

const OtherExperience = () => {
  return (
    <Container className="section other-experience__section">
      <StepTitle title="Other Experience" />
      <Stack direction="col" gap={8}>
        <div className="content__wrap">
          <div className="content-left content">
            <Stack direction="col" gap={1} className="experience-desc">
              <Heading size={6} level="h5" color="primary">
                Hyun-Design-System<span className="fc--information">.</span>
              </Heading>
              <a href="https://hyun-design-system-five.vercel.app/" target="_blank" className="text-underline">
                https://hyun-design-system-five.vercel.app/
              </a>
              <Text className="fw--300">2023.11.03 ~ ing</Text>
              <Stack gap={1}>
                <Badge text="React" size="sm" />
                <Badge text="Next.js" size="sm" />
                <Badge text="Scss" size="sm" />
                <Badge text="NPM" size="sm" />
                <Badge text="TypeScript" size="sm" />
              </Stack>
            </Stack>
          </div>
          <div className="content-right content">
            <BarBox>
              <Text className="quote mb-2 fw--600" size="lg" color="primary">
                공부하면서 만든 개인 라이브러리
              </Text>
              <ul className="list">
                <li>
                  <Text>
                    React와 TypeScript를 활용해 컴포넌트 라이브러리를 개발하고 NPM에 배포하며, 패키지 배포 프로세스
                    전반에 대한 실무 경험을 쌓았습니다.
                  </Text>
                </li>
                <li>
                  <Text>
                    SCSS의 함수 기능을 활용해 동적으로 클래스를 생성하는 시스템을 구현하여, 효율적인 유지보수가 가능한
                    스타일 관리 방식을 터득했습니다.
                  </Text>
                </li>
                <li>
                  <Text>
                    Next.js의 App Router 구조를 학습하며 Vercel을 통해 디자인 시스템에 접근 가능한 홈페이지를 배포한
                    경험이 있습니다.
                  </Text>
                </li>
                <li>
                  <Text>주간 다운로드 최고 2,200회를 기록했습니다.</Text>
                </li>
              </ul>
            </BarBox>
          </div>
        </div>
        <div className="content__wrap">
          <div className="content-left content">
            <Stack direction="col" gap={1} className="experience-desc">
              <Heading size={6} level="h6" color="primary">
                Velog<span className="fc--information">.</span>
              </Heading>
              <a href="https://velog.io/@_imhyunnn/" target="_blank" className="text-underline">
                https://velog.io/@_imhyunnn/
              </a>
              <Text className="fw--300">2023.11.03 ~ ing</Text>
              <Stack gap={1}>
                <Badge text="주간 인기글" size="sm" />
                <Badge text="Study" size="sm" />
                <Badge text="Markdown" size="sm" />
              </Stack>
            </Stack>
          </div>
          <div className="content-right content">
            <BarBox>
              <Text className="quote mb-2 fw--600" size="lg" color="primary">
                개인 기술 블로그
              </Text>
              <ul className="list">
                <li>
                  <Text>
                    개발 학습 내용을 Velog에 정리하며 기술 블로그 활동을 꾸준히 이어왔습니다.
                    <br /> 이 과정에서 마크다운 문법을 익히고 실습하며, 효율적인 문서 작성과 체계적인 형식화 방법을
                    터득했습니다.
                  </Text>
                </li>
                <li>
                  <Text>
                    취업 준비 중 작성한 기술 글이 주간 인기 글에 선정되어 큰 보람을 느꼈으며,
                    <br />
                    다른 사람들의 다양한 인사이트를 얻는 계기가 되었습니다.
                  </Text>
                </li>
              </ul>
            </BarBox>
          </div>
        </div>
      </Stack>
    </Container>
  );
};

export default OtherExperience;
