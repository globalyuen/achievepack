# 登录验证码问题诊断指南

## 问题描述

当输入正确的 8 位验证码后，出现 "Failed to fetch" 错误，无法完成登录。

## 已实施的修复

### 1. 改进错误处理和日志记录

**文件**: `src/hooks/useAuth.ts`

添加了详细的错误日志和更友好的错误消息：

```typescript
// Verify OTP code
const verifyOtp = async (email: string, token: string) => {
  try {
    console.log('[Auth] Verifying OTP for:', email)
    const result = await supabase.auth.verifyOtp({
      email,
      token,
      type: 'email'
    })
    
    if (result.error) {
      console.error('[Auth] OTP verification failed:', result.error)
    } else {
      console.log('[Auth] OTP verification successful')
    }
    
    return result
  } catch (error) {
    console.error('[Auth] OTP verification exception:', error)
    return {
      data: { user: null, session: null },
      error: {
        message: 'Failed to connect to authentication service. Please check your internet connection and try again.',
        name: 'NetworkError',
        status: 0
      }
    }
  }
}
```

### 2. 优化 Supabase 客户端配置

**文件**: `src/lib/supabase.ts`

添加了完整的配置选项和环境变量检查：

```typescript
export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '', {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    flowType: 'pkce'
  },
  global: {
    headers: {
      'x-client-info': 'achievepack-web'
    }
  }
})
```

## 诊断步骤

### 第 1 步：检查浏览器控制台

1. 打开浏览器开发者工具（F12）
2. 切换到 Console 标签
3. 尝试登录并查看日志输出

**正常情况应该看到**：
```
[Auth] Sending OTP to: ryan@achievepack.com
[Auth] OTP sent successfully
[Auth] Verifying OTP for: ryan@achievepack.com
[Auth] OTP verification successful
```

**如果出现错误，会看到**：
```
[Auth] OTP verification failed: { ... }
或
[Auth] OTP verification exception: { ... }
```

### 第 2 步：检查网络请求

1. 在开发者工具中切换到 Network 标签
2. 筛选 XHR/Fetch 请求
3. 尝试验证 OTP
4. 查找 `verify` 相关的请求

**检查项**：
- 请求 URL 应该是: `https://ofobzjpexljkrqsgdgua.supabase.co/auth/v1/verify`
- 请求方法: POST
- 状态码: 应该是 200（成功）
- 响应内容: 应该包含 session 和 user 数据

### 第 3 步：检查环境变量

运行以下命令检查环境变量：

```bash
cd "/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack"
echo "VITE_SUPABASE_URL: $(grep VITE_SUPABASE_URL .env.local | cut -d= -f2)"
echo "VITE_SUPABASE_ANON_KEY: $(grep VITE_SUPABASE_ANON_KEY .env.local | cut -d= -f2 | cut -c1-20)..."
```

**预期输出**：
```
VITE_SUPABASE_URL: https://ofobzjpexljkrqsgdgua.supabase.co
VITE_SUPABASE_ANON_KEY: eyJhbGciOiJIUzI1NiI...
```

### 第 4 步：测试 Supabase 连接

在浏览器控制台中运行：

```javascript
// 测试 Supabase 连接
const testAuth = async () => {
  console.log('Testing Supabase connection...')
  
  // 检查环境变量
  console.log('VITE_SUPABASE_URL:', import.meta.env.VITE_SUPABASE_URL)
  console.log('VITE_SUPABASE_ANON_KEY exists:', !!import.meta.env.VITE_SUPABASE_ANON_KEY)
  
  // 测试连接
  try {
    const { data, error } = await supabase.auth.getSession()
    console.log('Connection test result:', { data, error })
  } catch (e) {
    console.error('Connection test failed:', e)
  }
}

testAuth()
```

## 常见问题和解决方案

### 问题 1: "Failed to fetch" 错误

**可能原因**：
1. 网络连接问题
2. Supabase 服务暂时不可用
3. 浏览器扩展（如广告拦截器）拦截了请求
4. CORS 配置问题

**解决方案**：
1. 检查网络连接
2. 禁用浏览器扩展后重试
3. 清除浏览器缓存和 Cookies
4. 尝试使用无痕/隐私模式
5. 检查防火墙设置

### 问题 2: "Invalid OTP" 错误

**可能原因**：
1. 验证码已过期（通常 5-10 分钟）
2. 验证码输入错误
3. 邮箱地址不匹配

**解决方案**：
1. 请求新的验证码
2. 仔细检查邮箱中的验证码
3. 确保使用相同的邮箱地址

### 问题 3: 验证码未收到

**可能原因**：
1. 邮件在垃圾邮件文件夹
2. 邮箱服务器延迟
3. Supabase 邮件配置问题

**解决方案**：
1. 检查垃圾邮件文件夹
2. 等待 1-2 分钟后重试
3. 联系管理员检查 Supabase 邮件配置

## 临时解决方案

如果验证码登录持续失败，可以尝试以下替代方案：

### 方案 1: 使用 Google 登录

在登录页面，点击 "Continue with Google" 按钮。

### 方案 2: 清除本地存储

在浏览器控制台运行：

```javascript
// 清除所有本地存储
localStorage.clear()
sessionStorage.clear()

// 清除 Supabase 会话
supabase.auth.signOut()

// 刷新页面
location.reload()
```

### 方案 3: 使用不同浏览器

有时浏览器的缓存或扩展会导致问题，尝试：
1. Chrome
2. Firefox
3. Safari
4. Edge

## 开发环境重启

如果是开发环境，尝试重启开发服务器：

```bash
# 停止当前服务器（Ctrl+C）

# 清除缓存并重启
cd "/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack"
rm -rf node_modules/.vite
pnpm run dev
```

## 联系支持

如果以上步骤都无法解决问题，请提供以下信息：

1. **浏览器控制台日志**（完整的错误信息）
2. **Network 标签截图**（显示失败的请求）
3. **使用的浏览器和版本**
4. **操作系统**
5. **网络环境**（家庭/公司/公共 WiFi）

## 后续改进

为了进一步改善用户体验，计划实施：

1. **重试机制**: 自动重试失败的请求
2. **离线检测**: 检测网络状态并显示适当消息
3. **更详细的错误提示**: 根据不同错误类型显示具体解决方案
4. **备用登录方式**: 在 OTP 失败时自动显示其他登录选项
5. **健康检查**: 在登录前检查 Supabase 服务状态

---

**最后更新**: 2026-02-05  
**状态**: 已实施错误处理改进，等待测试反馈
