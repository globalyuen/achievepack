from anthropic import Anthropic
 
client = Anthropic(
     # 推荐使用 127.0.0.1
     base_url="http://127.0.0.1:8045",
     api_key="sk-dba150e59234455da6eba3dd1291ad6d"
)
 
# 注意: Antigravity 支持使用 Anthropic SDK 调用任意模型
response = client.messages.create(
     model="claude-opus-4-5-thinking",
     max_tokens=1024,
     messages=[{"role": "user", "content": "Hello"}]
)
 
print(response.content[0].text)
