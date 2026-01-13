import React, { useState } from 'react'
import { Package, X, DollarSign, ShoppingBag, Loader2 } from 'lucide-react'
import { supabase } from '../../lib/supabase'

interface AddOrderModalProps {
    projectId: string
    customerEmail: string
    customerName: string
    orderType: 'stock' | 'custom'
    onClose: () => void
    onSuccess: () => void
}

const ProjectAddOrderModal: React.FC<AddOrderModalProps> = ({
    projectId,
    customerEmail,
    customerName,
    orderType,
    onClose,
    onSuccess
}) => {
    const [loading, setLoading] = useState(false)
    const [amount, setAmount] = useState('')
    const [orderNumber, setOrderNumber] = useState(`ORD-${Date.now().toString().slice(-6)}`)
    const [notes, setNotes] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            const { error } = await supabase.from('orders').insert({
                project_id: projectId,
                order_number: orderNumber,
                order_type: orderType,
                customer_email: customerEmail,
                customer_name: customerName,
                total_amount: parseFloat(amount) || 0,
                status: 'pending',
                notes: notes,
                items: [{ name: `${orderType === 'stock' ? 'Stock' : 'Custom'} Order Item`, quantity: 1, price: parseFloat(amount) || 0 }]
            })

            if (error) throw error

            // Add activity note
            await supabase.from('project_comments').insert({
                project_id: projectId,
                message: `New ${orderType} order created: ${orderNumber}`,
                message_type: 'status',
                is_admin: true
            })

            onSuccess()
        } catch (err) {
            console.error('Error adding order:', err)
            alert('Failed to add order')
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
                            {orderType === 'stock' ? <ShoppingBag className="text-blue-500" /> : <Package className="text-purple-500" />}
                            Add {orderType === 'stock' ? 'Stock' : 'Custom'} Order
                        </h2>
                        <p className="text-sm text-gray-400 font-bold mt-1">Linking to Project: {projectId.slice(0, 8)}...</p>
                    </div>
                    <button onClick={onClose} className="p-3 bg-gray-50 text-gray-400 hover:text-gray-900 rounded-2xl transition">
                        <X className="h-6 w-6" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="px-10 pb-10 space-y-6">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-xs font-black text-gray-400 uppercase mb-2">Order Number</label>
                            <input
                                type="text"
                                value={orderNumber}
                                onChange={(e) => setOrderNumber(e.target.value)}
                                className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm font-bold focus:ring-2 focus:ring-primary-500/20"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-black text-gray-400 uppercase mb-2">Total Amount ($)</label>
                            <div className="relative">
                                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <input
                                    type="number"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    placeholder="0.00"
                                    className="w-full bg-gray-50 border-none rounded-2xl p-4 pl-10 text-sm font-bold focus:ring-2 focus:ring-primary-500/20"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-black text-gray-400 uppercase mb-2">Internal Notes</label>
                            <textarea
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                                placeholder="Any special instructions..."
                                className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm font-bold focus:ring-2 focus:ring-primary-500/20 min-h-[100px] resize-none"
                            />
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
                            className="flex-[2] px-6 py-4 bg-primary-600 text-white rounded-2xl hover:bg-primary-700 transition font-bold shadow-lg shadow-primary-100 flex items-center justify-center gap-2"
                        >
                            {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Confirm Order Creation'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProjectAddOrderModal
