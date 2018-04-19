import ajax from './ajax'

//获取主页数据
export const reqHome = () => ajax('./api/index')
//获取轮播图广告和每日疯抢
export const reqCarousel = () => ajax('./api/carousel')
