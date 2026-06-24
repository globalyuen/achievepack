import json, fcntl, os

locales_path = 'src/locales/en.json'

data_to_add = {
  "importantNotice": {
    "title": "Important Notice - Please Read Before Approval",
    "notices": [
      "This proof is an exact duplicate of the original production artwork that will be used to print your product.",
      "All copy, punctuation and spelling has been proof read by the account executive.",
      "We will not be responsible for any discrepancies that are approved by the customer.",
      "Color Management will be controlled by other document."
    ],
    "tolerancesTitle": "Tolerances:",
    "tolerances": [
      "Bag Making Tolerance +/-2mm",
      "Color Tolerance +/-10%"
    ]
  },
  "checklist": {
    "size": "Size",
    "correct_colours": "Correct Colours",
    "eyespot_size_location": "Eyespot Size and Location",
    "weight_description": "Weight Description",
    "correct_upc_barcode": "Correct UPC/Bar Code",
    "roll_direction": "Roll Direction",
    "add_ons": "Add Ons (e.g. zipper, tear notch, etc)",
    "fin_lap_seal": "Fin/Lap Seal"
  },
  "upload": {
    "success": "Artwork overwritten successfully! Status reset to pending.",
    "fail": "Upload failed."
  },
  "status": {
    "approved": "Approved",
    "rejected": "Revision Needed",
    "pending": "Pending Review",
    "rejectedShort": "Need Revision"
  },
  "loading": {
    "message": "Loading artwork & document system..."
  },
  "notFound": {
    "title": "System Not Found",
    "message": "This system doesn't exist or has been removed."
  },
  "auth": {
    "title": "Artwork & Document System",
    "system": "System",
    "loading": "Loading...",
    "enterPassword": "Enter Password",
    "placeholder": "Access password",
    "incorrect": "Incorrect password. Please try again.",
    "submit": "Access System",
    "footer": "Password provided by AchievePack"
  },
  "header": {
    "title": "Artwork & Document System",
    "items": "{{count}} items / files",
    "pending": "{{count}} pending review",
    "submitReview": "Submit Review",
    "submit": "Submit"
  },
  "stats": {
    "pending": "Pending",
    "approved": "Approved",
    "rejected": "Need Revision"
  },
  "bulk": {
    "title": "Review All Files at Once",
    "desc": "Apply the same checklist verification and decision to all {{count}} files",
    "button": "Review All ({{count}})"
  },
  "search": {
    "placeholder": "Search by name, keyword, color..."
  },
  "sort": {
    "by": "Sort by",
    "activity": "Latest Activity",
    "newest": "Newest First",
    "oldest": "Oldest First",
    "name": "Name (A-Z)"
  },
  "filters": {
    "all": "All",
    "comments": "Comments",
    "withArtwork": "With Artwork",
    "blankCards": "Blank Cards",
    "approved": "Approved",
    "rejected": "Rejected",
    "pending": "Pending"
  },
  "item": {
    "pending": "Pending",
    "updated": "Updated:",
    "recently": "Recently",
    "size": "Size:",
    "reviewNow": "Review Now",
    "viewDetails": "View Details"
  },
  "overall": {
    "submit": "Submit All Reviews",
    "desc": "All {{count}} items / files have been reviewed. Click to finalize your submission."
  },
  "modal": {
    "title": "Review Artwork",
    "previewNotAvailable": "Preview not available",
    "fileSize": "File Size:",
    "pressProof": "Press Proof",
    "sourceLinkAvailable": "Source Link Available",
    "sourceLinkDesc": "Please use the original high-resolution source file for final color and dimension verification.",
    "downloadOriginal": "Download Original File",
    "autoDetect": "Auto-Detect",
    "checklistTitle": "Verification Checklist",
    "decisionTitle": "Your Decision",
    "approveAsIs": "Approve as is",
    "approveAsIsDesc": "Perfect! Ready for full commercial production.",
    "approveWithChanges": "Approve with changes",
    "approveWithChangesDesc": "Proceed after minor noted corrections.",
    "requiresRevision": "Requires Revision",
    "requiresRevisionDesc": "Do NOT print. Request new proof after changes.",
    "discussionThread": "Discussion Thread",
    "liveUpdates": "Live Updates",
    "initialFeedback": "Initial Feedback",
    "noDiscussion": "No discussion yet. Send a note to the production team.",
    "writeMessage": "Write a message...",
    "finalSummary": "Final Summary / Decision Notes",
    "cancel": "Cancel",
    "requestRevision": "Request Revision",
    "confirmApprove": "Confirm & Approve"
  }
}

with open(locales_path, 'r+') as f:
    fcntl.flock(f, fcntl.LOCK_EX)
    data = json.load(f)
    if 'seoPages' not in data:
        data['seoPages'] = {}
    if 'pages' not in data['seoPages']:
        data['seoPages']['pages'] = {}
    data['seoPages']['pages']['artworkReview'] = data_to_add
    f.seek(0)
    json.dump(data, f, indent=4, ensure_ascii=False)
    f.truncate()
    fcntl.flock(f, fcntl.LOCK_UN)
