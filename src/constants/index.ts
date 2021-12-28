export const FUTURAMA_API_ENDPOINT = "https://api.sampleapis.com/futurama/";

export const MEDIA_QUERY_END_POINT = {
  MOBILE: '640px',
  TABLET: '1280px',
  DESKTOP: '1920px',
  LARGE: '2560px'
}

export const ROUTES = [
  {
    ID: 0,
    PATH: '/futurama',
    LABEL: '퓨처라마',
    SUBS: [
      {
        ID: 0,
        PATH: '/info',
        LABEL: '퓨처라마 소개',
        ORDER: 0,
      },
      {
        ID: 1,
        PATH: '/cast',
        LABEL: '캐스팅',
        ORDER: 1,
      },
      {
        ID: 2,
        PATH: '/character',
        LABEL: '캐릭터소개',
        ORDER: 2,
      },      
      {
        ID: 3,
        PATH: '/episodes',
        LABEL: '회차소개',
        ORDER: 3,
      },      
      {
        ID: 4,
        PATH: '/inventory',
        LABEL: '인벤토리',
        ORDER: 4,
      },      
      {
        ID: 6,
        PATH: '/questions',
        LABEL: '퓨처라마 퀴즈',
        ORDER: 6,
      },
    ]
  }
]