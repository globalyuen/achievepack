import json, fcntl

locales_path = 'src/locales/en.json'

data_to_add = {
  "header": {
    "title": "小老闆理財記賬本",
    "badge": "超簡單版",
    "subtitle": "管錢超容易！學習記賬第一步 📦 包裝買賣 • 🚗 汽車 • 🅿️ 車位 • 🏠 房屋",
    "manageBusiness": "管理小生意",
    "adjustRate": "調整匯率",
    "addRecord": "記一筆收支 💰"
  },
  "stats": {
    "profitTitle": "🐷 我的存錢罐剩下 (利潤)",
    "profitDesc": "好棒！這是總共賺到、扣掉花出去後，剩下可以支配的錢！",
    "incomeTitle": "🎉 我總共賺進來 (收入)",
    "incomeDesc": "各種生意陸陸續續收進來的零用錢都在這裡累積！",
    "expenseTitle": "💸 我總共花出去 (支出)",
    "expenseDesc": "買東西的進貨成本、修理和水電費的日常花銷。"
  },
  "tabs": {
    "overview": "🐷 生意小撲滿",
    "ledger": "📝 流水賬日記",
    "calendar": "📅 記賬小日曆",
    "report": "📊 生意分折表"
  },
  "overview": {
    "title": "四大生意小賬戶表現",
    "subtitle": "點擊時間膠囊，所有生意小撲滿的收支會神奇地自動切換唷！🧒",
    "profitLabel": "此時光總盈虧 (利潤)",
    "rangeLabel": "選定範圍",
    "earned": "賺到收支：",
    "spent": "花掉成本：",
    "profit": "我的利潤：",
    "adviceTitle": "給小老闆的理財悄悄話",
    "adviceDesc": "記賬不僅僅是記錄數字，更是建立良好的理財觀念！持之以恆，你就能看出哪一個生意（比如「房屋出租 🏠」或是「包裝買賣 📦」）是你的印鈔機喔！",
    "businessItemBadge": "小生意項目"
  },
  "filters": {
    "searchPlaceholder": "搜尋備註日記或科目...",
    "typeAll": "所有的錢方向",
    "typeIncoming": "只看賺到的錢 💰",
    "typeOutgoing": "只看花出去的錢 💸",
    "businessAll": "所有生意項目",
    "currencyAll": "所有交易幣別",
    "reset": "重置所有條件",
    "downloadCSV": "下載 CSV 報表 📊",
    "emptyTitle": "小本子裡沒有紀錄唷",
    "emptyDesc": "點選上面「記一筆」或是「清除過濾條件」來看看吧！"
  },
  "timeframes": {
    "all": "📜 歷史總計 (所有記賬紀錄)",
    "1d": "📅 最近一日 (今天/昨日)",
    "1w": "📅 最近一個星期 (過去7天)",
    "1m": "📅 最近一個月 (過去30天)",
    "3m": "📅 最近三個月",
    "6m": "📅 最近半年",
    "1y": "📅 最近一年 (過去365天)",
    "2y": "📅 最近兩年",
    "3y": "📅 最近三年",
    "5y": "📅 最近五年",
    "10y": "📅 最近十年",
    "allShort": "歷史總計",
    "1dShort": "最近一日",
    "1wShort": "最近一週",
    "1mShort": "最近一月",
    "3mShort": "最近三月",
    "6mShort": "最近半年",
    "1yShort": "最近一年",
    "2yShort": "最近兩年",
    "3yShort": "最近三年",
    "5yShort": "最近五年",
    "10yShort": "最近十年"
  },
  "calendar": {
    "title": "📅 收支大表格日曆 (統一 USD 計價)",
    "subtitle": "點擊格網中任何一天，就能看到那天賺了多少或花了多少，也可以直接對那天快捷記賬唷！",
    "days": ["日", "一", "二", "三", "四", "五", "六"],
    "earned": "賺:",
    "spent": "花:",
    "transactionsCount": "{{count}}筆"
  },
  "rateSettings": {
    "title": "調整小老闆匯率計算機",
    "description": "在記賬時，如果小老闆輸入了港幣 (HKD) 或人民幣 (RMB)，系統會自動以這個匯率基準，幫你變魔法換算成美金 (USD) 存進你的大撲滿喔！",
    "usd": "美金 (USD)",
    "hkd": "港幣 (HKD)",
    "rmb": "人民幣 (RMB)",
    "restore": "復原標準值",
    "save": "確認保存設定",
    "current": "目前",
    "equivalent": "折合",
    "baseInfo": "📈 自動換算器匯率基底：",
    "displayCurrency": "顯示幣別：",
    "selectTime": "選擇時光："
  },
  "addForm": {
    "titleAdd": "💰 記一筆收支日記",
    "titleEdit": "✏️ 修改這筆小日記",
    "date": "交易日期",
    "typeLabel": "這是賺到錢還是花出錢呢？",
    "incoming": "💰 存錢進來 (賺錢啦)",
    "outgoing": "💸 付錢出去 (花錢囉)",
    "businessLabel": "是屬於哪一個小生意的？",
    "amountLabel": "填入金額與使用的幣別",
    "baseUsd": "大撲滿基底: USD",
    "conversionTip": "🪄 點點下方卡片，金額會神奇自動換算唷：",
    "categoryLabel": "這是屬於哪一項收支呢？",
    "chooseExisting": "📖 選擇現有項目",
    "addNewCategory": "➕ 新增收支項目",
    "newCategoryPlaceholder": "例如: 買包裝紙 📄",
    "addBtn": "新增項目",
    "descLabel": "寫下一點好記的小筆記 (例: 特斯拉載客一星期的租費)",
    "descPlaceholder": "寫下一點簡單的小日記吧...",
    "paymentMethodLabel": "這筆錢是怎麼交易的？",
    "cancel": "取消",
    "save": "確認保存這筆紀錄 ✨",
    "paymentMethods": {
      "銀行轉帳": "銀行轉帳",
      "現金": "現金",
      "信用卡": "信用卡",
      "微信/支付寶": "微信/支付寶"
    }
  },
  "businessManager": {
    "title": "管理我的小生意項目",
    "addNew": "➕ 開啟一個全新小生意",
    "nameLabel": "生意名稱 (例如: 烘焙點心)",
    "namePlaceholder": "烘焙點心",
    "emojiLabel": "圖圖標 Emoji",
    "submit": "確認打造小生意 🚀",
    "currentBusinesses": "💼 正在經營中的小生意：",
    "close": "關閉視窗"
  },
  "dayDetail": {
    "title": "記賬大詳情",
    "empty": "這一天還空蕩蕩的喔，沒有任何小筆記。",
    "addBtn": "就在今天記一筆 💰",
    "close": "關閉視窗"
  },
  "report": {
    "title": "簡明生意損益小報表 (美金基準)",
    "subtitle": "各個小生意的賺錢和花錢情況匯總表，全部自動折算成美金統計！",
    "desc": "本項生意的全部收支紀錄加總。",
    "earned": "總收入",
    "spent": "總支出",
    "profit": "小利潤",
    "download": "下載生意小報表 CSV 📊"
  }
}

with open(locales_path, 'r+') as f:
    fcntl.flock(f, fcntl.LOCK_EX)
    data = json.load(f)
    if 'seoPages' not in data:
        data['seoPages'] = {}
    if 'pages' not in data['seoPages']:
        data['seoPages']['pages'] = {}
    data['seoPages']['pages']['bookkeeping'] = data_to_add
    f.seek(0)
    json.dump(data, f, indent=4, ensure_ascii=False)
    f.truncate()
    fcntl.flock(f, fcntl.LOCK_UN)
