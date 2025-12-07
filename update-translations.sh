#!/bin/bash

# Update Spanish (es.json)
sed -i '' 's/"sendTo": "Enviar a: ryan@achievepack.com"/"sendTo": "Enviar a"/' src/locales/es.json
sed -i '' 's/"addressTitle"/"address"/' src/locales/es.json
sed -i '' 's/"addressValue"/"addressLine1"/' src/locales/es.json
sed -i '' 's/"phoneTitle"/"phone"/' src/locales/es.json
sed -i '' 's/"phoneValue"/"phoneNumber"/' src/locales/es.json
sed -i '' 's/"emailTitle": "Email"/"email": "Email"/' src/locales/es.json
sed -i '' 's/"emailValue"/"emailAddress"/' src/locales/es.json
sed -i '' 's/"book"/"consultation"/' src/locales/es.json
sed -i '' 's/"desc": "Programe/"description": "Programe/' src/locales/es.json
sed -i '' 's/"btn"/"button"/' src/locales/es.json
sed -i '' 's/"reg": {/"registration": {/' src/locales/es.json
sed -i '' 's/"desc": "Número de registro/"number": "Número de registro/' src/locales/es.json
sed -i '' 's/"company": "Achieve Pack"/"brand": "Achieve Pack"/' src/locales/es.json
sed -i '' 's/"desc": "Liderando/"tagline": "Liderando/' src/locales/es.json
sed -i '' 's/"rights"/"copyright"/' src/locales/es.json
sed -i '' 's/"productsTitle"/"title"/' src/locales/es.json
sed -i '' 's/"companyTitle"/"title"/' src/locales/es.json
sed -i '' 's/"contactTitle"/"title"/' src/locales/es.json
sed -i '' 's/"reg": "Número de registro empresarial/"registration": "Número de registro empresarial/' src/locales/es.json

# Update Chinese (zh-TW.json)
sed -i '' 's/"sendTo": "發送至：ryan@achievepack.com"/"sendTo": "發送至"/' src/locales/zh-TW.json
sed -i '' 's/"addressTitle"/"address"/' src/locales/zh-TW.json
sed -i '' 's/"addressValue"/"addressLine1"/' src/locales/zh-TW.json
sed -i '' 's/"phoneTitle"/"phone"/' src/locales/zh-TW.json
sed -i '' 's/"phoneValue"/"phoneNumber"/' src/locales/zh-TW.json
sed -i '' 's/"emailTitle": "電子郵件"/"email": "電子郵件"/' src/locales/zh-TW.json
sed -i '' 's/"emailValue"/"emailAddress"/' src/locales/zh-TW.json
sed -i '' 's/"book"/"consultation"/' src/locales/zh-TW.json
sed -i '' 's/"desc": "安排/"description": "安排/' src/locales/zh-TW.json
sed -i '' 's/"btn"/"button"/' src/locales/zh-TW.json
sed -i '' 's/"reg": {/"registration": {/' src/locales/zh-TW.json
sed -i '' 's/"desc": "香港商業登記號碼/"number": "香港商業登記號碼/' src/locales/zh-TW.json
sed -i '' 's/"company": "Achieve Pack"/"brand": "Achieve Pack"/' src/locales/zh-TW.json
sed -i '' 's/"desc": "以認證的環保解決方案/"tagline": "以認證的環保解決方案/' src/locales/zh-TW.json
sed -i '' 's/"rights"/"copyright"/' src/locales/zh-TW.json
sed -i '' 's/"productsTitle"/"title"/' src/locales/zh-TW.json
sed -i '' 's/"companyTitle"/"title"/' src/locales/zh-TW.json
sed -i '' 's/"contactTitle"/"title"/' src/locales/zh-TW.json
sed -i '' 's/"reg": "香港商業登記號碼/"registration": "香港商業登記號碼/' src/locales/zh-TW.json

echo "Translation files updated successfully!"
