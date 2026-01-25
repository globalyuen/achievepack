from openai import OpenAI
 
client = OpenAI(
     base_url="http://127.0.0.1:8045/v1",
     api_key="sk-dba150e59234455da6eba3dd1291ad6d"
)
 
response = client.chat.completions.create(
     model="claude-opus-4-5-thinking",
     messages=[{"role": "user", "content": "Hello"}]
)
 
print(response.choices[0].message.content)
