import React from 'react';
import Subtitle, { SubtitleTheme } from '@atoms/Subtitle';
import Block from '@molecules/Block';
import Feature from '@organisms/Feature';
import { StoriesWrapper, StoriesHero, StoriesCol } from '@templates/Stories';

const Home: React.FC = () => (
  <div className={StoriesWrapper.DEFAULT}>
    <Feature
      className={StoriesHero.DEFAULT}
      imgSrc="https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
      altText="Image description"
      imgWidth={1360}
      imgHeight={640}
    >
      <Block
        title="Lorem Ipsum"
        button="Learn more"
        className="absolute z-10 top-1/4 right-20"
        buttonClassName="mt-8 mx-10"
      >
        <p>
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit... There is no one who loves pain itself,
          who seeks after it and wants to have it, simply because it is pain...
        </p>
      </Block>
    </Feature>

    <div className={StoriesCol.DEFAULT}>
      <Subtitle theme={SubtitleTheme.MEDIUM}>What is Lorem Ipsum?</Subtitle>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
    <div className={StoriesCol.DEFAULT}>
      <Subtitle theme={SubtitleTheme.MEDIUM}>Why do we use it?</Subtitle>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here, content here, making it look
        like readable English. Many desktop publishing packages and web page
        editors now use Lorem Ipsum as their default model text, and a search
        for lorem ipsum will uncover many web sites still in their infancy.
        Various versions have evolved over the years, sometimes by accident,
        sometimes on purpose (injected humour and the like).
      </p>
    </div>
  </div>
);

export default Home;
