# 17Track API 集成指南

## 📦 概述

17Track 是一个全球物流追踪平台，支持追踪来自 1700+ 快递公司的包裹。已为您创建好集成代码。

## 🔑 步骤 1: 获取 API Key

1. 访问 [17Track API](https://www.17track.net/en/apitrack)
2. 注册账号
3. 申请 API access（免费版本每月有限额）
4. 获取您的 API Key

## ⚙️ 步骤 2: 配置 API Key

打开 `.env` 文件，将 `your_17track_api_key_here` 替换为您的真实 API key：

```env
VITE_17TRACK_API_KEY=your_actual_api_key_from_17track
```

**注意**: 获取 API key 后需要重启开发服务器。

## 🚀 步骤 3: 使用方法

### 在 AdminPage 中集成（自动追踪）

在 `AdminPage.tsx` 的 `updateTracking` 函数中添加：

```typescript
import { autoTrackPackage, getTrackingUrl } from '../services/trackingService'

const updateTracking = async () => {
  if (!selectedOrder || !trackingForm.trackingNumber) {
    alert('Please enter tracking number')
    return
  }
  
  // 使用 17Track 自动检测快递公司
  const trackingInfo = await autoTrackPackage(trackingForm.trackingNumber)
  
  // 自动生成追踪 URL
  const trackingUrl = trackingInfo 
    ? getTrackingUrl(trackingForm.trackingNumber, trackingInfo.carrier)
    : trackingForm.trackingUrl || getTrackingUrl(trackingForm.trackingNumber)
  
  // 更新数据库
  await supabase.from('orders').update({
    tracking_number: trackingForm.trackingNumber,
    carrier: trackingInfo?.carrier || trackingForm.carrier,
    tracking_url: trackingUrl,
    status: 'shipped',
    updated_at: new Date().toISOString()
  }).eq('id', selectedOrder.id)
  
  // ... 其余代码
}
```

### 在 DashboardPage 中显示追踪详情

```typescript
import { getTrackingInfo } from '../services/trackingService'

// 在组件中添加状态
const [trackingDetails, setTrackingDetails] = useState<TrackingInfo | null>(null)

// 获取追踪详情
const fetchTrackingDetails = async (trackingNumber: string) => {
  const details = await getTrackingInfo(trackingNumber)
  setTrackingDetails(details)
}

// 在订单详情中显示
{selectedOrder.tracking_number && (
  <div>
    <button onClick={() => fetchTrackingDetails(selectedOrder.tracking_number)}>
      查看物流详情
    </button>
    
    {trackingDetails && (
      <div>
        <p>状态: {trackingDetails.status}</p>
        <p>位置: {trackingDetails.location}</p>
        <p>最后更新: {trackingDetails.lastUpdate}</p>
        
        <h4>物流记录:</h4>
        {trackingDetails.events?.map((event, i) => (
          <div key={i}>
            <p>{event.time} - {event.location}</p>
            <p>{event.status}: {event.description}</p>
          </div>
        ))}
      </div>
    )}
  </div>
)}
```

## 🔧 API 函数说明

### `autoTrackPackage(trackingNumber)`
- 自动注册并获取追踪信息
- 自动检测快递公司
- 返回完整的追踪详情

### `getTrackingInfo(trackingNumber)`
- 获取已注册单号的追踪信息
- 包含物流状态、位置、事件历史

### `registerTracking(trackingNumber, carrierCode?)`
- 手动注册追踪单号
- 可选指定快递公司代码

### `getTrackingUrl(trackingNumber, carrier?)`
- 生成追踪 URL
- 支持多个主流快递公司
- 默认返回 17Track 通用链接

## 📊 支持的快递公司

- DHL (10039)
- FedEx (10062)
- UPS (10103)
- China Post (10130)
- SF Express (11043)
- USPS (10001)
- 以及 1700+ 其他快递公司

## 💡 使用建议

1. **自动检测**: 使用 `autoTrackPackage()` 让 17Track 自动识别快递公司
2. **批量查询**: 可以批量注册多个单号（17Track API 支持批量）
3. **缓存结果**: 物流信息不会实时变化，可以缓存结果减少 API 调用
4. **错误处理**: 所有函数都有完整的错误处理，返回 null 时表示查询失败

## ⚠️ 注意事项

1. **API 限额**: 免费版本有每月查询限制
2. **延迟**: 首次注册单号后需要等待 1-2 秒才能查询到结果
3. **单号格式**: 确保输入正确的追踪单号格式
4. **CORS**: 如果遇到 CORS 问题，需要通过后端代理调用 API

## 🔄 不使用 17Track 的替代方案

如果不想使用 17Track API，您可以：

1. **直接链接**: 使用 `getTrackingUrl()` 生成各快递公司的追踪链接
2. **手动输入**: 让管理员手动输入追踪 URL（当前实现）
3. **其他 API**: 使用 AfterShip、TrackingMore 等其他追踪服务

## 📝 当前实现

目前系统已支持：
- ✅ 管理员手动输入追踪单号、快递公司和 URL
- ✅ 客户端显示追踪信息
- ✅ 点击链接跳转到快递公司追踪页面
- ⚡ 17Track API 已集成（需配置 API key）

## 🎯 下一步

1. 在 `.env` 中配置您的 17Track API key
2. 在 AdminPage 集成自动追踪功能
3. 在 DashboardPage 添加详细物流信息展示
4. 测试追踪功能

---

**文件位置**: `/src/services/trackingService.ts`
**环境变量**: `.env`
