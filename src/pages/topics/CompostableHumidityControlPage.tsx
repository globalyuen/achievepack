import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const CompostableHumidityControlPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Protect Cellulose Compost Bags from Dryness | Achieve Pack</title>
        <meta name="description" content="Professional humidity control for cellulose compost bags. Stop your compostable packaging from becoming brittle and cracking during transport due to dryness." />
        <link rel="canonical" href="https://www.pouch.eco/topics/compostable-humidity-control" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-900 to-emerald-800 text-white min-h-[90vh] flex items-center pt-24 pb-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/20 text-emerald-100 border border-emerald-400/30 text-sm font-semibold tracking-wider mb-6">
                HUMIDITY CONTROL SOLUTIONS
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                保護你的纖維素堆肥袋，<span className="text-emerald-400">不再因過乾而變脆</span>
                <br />
                <span className="text-2xl md:text-3xl lg:text-4xl text-gray-200 mt-4 block font-semibold font-sans">
                  Protect Cellulose Compost Bags from Becoming Brittle Due to Dryness
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto lg:mx-0 font-medium">
                專業溼度控制方案，降低運輸損壞率 70% <br />
                <span className="text-gray-300 text-base md:text-lg">Professional humidity control for cellulose compost bags – reduce transport damage by 70%.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="#contact-form"
                  className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-emerald-500/30 transition-all transform hover:-translate-y-1"
                >
                  立即索取測試方案<br />
                  <span className="text-sm font-normal">Get Your Test Plan Now</span>
                </a>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <img 
                src="/imgs/samples/brittle-vs-strong-compost.jpg" 
                alt="Dry brittle compost bag vs strong humidity controlled compost bag" 
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover border border-white/10"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-xl border border-gray-100 flex items-center gap-4">
                <i className="fas fa-tint text-4xl text-blue-500"></i>
                <div>
                  <div className="text-sm text-gray-500 font-bold">OPTIMAL MOISTURE</div>
                  <div className="text-2xl font-black text-gray-900">55-65<span className="text-lg">% RH</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Problem Background */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              為什麼纖維素堆肥袋會無故裂開破損？
              <span className="block text-xl text-gray-500 mt-2 font-normal">Why Do Cellulose Compost Bags Crack and Break?</span>
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            <div className="w-full md:w-1/2">
              <img 
                src="https://achievepack.com/imgs/home/sustainable-packaging.webp" 
                alt="Cellulose material structure" 
                className="w-full h-auto rounded-xl shadow-md"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                纖維素基堆肥袋（Cellulose compost bags）是環保首選，但有個致命弱點：<br/><br/>
                <strong className="text-red-600">過乾環境下，纖維素含水率驟降 → 變得非常脆，輕微碰撞就裂開破損。</strong>
              </p>
              
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <i className="fas fa-ship text-blue-500 mt-1 mr-3 text-lg"></i>
                  <span>
                    <strong>海運集裝箱危機 (Ocean Freight Risks):</strong> 溫差大，內部常低於 30%RH，數天內就讓包裝脆化。
                  </span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-exclamation-triangle text-amber-500 mt-1 mr-3 text-lg"></i>
                  <span>
                    <strong>嚴重後果 (The Consequences):</strong> 客戶收貨時發現大量破損、產品灑出，直接導致退貨、索賠，嚴重影響品牌形象。
                  </span>
                </li>
              </ul>

              <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-6 mt-6">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <i className="fas fa-chart-line text-emerald-500"></i> 關鍵數據 (Key Data)
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✅ 纖維素最佳含水率：約 <strong>8–12%</strong>（太低脆化、太高發霉）。</li>
                  <li>⚠️ 乾燥環境下（&lt;40% RH），<strong>48 小時內</strong>包裝強度下降 50% 以上。</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              我們的解決方案：三層濕度控制選擇
              <span className="block text-xl text-gray-500 mt-2 font-normal">Our Solutions: 3 Levels of Humidity Control</span>
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              我們提供不同成本的控制方案，確保你的堆肥袋在抵達倉庫時，依然保持最佳柔韌度。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">方案一：專業雙向控溼包</h3>
              <p className="text-sm text-gray-500 mb-4 font-semibold uppercase tracking-wide">Professional 2-Way Control Packs</p>
              
              <p className="text-gray-600 mb-6 flex-grow">
                精準維持 58% 或 62% RH。<br/>使用進口 Boveda 等級雙向控濕包。
              </p>
              
              <ul className="text-sm text-left w-full space-y-2 mb-8 bg-gray-50 p-4 rounded-lg">
                <li className="flex items-center gap-2 border-b border-gray-100 pb-2"><i className="fas fa-bolt text-amber-400 w-4"></i> 起效：24-48小時內穩定</li>
                <li className="flex items-center gap-2 border-b border-gray-100 pb-2"><i className="fas fa-dollar-sign text-green-500 w-4"></i> 成本：中高 (USD $0.5 - $1.5 / 包)</li>
                <li className="flex items-center gap-2 font-bold text-gray-900"><i className="fas fa-check-circle text-blue-500 w-4"></i> 適合：高價值訂單、嚴格品質要求</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-emerald-500 relative flex flex-col items-center text-center group transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                最受歡迎推薦 (Most Popular)
              </div>
              <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                <i className="fas fa-box-open"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">方案二：經濟國產雙向定溼包</h3>
              <p className="text-sm text-gray-500 mb-4 font-semibold uppercase tracking-wide">Economical 2-Way Moisture Packs</p>
              
              <p className="text-gray-600 mb-6 flex-grow">
                中國工廠直供，同樣具備雙向吸放濕能力，效果與進口品極為相近。
              </p>
              
              <ul className="text-sm text-left w-full space-y-2 mb-8 bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                <li className="flex items-center gap-2 border-b border-emerald-100 pb-2"><i className="fas fa-box text-emerald-600 w-4"></i> 包裝：我們直接幫你包含在出貨紙箱中</li>
                <li className="flex items-center gap-2 border-b border-emerald-100 pb-2"><i className="fas fa-dollar-sign text-emerald-600 w-4"></i> 成本：極低 (USD $0.1 - $0.3 / 包)</li>
                <li className="flex items-center gap-2 font-bold text-gray-900"><i className="fas fa-check-circle text-emerald-600 w-4"></i> 適合：超過 90% 的標準海運訂單</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                <i className="fas fa-hands-helping"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">方案三：超低成本自製加溼</h3>
              <p className="text-sm text-gray-500 mb-4 font-semibold uppercase tracking-wide">DIY Low-Cost Humidification</p>
              
              <p className="text-gray-600 mb-6 flex-grow">
                使用密封溼毛巾或海綿裝入雙層 PE 袋中，緩慢釋放水氣。
              </p>
              
              <ul className="text-sm text-left w-full space-y-2 mb-8 bg-gray-50 p-4 rounded-lg">
                <li className="flex items-center gap-2 border-b border-gray-100 pb-2"><i className="fas fa-sync text-blue-400 w-4"></i> 監控：需搭配電子溼度計測試調整</li>
                <li className="flex items-center gap-2 border-b border-gray-100 pb-2"><i className="fas fa-dollar-sign text-green-500 w-4"></i> 成本：幾乎免費 (USD &lt;$0.2 / 箱)</li>
                <li className="flex items-center gap-2 font-bold text-gray-900"><i className="fas fa-check-circle text-gray-600 w-4"></i> 適合：測試期、預算極限或低利潤訂單</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a href="#contact-form" className="inline-flex items-center justify-center px-6 py-3 border border-emerald-500 text-base font-medium rounded-full text-emerald-600 bg-white hover:bg-emerald-50 transition-colors shadow-sm">
              聯繫我們討論最適合的方案 / Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* 4. Operation Steps */}
      <section className="py-20 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              操作步驟：如何實施濕度控制？
              <span className="block text-xl text-emerald-300 mt-2 font-normal">Standard Operating Procedure: 6 Steps Execution</span>
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-emerald-800/50 p-6 rounded-2xl border border-emerald-700 hover:bg-emerald-800 transition-colors">
              <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-xl font-black mb-4 shadow-lg shadow-emerald-500/20">1</div>
              <h3 className="text-xl font-bold mb-2">確認目標溼度 <span className="text-sm font-normal text-emerald-300 block">Confirm Target RH</span></h3>
              <p className="text-emerald-100/80 text-sm leading-relaxed">纖維素堆肥袋建議設定在 55–65% RH，我們將依據您的產品特徵調整。</p>
            </div>
            {/* Step 2 */}
            <div className="bg-emerald-800/50 p-6 rounded-2xl border border-emerald-700 hover:bg-emerald-800 transition-colors">
              <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-xl font-black mb-4 shadow-lg shadow-emerald-500/20">2</div>
              <h3 className="text-xl font-bold mb-2">選擇方案 <span className="text-sm font-normal text-emerald-300 block">Select Solution</span></h3>
              <p className="text-emerald-100/80 text-sm leading-relaxed">專業包、國產經濟包或自製方案。我們會為您提供專業諮詢來決定。</p>
            </div>
            {/* Step 3 */}
            <div className="bg-emerald-800/50 p-6 rounded-2xl border border-emerald-700 hover:bg-emerald-800 transition-colors">
              <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-xl font-black mb-4 shadow-lg shadow-emerald-500/20">3</div>
              <h3 className="text-xl font-bold mb-2">內袋隔離 <span className="text-sm font-normal text-emerald-300 block">Inner PE Bag Barrier</span></h3>
              <p className="text-emerald-100/80 text-sm leading-relaxed">將堆肥袋產品與控溼包一同放入食品級 PE 內袋，物理隔開紙箱，防止紙箱吸收水分。</p>
            </div>
            {/* Step 4 */}
            <div className="bg-emerald-800/50 p-6 rounded-2xl border border-emerald-700 hover:bg-emerald-800 transition-colors">
              <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-xl font-black mb-4 shadow-lg shadow-emerald-500/20">4</div>
              <h3 className="text-xl font-bold mb-2">放入紙箱 <span className="text-sm font-normal text-emerald-300 block">Pack into Cartons</span></h3>
              <p className="text-emerald-100/80 text-sm leading-relaxed">將綁好或封口的內袋（含產品與控濕包）放入外層瓦楞紙箱，封好箱口。</p>
            </div>
            {/* Step 5 */}
            <div className="bg-emerald-800/50 p-6 rounded-2xl border border-emerald-700 hover:bg-emerald-800 transition-colors">
              <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center text-xl font-black mb-4 shadow-lg shadow-amber-500/20">5</div>
              <h3 className="text-xl font-bold mb-2 pr-2">測試與監控 <span className="text-sm font-normal text-emerald-300 block">Test & Monitor</span></h3>
              <p className="text-emerald-100/80 text-sm leading-relaxed">在首批出貨的幾箱內放置微型電子溼度計，記錄 24/48/72 小時的數據變化確保穩定。</p>
            </div>
            {/* Step 6 */}
            <div className="bg-emerald-800/50 p-6 rounded-2xl border border-emerald-700 hover:bg-emerald-800 transition-colors">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-xl font-black mb-4 shadow-lg shadow-blue-500/20">6</div>
              <h3 className="text-xl font-bold mb-2">量產出貨 <span className="text-sm font-normal text-emerald-300 block">Mass Production Ship</span></h3>
              <p className="text-emerald-100/80 text-sm leading-relaxed">流程驗證成功後，標準化導入全量出貨程序，從此告別脆化客訴。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Case Study */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              成功案例分享
              <span className="block text-xl text-gray-500 mt-2 font-normal">Real Case Study (Mexico Ocean Freight)</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
            {/* Before */}
            <div className="bg-white p-10 border-r border-gray-100 flex flex-col items-center">
              <div className="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center text-2xl mb-6">
                <i className="fas fa-times"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">過去痛點 (Before)</h3>
              <p className="text-gray-500 uppercase text-xs font-bold tracking-widest mb-6">無濕度控制 / No Humidity Control</p>
              
              <ul className="w-full space-y-4">
                <li className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-600">出貨時溼度 (Ship RH)</span>
                  <span className="font-bold text-red-600">35%</span>
                </li>
                <li className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-600">收貨時破損率 (Damage Rate)</span>
                  <span className="font-bold text-red-600">25%</span>
                </li>
                <li className="flex flex-col bg-gray-50 p-4 rounded-lg mt-4">
                  <span className="text-xs text-gray-500 font-bold mb-1">客戶反饋 (Feedback)</span>
                  <span className="text-sm text-gray-800 italic">"包裝太脆，輕輕一捏就裂開，產品灑滿整個紙箱。"</span>
                </li>
              </ul>
            </div>

            {/* After */}
            <div className="bg-emerald-50 p-10 flex flex-col items-center relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-100 rounded-bl-full -z-0"></div>
              <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center text-2xl mb-6 shadow-lg z-10">
                <i className="fas fa-check"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 z-10">現今解決 (After)</h3>
              <p className="text-emerald-700 uppercase text-xs font-bold tracking-widest mb-6 z-10">國產雙向控濕方案 / Economical 2-Way Packs</p>
              
              <ul className="w-full space-y-4 z-10">
                <li className="flex justify-between border-b border-emerald-200/50 pb-2">
                  <span className="text-gray-700">出貨時溼度 (Ship RH)</span>
                  <span className="font-bold text-emerald-600 text-lg">58%</span>
                </li>
                <li className="flex justify-between border-b border-emerald-200/50 pb-2">
                  <span className="text-gray-700">收貨時溼度 (Received RH)</span>
                  <span className="font-bold text-emerald-600 text-lg">56%</span>
                </li>
                <li className="flex justify-between border-b border-emerald-200/50 pb-2">
                  <span className="text-gray-700">收貨時破損率 (Damage Rate)</span>
                  <span className="font-bold text-emerald-600 text-lg">降到 2%</span>
                </li>
                <li className="flex flex-col bg-white/70 p-4 rounded-lg mt-4 border border-emerald-100">
                  <span className="text-xs text-emerald-600 font-bold mb-1">客戶反饋 (Feedback)</span>
                  <span className="text-sm text-gray-800 italic">"包裝柔韌度非常完美，破損問題徹底解決，滿意度 95%！"</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Special Tips */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-50 border-l-8 border-yellow-400 p-8 rounded-r-2xl shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <i className="fas fa-lightbulb text-yellow-500"></i>
              纖維素堆肥袋溼度控制專屬建議
              <span className="text-base text-gray-500 font-normal ml-2 hidden sm:inline">(Expert Tips)</span>
            </h3>
            
            <ul className="space-y-4 list-none text-gray-700">
              <li className="flex items-start gap-3">
                <i className="fas fa-check-circle text-green-500 mt-1"></i>
                <div><strong>目標 RH (Target RH):</strong> 建議維持在 55–65% 之間（剛剛好避免脆化，又不足以引發發霉風險）。</div>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-check-circle text-green-500 mt-1"></i>
                <div><strong>每箱配置 (Quantity per Box):</strong> 標準 10kg 紙箱，建議放置 60g 定溼包 × 1–2 個。</div>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-check-circle text-green-500 mt-1"></i>
                <div><strong>內袋材質 (Inner Bag):</strong> 務必使用食品級 PE 塑料袋包覆產品，避免乾燥的瓦楞紙箱將濕度全部吸光。</div>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-check-circle text-green-500 mt-1"></i>
                <div><strong>監控工具 (Monitoring Tools):</strong> 強烈建議採購百元內的電子溼度計放入箱中（USD 2–5）監控實況。</div>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-check-circle text-green-500 mt-1"></i>
                <div><strong>運輸注意 (Shipping Watchout):</strong> 碼垛裝櫃時，避免最上層紙箱頂部緊貼集裝箱天花板，防止溫差引發的「集裝箱雨」滴落導致紙箱潮濕破袋。</div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 7. FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">常見問題與解答 <span className="text-xl text-gray-500 font-normal block mt-2">Frequently Asked Questions</span></h2>
          </div>

          <div className="space-y-6">
            {/* FAQ 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Q：為什麼我的纖維素堆肥袋特別容易脆化破裂？</h4>
              <p className="text-gray-600 leading-relaxed"><strong>A：</strong> 纖維素是天然材料，非常依賴水分維持結構柔韌。當其內部含水率低於 6% 時，材料強度會驟降。在乾燥的倉庫或海運集裝箱內，往往在短短 48 小時內就會被抽乾水份而明顯脆化。</p>
            </div>
            
            {/* FAQ 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Q：你們的濕度包方案會不會讓紙箱或產品打溼發霉？</h4>
              <p className="text-gray-600 leading-relaxed"><strong>A：</strong> 絕對不會。我們的控濕包設計是『水氣形式擴散』（Vapor transition），所有液態水都被鎖在高分子聚合物基質中，不會有液態水滲出。加上 PE 內袋密封隔離，紙箱也不會受到影響。</p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Q：海外客戶（例如墨西哥）要怎麼落地這項操作？</h4>
              <p className="text-gray-600 leading-relaxed"><strong>A：</strong> 我們會提供完整的標準作業流程（SOP），包含中英文雙語的圖文操作說明書、短視頻教學，以及測試記錄表格，確保海外工廠和員工能輕鬆照做。</p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Q：導入這套方案，每箱成本大概增加多少？</h4>
              <p className="text-gray-600 leading-relaxed"><strong>A：</strong> 非常便宜！以推薦的「國產雙向控濕包」而言，每箱增加成本約不到 USD $0.3；若採用「DIY自製方案」，每箱成本甚至低於 USD $0.1。相比被索賠或退運的龐大損失，這是一筆絕對划算的投資。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA Section */}
      <section id="contact-form" className="py-24 bg-gradient-to-br from-green-900 to-teal-800 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            現在就讓你的堆肥袋不再脆化
            <span className="block text-2xl md:text-3xl text-emerald-300 font-semibold mt-4">Stop Cellulose Compost Bags from Becoming Brittle – Start Today</span>
          </h2>
          <p className="text-lg text-emerald-100 mb-10 max-w-2xl mx-auto">
            填寫下方表單，我們的包裝工程師會立刻為您分析並提供專屬的溼度控制測試方案（Customize Solution）。
          </p>
          
          <form className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl text-left max-w-2xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">公司名稱 / Company</label>
                <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900" placeholder="e.g. Acme Corp" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">聯絡信箱 / Email</label>
                <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900" placeholder="email@example.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">產品類型 / Package Type</label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900 bg-white">
                  <option value="">請選擇 / Please Select</option>
                  <option value="cellulose">纖維素堆肥袋 (Cellulose Compostable)</option>
                  <option value="pla">PLA 堆肥袋 (PLA Compostable)</option>
                  <option value="kraft">牛皮紙袋 (Kraft Paper Bags)</option>
                  <option value="other">其他 / Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">月出貨量 / Monthly Volume</label>
                <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900" placeholder="e.g. 50,000 pcs" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">目的地國家 / Destination</label>
                <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900" placeholder="e.g. USA, Mexico" />
              </div>
            </div>
            
            <button type="button" onClick={()=>{alert('Thank you for inquiry! We will contact you shortly.')}} className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
              立即取得客製方案 / Get Customized Solution Now <i className="fas fa-arrow-right"></i>
            </button>
            <p className="text-center text-xs text-gray-400 mt-4">We respect your privacy. All information is kept confidential.</p>
          </form>
        </div>
      </section>
    </>
  );
};

export default CompostableHumidityControlPage;
