import json, fcntl

json_data = {
  "slides": [
    {
      "title": "Customer Center Dashboard",
      "description": "Track all your orders, quotes, and documents in one centralized dashboard."
    },
    {
      "title": "Manage Quotes & Orders",
      "description": "Easily view, track, and manage all your quotes and orders with real-time status updates."
    },
    {
      "title": "Access Documents",
      "description": "Download certifications, compliance documents, and product catalogs anytime."
    },
    {
      "title": "Manage Artwork Files",
      "description": "Upload, review, and approve your packaging designs with our streamlined workflow."
    }
  ],
  "errorEmail": "Please enter your email address",
  "errorCode": "Please enter the 8-digit code",
  "backHome": "Back to Home",
  "titleSignIn": "Sign In to Achieve Pack",
  "titleVerify": "Enter Verification Code",
  "descSignIn": "Enter your email to receive a verification code",
  "descVerify": "We sent an 8-digit code to {{email}}",
  "emailLabel": "Email address",
  "emailPlaceholder": "Enter your email",
  "btnSending": "Sending...",
  "btnSendCode": "Get Verification Code",
  "dividerOr": "Or continue with",
  "btnGoogle": "Continue with Google",
  "resendCodeIn": "Resend code in {{countdown}}s",
  "btnResend": "Resend Code",
  "btnVerifying": "Verifying...",
  "btnVerify": "Continue",
  "btnBackEmail": "Use a different email",
  "termsText": "By signing in, you agree to our <0>Terms of Service</0> and <1>Privacy Policy</1>"
}

file_path = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/locales/en.json'
with open(file_path, 'r+') as f:
    fcntl.flock(f, fcntl.LOCK_EX)
    data = json.load(f)
    
    if 'seoPages' not in data:
        data['seoPages'] = {}
    if 'pages' not in data['seoPages']:
        data['seoPages']['pages'] = {}
        
    data['seoPages']['pages']['signIn'] = json_data
    
    f.seek(0)
    json.dump(data, f, indent=4, ensure_ascii=False)
    f.truncate()
    fcntl.flock(f, fcntl.LOCK_UN)

print("en.json updated successfully")
