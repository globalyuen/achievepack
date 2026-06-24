import json, fcntl

json_data = {
  "successTitle": "Check your email",
  "successDesc": "We've sent a password reset link to <0>{{email}}</0>",
  "successNote": "Click the link in the email to reset your password. If you don't see it, check your spam folder.",
  "backToLogin": "Back to login",
  "title": "Forgot password?",
  "subtitle": "No worries, we'll send you reset instructions.",
  "emailLabel": "Email address",
  "emailPlaceholder": "Enter your email",
  "btnSending": "Sending...",
  "btnReset": "Reset password",
  "rememberText": "Remember your password? <0>Sign in</0>"
}

file_path = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/locales/en.json'
with open(file_path, 'r+') as f:
    fcntl.flock(f, fcntl.LOCK_EX)
    data = json.load(f)
    
    if 'seoPages' not in data:
        data['seoPages'] = {}
    if 'pages' not in data['seoPages']:
        data['seoPages']['pages'] = {}
        
    data['seoPages']['pages']['forgotPassword'] = json_data
    
    f.seek(0)
    json.dump(data, f, indent=4, ensure_ascii=False)
    f.truncate()
    fcntl.flock(f, fcntl.LOCK_UN)

print("en.json updated successfully")
