import React, { useState } from 'react'
import { Truck, X, Globe, MapPin, Loader2 } from 'lucide-react'
import { supabase } from '../../lib/supabase'

interface AddShippingModalProps {
    projectId: string
    orderId: string
    orderNumber: string
    onClose: () => void
    onSuccess: () => void
}

const ProjectAddShippingModal: React.FC<AddShippingModalProps> = ({
    projectId,
    orderId,
    orderNumber,
    onClose,
    onSuccess
}) => {
    const [loading, setLoading] = useState(false)
    const [trackingNumber, setTrackingNumber] = useState('')
    const [carrier, setCarrier] = useState('FedEx')
    const [trackingUrl, setTrackingUrl] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            const { error } = await supabase.from('orders')
                .update({
                    tracking_number: trackingNumber,
                    carrier: carrier,
                    tracking_url: trackingUrl,
                    status: 'shipped'
                })
                .eq('id', orderId)

            if (error) throw error

            // Add activity note
            await supabase.from('project_comments').insert({
                project_id: projectId,
                message: `Shipping information added for Order ${orderNumber}: ${trackingNumber} (${carrier})`,
                message_type: 'status',
                is_admin: true
            })

            onSuccess()
        } catch (err) {
            console.error('Error adding shipping:', err)
            alert('Failed to add shipping info')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-gray-900/60 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-white rounded-[40px] shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-300">
                <div className="px-10 pt-10 pb-6 flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-black text-gray-900 flex items-center gap-3">
                            <Truck className="text-blue-500" />
                            Add Shipping Info
                        </h2>
                        <p className="text-sm text-gray-400 font-bold mt-1">For Order: {orderNumber}</p>
                    </div>
                    <button onClick={onClose} className="p-3 bg-gray-50 text-gray-400 hover:text-gray-900 rounded-2xl transition">
                        <X className="h-6 w-6" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="px-10 pb-10 space-y-6">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-xs font-black text-gray-400 uppercase mb-2">Carrier</label>
                            <select
                                value={carrier}
                                onChange={(e) => setCarrier(e.target.value)}
                                className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm font-bold focus:ring-2 focus:ring-primary-500/20"
                            >
                                <option value="FedEx">FedEx</option>
                                <option value="DHL">DHL</option>
                                <option value="UPS">UPS</option>
                                <option value="SF Express">SF Express</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-black text-gray-400 uppercase mb-2">Tracking Number</label>
                            <div className="relative">
                                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <input
                                    type="text"
                                    value={trackingNumber}
                                    onChange={(e) => setTrackingNumber(e.target.value)}
                                    placeholder="Enter tracking #"
                                    className="w-full bg-gray-50 border-none rounded-2xl p-4 pl-10 text-sm font-bold focus:ring-2 focus:ring-primary-500/20"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-black text-gray-400 uppercase mb-2">Tracking URL (Optional)</label>
                            <div className="relative">
                                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <input
                                    type="url"
                                    value={trackingUrl}
                                    onChange={(e) => setTrackingUrl(e.target.value)}
                                    placeholder="https://..."
                                    className="w-full bg-gray-50 border-none rounded-2xl p-4 pl-10 text-sm font-bold focus:ring-2 focus:ring-primary-500/20"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 flex gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-6 py-4 bg-gray-50 text-gray-600 rounded-2xl hover:bg-gray-100 transition font-bold"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex-[2] px-6 py-4 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition font-bold shadow-lg shadow-blue-100 flex items-center justify-center gap-2"
                        >
                            {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Confirm Shipment'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProjectAddShippingModal
