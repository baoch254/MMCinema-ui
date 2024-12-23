'use client';
import React, { useState } from 'react';
import { Menu, MenuProps } from 'antd';
import { NavItems } from '../../constants/constant';

interface LevelKeysProps {
  key?: string;
  children?: LevelKeysProps[];
}

const getLevelKeys = (items1: LevelKeysProps[]) => {
  const key: Record<string, number> = {};
  const func = (items2: LevelKeysProps[], level = 1) => {
    items2.forEach((item) => {
      if (item.key) {
        key[item.key] = level;
      }
      if (item.children) {
        func(item.children, level + 1);
      }
    });
  };
  func(items1);
  return key;
};

const levelKeys = getLevelKeys(NavItems as LevelKeysProps[]);

const MenuTablet = () => {
  const [stateOpenKeys, setStateOpenKeys] = useState(['', '']);

  const onOpenChange: MenuProps['onOpenChange'] = (openKeys) => {
    const currentOpenKey = openKeys.find(
      (key) => stateOpenKeys.indexOf(key) === -1
    );
    // open
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);

      setStateOpenKeys(
        openKeys
          .filter((_, index) => index !== repeatIndex)
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey])
      );
    } else {
      setStateOpenKeys(openKeys);
    }
  };

  return (
    <div className="w-full h-[calc(100%-64px)]">
      <Menu
        style={{ width: '100%' }}
        mode="inline"
        openKeys={stateOpenKeys}
        items={NavItems}
        onOpenChange={onOpenChange}
        className="font-bold"
      />
    </div>
  );
};

export default MenuTablet;
