import React from 'react';
import { Button } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { useTranslation } from '@/shared/i18n';
import './TopBar.css';

interface TopBarProps {
  onOpenSettings: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ onOpenSettings }) => {
  const { t } = useTranslation();

  return (
    <header className="topbar">
      <div className="topbar-row" data-tauri-drag-region="deep">
        <span className="topbar-wordmark">Tool</span>

        <div className="topbar-actions" data-tauri-drag-region="false">
          <Button
            className="topbar-action-button"
            aria-label={t('nav.settings')}
            icon={<SettingOutlined />}
            onClick={onOpenSettings}
          />

        </div>
      </div>
    </header>
  );
};

export default TopBar;
