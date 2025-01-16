import React from 'react';

import { Badge, Container, Heading, Text, Stack } from 'hyun-design-system';
import StepTitle from '../common/StepTitle';

const OtherExperience = () => {
  return (
    <Container className="section">
      <StepTitle title="OtherExperience" />
      <div className="content__wrap">
        <div className="content">
          <Stack direction="col" gap={8}>
            <Stack direction="col" gap={2}>
              <Heading size={6} level="h6" color="primary" className="fw--600">
                Hyun-Design-System
              </Heading>
              <Stack gap={1}>
                <Badge text="React" size="sm" />
                <Badge text="Next" size="sm" />
                <Badge text="NPM" size="sm" />
                <Badge text="TypeScript" size="sm" />
              </Stack>
              <a href="https://hyun-design-system-five.vercel.app/" target="_blank" className="text-underline">
                https://hyun-design-system-five.vercel.app/
              </a>
              <ul className="list">
                <li className="fc--secondary fw--400">
                  통합회원 및 강의 관리를 위한 백오피스를 만들고 유지보수 했습니다
                </li>
              </ul>
            </Stack>
            <Stack direction="col" gap={2}>
              <Heading size={6} level="h6" color="primary" className="fw--600">
                Velog
              </Heading>
              <Stack gap={1}>
                <Badge text="주간 인기글" size="sm" />
                <Badge text="Study" size="sm" />
                <Badge text="Record" size="sm" />
              </Stack>
              <a href="https://velog.io/@_imhyunnn/" target="_blank" className="text-underline">
                https://velog.io/@_imhyunnn/
              </a>
              <ul className="list">
                <li className="fc--secondary fw--400">
                  통합회원 및 강의 관리를 위한 백오피스를 만들고 유지보수 했습니다
                </li>
              </ul>
            </Stack>
            <Stack direction="col" gap={2}>
              <Heading size={6} level="h6" color="primary" className="fw--600">
                대학교
              </Heading>
              <Stack gap={1}>
                <Badge text="React" size="sm" />
                <Badge text="Vue" size="sm" />
                <Badge text="TypeScript" size="sm" />
              </Stack>
              <ul className="list">
                <li className="fc--secondary fw--400">
                  통합회원 및 강의 관리를 위한 백오피스를 만들고 유지보수 했습니다
                </li>
              </ul>
            </Stack>
          </Stack>
        </div>
      </div>
    </Container>
  );
};

export default OtherExperience;
