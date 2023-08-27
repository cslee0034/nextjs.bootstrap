import React from 'react';
import Link, { LinkTheme } from '@atoms/Link';
import Button, { ButtonSize, ButtonTheme, ButtonType } from '@atoms/Button';
import { useLoginStore } from '@/stores/login';

interface Props {}

const Header: React.FC<Props> = () => {
  /**
   * Mind that this function only re-renders Header.tsx
   */
  const { isLoggedIn, login, logout } = useLoginStore();
  const logginToggle = isLoggedIn ? logout : login;
  return (
    <header>
      <nav className="h-navbar bg-white shadow-md relative">
        <div className="mx-4 py-3 align-middle">
          <div className="flex items-center justify-between">
            <div className="mr-10">
              {/* Change to image later */}
              <Link href="/" theme={LinkTheme.LOGO}>
                Dev-Aid
              </Link>
            </div>
            <div className="flex justify-between items-center flex-grow">
              <div>
                <Link href="/content" theme={LinkTheme.DEFAULT}>
                  content
                </Link>
                <Link href="/content" theme={LinkTheme.DEFAULT}>
                  content
                </Link>
                <Link href="/content" theme={LinkTheme.DEFAULT}>
                  content
                </Link>
                <Link href="/content" theme={LinkTheme.DEFAULT}>
                  content
                </Link>
              </div>
              <Button
                onClick={() => {
                  logginToggle();
                }}
                type={ButtonType.BUTTON}
                theme={ButtonTheme.DEFAULT}
                size={ButtonSize.MEDIUM}
              >
                {isLoggedIn ? 'Logout' : 'Login'}
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
