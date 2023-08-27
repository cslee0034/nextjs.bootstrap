import React from 'react';
import Card, { CardSize, CardTheme } from '@atoms/Card';
import Button, { ButtonType, ButtonTheme, ButtonSize } from '@atoms/Button';
import Title, { TitleTheme } from '@atoms/Title';

interface Props {
  children?: React.ReactNode;
  className?: string;
  title: string;
  button?: string;
  buttonOnClick?: () => void;
  buttonClassName?: string;
}

const Block: React.FC<Props> = ({
  children,
  className = '',
  title,
  button,
  buttonOnClick = () => {},
  buttonClassName = '',
}) => (
  <Card className={className} theme={CardTheme.DEFAULT} size={CardSize.DEFAULT}>
    <Title theme={TitleTheme.MEDIUM}>{title}</Title>
    {children}
    {button && (
      <Button
        onClick={buttonOnClick}
        type={ButtonType.BUTTON}
        theme={ButtonTheme.DEFAULT}
        size={ButtonSize.MEDIUM}
        className={buttonClassName}
      >
        {button}
      </Button>
    )}
  </Card>
);

export default Block;
