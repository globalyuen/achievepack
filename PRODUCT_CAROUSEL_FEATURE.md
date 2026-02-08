# 产品照片轮播图功能说明

## 📸 功能概述
为pouch.eco首页添加了专业的产品照片展示轮播图，展示来自 `/all-product-photos` 文件夹的25张真实产品照片。

## 🎨 设计特点

### Neo-Brutalist设计风格
- **粗黑边框**: 4px黑色边框 + 12px阴影效果
- **品牌配色**:
  - 主色: `#10b981` (绿色) - 活动状态
  - 次色: `#D4FF00` (黄绿) - 悬停状态
  - 黑色: 边框和文字
- **几何形状**: 方形按钮、矩形容器
- **大胆的字体**: JetBrains Mono等宽字体

## ✨ 核心功能

### 1. 自动播放
- 默认每4秒自动切换
- 鼠标悬停时暂停播放
- 平滑的动画过渡

### 2. 导航控制
- **左右箭头**: 手动切换图片
- **指示器点**: 快速跳转到任意图片
- **缩略图预览** (桌面端): 底部显示所有缩略图

### 3. 动画效果
- Framer Motion弹性滑动动画
- 悬停时按钮缩放效果
- 平滑的透明度过渡

### 4. 响应式设计
- **移动端**: 16:9宽高比，隐藏缩略图
- **桌面端**: 21:9宽高比，显示缩略图预览
- 自适应布局和触摸支持

## 📁 文件结构

```
src/
├── components/
│   └── ProductCarousel.tsx          # 轮播图组件
└── pages/
    └── PouchEcoHomePage.tsx          # 首页集成

public/
└── all-product-photos/               # 25张产品照片
    ├── IMG_4362.webp
    ├── IMG_4372.webp
    └── ... (共25张)
```

## 🎯 页面位置

轮播图放置在pouch.eco首页的：
- **Hero Section之后**
- **Features Bento Grid之前**

### 区块结构
```
POUCH.ECO 首页
├── Navigation (导航栏)
├── Hero Section (英雄区)
├── [NEW] Product Photos Carousel (产品轮播图) ⭐
├── Features Bento Grid (功能网格)
├── Products Section (产品区)
└── Footer (页脚)
```

## 🚀 使用方式

### 组件Props
```typescript
interface ProductCarouselProps {
  autoPlay?: boolean          // 是否自动播放，默认true
  autoPlayInterval?: number   // 自动播放间隔(ms)，默认4000
  className?: string          // 自定义CSS类
}
```

### 在页面中使用
```tsx
import ProductCarousel from '../components/ProductCarousel'

<ProductCarousel 
  autoPlay={true} 
  autoPlayInterval={4000} 
/>
```

## 📊 性能优化

1. **懒加载**: 图片使用 `loading="lazy"` 属性
2. **WebP格式**: 所有图片已优化为WebP格式
3. **代码分割**: 组件支持React.lazy动态导入
4. **防抖动**: 鼠标悬停时暂停自动播放

## 🎬 动画详情

### 滑动动画
```typescript
slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
}
```

### 过渡配置
- **弹簧动画**: stiffness=300, damping=30
- **透明度**: 0.2秒线性过渡
- **缩放效果**: 1.05倍悬停放大

## 📱 响应式断点

| 屏幕尺寸 | 宽高比 | 缩略图显示 |
|---------|--------|----------|
| 移动端 (<768px) | 16:9 | 隐藏 |
| 桌面端 (≥768px) | 21:9 | 显示 |

## 🔧 技术栈

- **React 18**: 函数组件 + Hooks
- **TypeScript**: 完整类型定义
- **Framer Motion**: 动画库
- **Lucide React**: 图标库
- **Tailwind CSS**: 样式框架

## 🌐 部署信息

- **Commit**: da5f07a
- **部署平台**: Vercel
- **自动部署**: 已触发
- **预计生效时间**: 3-5分钟

## 🎉 访问链接

- **生产环境**: https://pouch.eco/
- **预览地址**: https://achievepack.com/ (切换到pouch.eco域名)

---

**创建日期**: 2026-01-30  
**作者**: Achieve Pack开发团队  
**版本**: 1.0.0
