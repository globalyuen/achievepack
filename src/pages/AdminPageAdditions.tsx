// This file contains the new sections to add to AdminPage.tsx

// Add this section after the Newsletter Tab (around line 686)

/*
  {/* Documents Tab *\/}
  {activeTab === 'documents' && (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Documents Management</h1>
        <button
          onClick={() => setShowUploadModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition"
        >
          <Upload className="h-5 w-5" />
          Upload Document
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Created</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {documents.map(doc => {
                const user = customers.find(c => c.id === doc.user_id)
                return (
                  <tr key={doc.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <FileText className="h-5 w-5 text-blue-600" />
                        </div>
                        <span className="text-sm font-medium text-gray-900">{doc.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {user?.full_name || user?.email || 'Unknown'}
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {doc.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate">
                      {doc.description || '-'}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {new Date(doc.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <a
                          href={doc.file_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:text-primary-700"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                        <button
                          onClick={() => deleteDocument(doc.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          {documents.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              No documents uploaded yet
            </div>
          )}
        </div>
      </div>
    </div>
  )}
*/

// Add this in the Order Detail Modal, after the shipping address section (around line 753)

/*
  {/* Tracking Information *\/}
  {selectedOrder.tracking_number && (
    <div>
      <p className="text-sm text-gray-500 mb-2">Tracking Information</p>
      <div className="bg-blue-50 rounded-lg p-4 space-y-2">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Carrier</p>
            <p className="font-medium">{selectedOrder.carrier || 'N/A'}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Tracking Number</p>
            <p className="font-mono font-medium">{selectedOrder.tracking_number}</p>
          </div>
        </div>
        {selectedOrder.tracking_url && (
          <a
            href={selectedOrder.tracking_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm"
          >
            <Truck className="h-4 w-4" />
            Track Package
            <ExternalLink className="h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  )}

  <div className="flex gap-3">
    <button
      onClick={() => {
        setTrackingForm({
          trackingNumber: selectedOrder.tracking_number || '',
          carrier: selectedOrder.carrier || '',
          trackingUrl: selectedOrder.tracking_url || ''
        })
        setShowTrackingModal(true)
      }}
      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
    >
      <Truck className="h-4 w-4" />
      {selectedOrder.tracking_number ? 'Update Tracking' : 'Add Tracking'}
    </button>
    <button
      onClick={() => deleteOrder(selectedOrder.id)}
      className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
    >
      <Trash2 className="h-4 w-4" />
      Delete Order
    </button>
  </div>
*/

// Add these modals before the closing div (around line 819, before the last closing tags)

/*
  {/* Upload Document Modal *\/}
  {showUploadModal && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-xl max-w-lg w-full">
        <div className="p-6 border-b flex items-center justify-between">
          <h2 className="text-xl font-bold">Upload Document</h2>
          <button onClick={() => setShowUploadModal(false)} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Customer</label>
            <select
              value={uploadForm.userId}
              onChange={(e) => setUploadForm({ ...uploadForm, userId: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="">Select customer</option>
              {customers.map(customer => (
                <option key={customer.id} value={customer.id}>
                  {customer.full_name} ({customer.email})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Document Name *</label>
            <input
              type="text"
              value={uploadForm.name}
              onChange={(e) => setUploadForm({ ...uploadForm, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
              placeholder="EN13432 Certificate"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Document Type</label>
            <select
              value={uploadForm.type}
              onChange={(e) => setUploadForm({ ...uploadForm, type: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="PDF">PDF</option>
              <option value="DOC">DOC</option>
              <option value="IMAGE">IMAGE</option>
              <option value="EXCEL">EXCEL</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              value={uploadForm.description}
              onChange={(e) => setUploadForm({ ...uploadForm, description: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
              rows={3}
              placeholder="Compostability certification document"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">File URL *</label>
            <input
              type="text"
              value={uploadForm.fileUrl}
              onChange={(e) => setUploadForm({ ...uploadForm, fileUrl: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
              placeholder="/docs/certifications/EN13432.pdf"
            />
            <p className="text-xs text-gray-500 mt-1">
              Upload file to /public/docs/ folder and enter the path here
            </p>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              onClick={uploadDocument}
              className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
            >
              Upload Document
            </button>
            <button
              onClick={() => setShowUploadModal(false)}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )}

  {/* Add Tracking Modal *\/}
  {showTrackingModal && selectedOrder && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-xl max-w-lg w-full">
        <div className="p-6 border-b flex items-center justify-between">
          <h2 className="text-xl font-bold">Add Tracking Information</h2>
          <button onClick={() => setShowTrackingModal(false)} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-6 space-y-4">
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <p className="text-sm text-gray-600">Order Number</p>
            <p className="font-semibold text-lg">{selectedOrder.order_number}</p>
            <p className="text-sm text-gray-600 mt-2">Customer: {selectedOrder.customer_name}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Carrier</label>
            <select
              value={trackingForm.carrier}
              onChange={(e) => setTrackingForm({ ...trackingForm, carrier: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="">Select carrier</option>
              <option value="DHL">DHL</option>
              <option value="FedEx">FedEx</option>
              <option value="UPS">UPS</option>
              <option value="SF Express">SF Express</option>
              <option value="China Post">China Post</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Tracking Number *</label>
            <input
              type="text"
              value={trackingForm.trackingNumber}
              onChange={(e) => setTrackingForm({ ...trackingForm, trackingNumber: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 font-mono"
              placeholder="1234567890"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Tracking URL (Optional)</label>
            <input
              type="text"
              value={trackingForm.trackingUrl}
              onChange={(e) => setTrackingForm({ ...trackingForm, trackingUrl: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
              placeholder="https://www.dhl.com/track?id=..."
            />
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-800">
            <p className="font-medium">⚠️ Note:</p>
            <p>Adding tracking will automatically update order status to "Shipped"</p>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              onClick={updateTracking}
              className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
            >
              Save Tracking Info
            </button>
            <button
              onClick={() => setShowTrackingModal(false)}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )}
*/
