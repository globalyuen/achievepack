import json, fcntl

locales_path = 'src/locales/en.json'

data_to_add = {
  "title": "Order processing workflow",
  "subtitle": "Achieve Pack inside order and quotation management system operation guide",
  "backToDashboard": "Back to Dashboard",
  "workflowSteps": [
    {
      "title": "RFQ / Quotation",
      "desc": "Customer raises inquiry, management staff returns quote",
      "f1": "View all pending RFQs",
      "f2": "Return quote and send email",
      "f3": "Send email with tracking link",
      "f4": "Mark quote status (Sent, Accepted, Rejected)"
    },
    {
      "title": "Artwork / Design Draft",
      "desc": "Process customer uploaded design drafts and provide feedback",
      "f1": "Review design draft",
      "f2": "Add review comments and feedback",
      "f3": "Approve or reject design draft",
      "f4": "Manage design draft versions"
    },
    {
      "title": "Store Orders",
      "desc": "Manage website store orders from production to delivery",
      "f1": "View all order statuses",
      "f2": "Update order status (Pending, Confirmed, Production, Shipped)",
      "f3": "Manage payment status",
      "f4": "Add order notes"
    },
    {
      "title": "Shipping / Logistics Tracking",
      "desc": "Add logistics info and notify customer",
      "f1": "Add tracking number",
      "f2": "Upload logistics photos",
      "f3": "Send logistics update emails",
      "f4": "View delivery history"
    }
  ],
  "fastGuide": {
    "title": "Fast Guide",
    "quickAccess": {
      "title": "Quick Access",
      "l1": "Pending RFQ",
      "l2": "Pending Artwork Review",
      "l3": "Pending Orders"
    },
    "workQueue": {
      "title": "Work Queue",
      "l1": "Today's Tasks",
      "l2": "Urgent Processing",
      "l3": "To Follow Up"
    }
  },
  "management": {
    "title": "Management Functions",
    "f1": {
      "title": "Global Search",
      "desc": "Search orders, customers, RFQ numbers"
    },
    "f2": {
      "title": "Advanced Filters",
      "desc": "Filter by status, date, customer"
    },
    "f3": {
      "title": "Internal Notes",
      "desc": "Add team notes for orders"
    },
    "f4": {
      "title": "Email Notifications",
      "desc": "Automatically send status update emails"
    },
    "f5": {
      "title": "Export Data",
      "desc": "Export order and quote data"
    },
    "f6": {
      "title": "Customer Management",
      "desc": "View customer history and details"
    }
  },
  "statusLegend": {
    "title": "Status Instructions",
    "rfq": {
      "title": "RFQ Status",
      "s1": "Pending - Unprocessed",
      "s2": "Quoted - Already Quoted",
      "s3": "Accepted - Already Accepted",
      "s4": "Rejected - Already Rejected"
    },
    "order": {
      "title": "Order Status",
      "s1": "Pending - Unprocessed",
      "s2": "Confirmed - Already Confirmed",
      "s3": "Production - In Production",
      "s4": "Shipped - Already Shipped",
      "s5": "Delivered - Already Delivered"
    },
    "payment": {
      "title": "Payment Status",
      "s1": "Unpaid - Not Paid",
      "s2": "Deposit Paid - Deposit Already Paid",
      "s3": "Paid - Fully Paid"
    },
    "artwork": {
      "title": "Design Draft Status",
      "s1": "Pending Review - Waiting for Review",
      "s2": "In Review - Reviewing",
      "s3": "Approved - Already Approved",
      "s4": "Needs Changes - Requires Changes"
    }
  },
  "cta": {
    "title": "Ready to start processing orders?",
    "desc": "Click the button below to enter the order management system",
    "btn": "Enter Order Management"
  }
}

with open(locales_path, 'r+') as f:
    fcntl.flock(f, fcntl.LOCK_EX)
    data = json.load(f)
    if 'seoPages' not in data:
        data['seoPages'] = {}
    if 'pages' not in data['seoPages']:
        data['seoPages']['pages'] = {}
    if 'orderWorkflow' not in data['seoPages']['pages']:
        data['seoPages']['pages']['orderWorkflow'] = {}
    data['seoPages']['pages']['orderWorkflow'].update(data_to_add)
    f.seek(0)
    json.dump(data, f, indent=4, ensure_ascii=False)
    f.truncate()
    fcntl.flock(f, fcntl.LOCK_UN)
