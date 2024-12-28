import React, { useState } from 'react';
import ProvinceSelectorModal from './province-selector-modal';
import { Button, ConfigProvider } from 'antd';
import { PRIMARY_COLOR } from '@mmcinema-ui/shared-common';
import TargetIcon from '../svg/target-icon';

const LocationSelect = () => {
  const [currentSelected, setSelected] = useState<'province' | 'near you'>('province');
  return (
    <div className="md:shadow-custom rounded-[0.5rem] border-gray-200 bg-white md:overflow-hidden md:border">
      <div className="relative z-10">
        <div className="flex items-center  pt-3 md:px-4">
          <div className="mr-3 hidden md:block">Vị trí</div>
          <div className="flex items-center gap-3">
            <div onClick={() => setSelected('province')} className='h-full flex items-center'><ProvinceSelectorModal currentSelected={currentSelected} />
            </div>
            <div onClick={() => setSelected('near you')} className='h-full'>
              <ConfigProvider
                theme={{
                  components: {
                    Button: {
                      defaultBorderColor: `${currentSelected === 'near you' ? `${PRIMARY_COLOR}` : '#d9d9d9'}`,
                      defaultColor: `${currentSelected === 'near you' ? `${PRIMARY_COLOR}` : ''}`,
                      boxShadow: '0 0 0 rgba(0, 0, 0, 0.02)'
                    }
                  }
                }}
              >
                <Button type="default" style={{ padding: 0 }} className="h-full w-28 flex">
                  <div className="flex items-center">
                    <div className=""><TargetIcon /></div>
                    <span className="">Gần bạn</span>
                  </div>
                </Button>
              </ConfigProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSelect;
