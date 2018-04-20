import ajax from './ajax'

//获取主页数据
export const reqHome = () => ajax('./api/index')
//获取轮播图广告和每日疯抢
export const reqCarousel = () => ajax('./api/carousel')
//获取E宠品牌列表
export const reqBrand = () => ajax('./api/brand')
//获取e宠分类列表
export const reqClassify = () => ajax('./api/classify')
//获取全部列表
export const reqAllBrand = () => ajax('./api/allbrand')
