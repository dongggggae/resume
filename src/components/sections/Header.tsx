import React from 'react';

import { Container, Heading, Text, Stack } from 'hyun-design-system';

const Header = () => {
  return (
    <header className="header mt-10">
      <Container className="header__container">
        <Stack direction="col" gap={0} className="header-left">
          <Heading size={4} level="h1" color="primary" className="fw--500">
            김동현
          </Heading>
          <Text color="secondary" size="lg" className="fw--300">
            웹 퍼블리셔
          </Text>
        </Stack>
        <div className="header-right">
          <Stack gap={2}>
            <a target="_blank" href="https://github.com/dongggggae" className="link-item">
              <i className="icon icon-github"></i>
            </a>
            <a target="_blank" href="https://velog.io/@_imhyunnn/posts" className="link-item">
              <i className="icon icon-velog"></i>
            </a>
          </Stack>
          <Stack direction="col" gap={0} className="align-items-end contact">
            <Text color="secondary">Phone: 010-7758-4867</Text>
            <Stack gap={1}>
              <Text color="secondary">Email:</Text>
              <a href="mailto:hyunnnn0822@gmail.com" target="_blank" className="text-underline">
                hyunnnn0822@gmail.com
              </a>
            </Stack>
          </Stack>
        </div>
      </Container>
    </header>
  );
};

export default Header;
