# 多语言 JSON-LD Schema 规范

> 确保 SEO 和 GEO (Generative Engine Optimization) 对所有语言版本有效

## 概述

本项目支持 4 种语言：**EN** (英文)、**ZH-TW** (繁体中文)、**ES** (西班牙语)、**FR** (法语)。
为了让 Google Rich Results 和 AI 搜索引擎（Gemini、ChatGPT Search）正确理解各语言版本，JSON-LD 结构化数据需要动态生成。

---

## 规则

### 1. 固定不变的 Schema（英文）

以下 Schema 使用英文硬编码，不需要翻译：

| Schema Type | 原因 |
|-------------|------|
| **Organization** | 公司法定名称和地址不应翻译 |
| **ContactPoint** | 联系方式（电话、邮箱）是固定的 |
| **sameAs** | 社交媒体链接是固定的 |

### 2. 动态变化的 Schema（根据语言）

以下字段必须使用 `t()` 函数获取翻译：

| Schema Type | 动态字段 | 翻译 Key |
|-------------|----------|----------|
| **WebSite** | `inLanguage` | 使用 `currentLang` |
| **WebPage** | `inLanguage`, `name`, `description` | `schema.webpage.name`, `schema.webpage.description` |
| **FAQPage** | 所有 `Question` 和 `Answer` | `faq.items.{key}.q`, `faq.items.{key}.a` |

---

## 翻译 Key 结构

### 在 `locales/{lang}.json` 中添加 Schema 翻译：

```json
{
  "schema": {
    "webpage": {
      "name": "Certified eco-friendly pouch packaging partner for global brands",
      "description": "Achieve Pack provides certified compostable, recyclable and bio-based pouches for coffee, snacks, pet treats and other food brands, with low MOQs, realistic lead times and full technical support."
    }
  },
  "faq": {
    "items": {
      "certs": {
        "q": "What certifications do your packaging materials have?",
        "a": "Our compostable packaging materials are certified to EN13432..."
      }
    }
  }
}
```

---

## App.tsx 实现模式

```tsx
// 1. 获取当前语言
const { t, i18n } = useTranslation()
const currentLang = i18n.language

// 2. 动态生成 FAQ Schema
const faqSchemaItems = [
  'certs', 'moq', 'time', 'cost', 'barrier', 'design',
  'colorConsistency', 'defects', 'testReports', 'verifyCertification', 'switching'
].map(key => ({
  "@type": "Question",
  "name": t(`faq.items.${key}.q`),
  "acceptedAnswer": {
    "@type": "Answer",
    "text": t(`faq.items.${key}.a`)
  }
}))

// 3. WebSite/WebPage 动态语言
{
  "@type": "WebSite",
  "inLanguage": currentLang === 'zh-TW' ? 'zh-Hant' : currentLang
}

{
  "@type": "WebPage",
  "name": t('schema.webpage.name'),
  "description": t('schema.webpage.description'),
  "inLanguage": currentLang === 'zh-TW' ? 'zh-Hant' : currentLang
}
```

---

## SEO 检查清单

添加或修改 JSON-LD 时，确保：

- [ ] `Organization` schema 保持英文（公司名称、地址）
- [ ] `WebSite.inLanguage` 使用动态语言
- [ ] `WebPage.inLanguage` 使用动态语言
- [ ] `WebPage.name` 和 `description` 使用 `t()` 翻译
- [ ] `FAQPage` 所有问答使用 `t()` 翻译
- [ ] 4 个语言文件都有对应的翻译 key
- [ ] 使用 [Google Rich Results Test](https://search.google.com/test/rich-results) 测试各语言版本

---

## 语言代码映射

| i18n Code | Schema.org inLanguage |
|-----------|----------------------|
| `en` | `en` |
| `zh-TW` | `zh-Hant` |
| `es` | `es` |
| `fr` | `fr` |

---

## 注意事项

1. **Product Schema** 仅在产品详情页 (`/store/product/xxx`) 使用，首页不包含
2. **FAQPage Schema** 项目数量应与页面可见 FAQ 保持一致
3. 非英语版本的 FAQ 文本应保持专业准确，避免机器翻译错误
4. 修改后必须运行 `npm run build` 确保无语法错误

---

*最后更新: 2024-12-19*
