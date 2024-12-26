import type { MenuProps } from 'antd';

export type MenuItem = Required<MenuProps>['items'][number];
export const CONTENTS_MAX_WIDTH = 'max-w-6xl';

export interface MenuPropsWithTitle extends MenuProps {
  title: string,
}

export const scheduleItems: MenuPropsWithTitle = {
  items: [
    {
      label: 'Lịch chiếu phim hôm nay',
      key: 'schedule1'
    },
    {
      label: 'Phim đang chiếu',
      key: 'schedule2'
    }
    ,
    {
      label: 'Phim sắp chiếu',
      key: 'schedule3'
    }
  ],
  title: 'Lịch chiếu'
};

export const cinemaItems: MenuPropsWithTitle = {
  items: [
    {
      label: 'Rạp chiếu phim gần đây',
      key: 'cinema1'
    },
    {
      label: 'CGV',
      key: 'cinema2'
    }
    ,
    {
      label: 'Lotte Cinema',
      key: 'cinema3'
    }
    ,
    {
      label: 'BHD Star',
      key: 'cinema4'
    }
    ,
    {
      label: 'Galaxy Cinema',
      key: 'cinema5'
    }
    ,
    {
      label: 'Beta Cinemas',
      key: 'cinema6'
    }
    ,
    {
      label: 'Cinestar',
      key: 'cinema7'
    }
    ,
    {
      label: 'DCINE',
      key: 'cinema8'
    }
    ,
    {
      label: 'MegaGS',
      key: 'cinema9'
    }
    ,
    {
      label: 'Cinemax',
      key: 'cinema10'
    }

  ],
  title: 'Rạp chiếu'
};

export const blogItems: MenuPropsWithTitle = {
  items: [
    {
      label: 'Blog điện ảnh',
      key: 'blog1'
    },
    {
      label: 'Phim chiếu rạp',
      key:
        'blog2'
    }
    ,
    {
      label: 'Tổng hợp phim',
      key:
        'blog3'
    }
    ,
    {
      label: 'Phim Netflix',
      key:
        'blog4'
    }

  ],
  title: 'Blog phim'
};

export const NavItems: MenuItem[] = [
  {
    key: '1',
    label: `${scheduleItems['title']}`,
    children: scheduleItems['items']
  },
  {
    key: '2',
    label: `${cinemaItems['title']}`,
    children: cinemaItems['items']
  },
  {
    key: 'nodrop1', label: 'Phim chiếu'
  },
  {
    key: 'nodrop2', label: 'Review phim'
  },
  {
    key: 'nodrop3', label: 'Top phim'
  },
  {
    key: '3',
    label: `${blogItems['title']}`,
    children: blogItems['items']
  }
];

export const genres = [
  {
    'id': 28,
    'name': 'Hành động'
  },
  {
    'id': 12,
    'name': 'Phiêu lưu'
  },
  {
    'id': 16,
    'name': 'Hoạt hình'
  },
  {
    'id': 35,
    'name': 'Hài'
  },
  {
    'id': 80,
    'name': 'Tội phạm'
  },
  {
    'id': 99,
    'name': 'Tài liệu'
  },
  {
    'id': 18,
    'name': 'Chính kịch'
  },
  {
    'id': 10751,
    'name': 'Gia đình'
  },
  {
    'id': 14,
    'name': 'Kỳ ảo'
  },
  {
    'id': 36,
    'name': 'Lịch sử'
  },
  {
    'id': 27,
    'name': 'Kinh dị'
  },
  {
    'id': 10402,
    'name': 'Âm nhạc'
  },
  {
    'id': 9648,
    'name': 'Bí ẩn'
  },
  {
    'id': 10749,
    'name': 'Lãng mạn'
  },
  {
    'id': 878,
    'name': 'Khoa học giả tưởng'
  },
  {
    'id': 10770,
    'name': 'TV Movie'
  },
  {
    'id': 53,
    'name': 'Hồi hộp'
  },
  {
    'id': 10752,
    'name': 'Chiến tranh'
  },
  {
    'id': 37,
    'name': 'Vùng tây'
  }
];

export interface MovieType {
  adult: boolean,
  backdrop_path: string,
  genre_ids: Array<number>,
  id: number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}

export const PROVINCES = [
  'Tp. Hồ Chí Minh', 'Hà Nội', 'Đà Nẵng', 'Đồng Nai', 'Lạng Sơn', 'Bình Dương',
  'An Giang',
  'Bà Rịa - Vũng Tàu',
  'Bắc Giang',
  'Bắc Kạn',
  'Bạc Liêu',
  'Bắc Ninh',
  'Bến Tre',
  'Bình Định',
  'Bình Phước',
  'Bình Thuận',
  'Cà Mau',
  'Cần Thơ',
  'Cao Bằng',
  'Đắk Lắk',
  'Đắk Nông',
  'Điện Biên',
  'Đồng Tháp',
  'Gia Lai',
  'Hà Giang',
  'Hà Nam',
  'Hà Tĩnh',
  'Hải Dương',
  'Hải Phòng',
  'Hậu Giang',
  'Hòa Bình',
  'Hưng Yên',
  'Khánh Hòa',
  'Kiên Giang',
  'Kon Tum',
  'Lai Châu',
  'Lâm Đồng',
  'Lào Cai',
  'Long An',
  'Nam Định',
  'Nghệ An',
  'Ninh Bình',
  'Ninh Thuận',
  'Phú Thọ',
  'Phú Yên',
  'Quảng Bình',
  'Quảng Nam',
  'Quảng Ngãi',
  'Quảng Ninh',
  'Quảng Trị',
  'Sóc Trăng',
  'Sơn La',
  'Tây Ninh',
  'Thái Bình',
  'Thái Nguyên',
  'Thanh Hóa',
  'Thừa Thiên Huế',
  'Tiền Giang',
  'Trà Vinh',
  'Tuyên Quang',
  'Vĩnh Long',
  'Vĩnh Phúc',
  'Yên Bái'
];



