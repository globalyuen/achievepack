import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Trash2, Plus, ArrowLeft, Loader2, Ban } from 'lucide-react'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'

interface UnsubscribedEmail {
  id: number
  email: string
  reason: string
  created_at: string
}

export default function ProspectListsPage() {
  const [unsubs, setUnsubs] = useState<UnsubscribedEmail[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [newUnsubEmail, setNewUnsubEmail] = useState('')
  const [isAdding, setIsAdding] = useState(false)

  useEffect(() => {
    fetchUnsubs()
  }, [])

  const fetchUnsubs = async () => {
    setIsLoading(true)
    try {
      const res = await fetch('http://localhost:5001/api/lists/unsubscribe')
      const data = await res.json()
      if (data.success) {
        setUnsubs(data.results)
      }
    } catch (e) {
      toast.error("Failed to load unsubscribe list")
    } finally {
      setIsLoading(false)
    }
  }

  const handleAdd = async () => {
    if (!newUnsubEmail) return
    setIsAdding(true)
    try {
      const res = await fetch('http://localhost:5001/api/lists/unsubscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newUnsubEmail, reason: 'Manual Admin Add' })
      })
      const data = await res.json()
      if (data.success) {
        toast.success("Added to unsubscribe list")
        setNewUnsubEmail('')
        fetchUnsubs()
      } else {
        toast.error(data.error || "Failed to add")
      }
    } catch (e) {
      toast.error("Network error")
    } finally {
      setIsAdding(false)
    }
  }

  const handleRemove = async (id: number) => {
    if (!confirm("Are you sure you want to remove this email from the unsubscribe list? They will be able to receive emails again.")) return
    try {
      const res = await fetch(`http://localhost:5001/api/lists/unsubscribe/${id}`, {
        method: 'DELETE'
      })
      const data = await res.json()
      if (data.success) {
        toast.success("Removed from unsubscribe list")
        fetchUnsubs()
      }
    } catch (e) {
      toast.error("Failed to remove")
    }
  }

  return (
    <div className="min-h-screen bg-neutral-50 p-8 pt-24">
      <div className="max-w-4xl mx-auto">
        <Link to="/ctrl-x9k7m/prospects" className="inline-flex items-center text-sm text-neutral-500 hover:text-neutral-700 mb-6">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Prospect Finder
        </Link>
        
        <div className="flex justify-between items-center mb-8">
            <div>
                <h1 className="text-3xl font-bold text-neutral-900">List Management</h1>
                <p className="text-neutral-500">Manage Unsubscribes and Blocked Domains</p>
            </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Ban className="w-5 h-5 text-red-500" /> Unsubscribed Emails
            </h2>

            <div className="flex gap-2 mb-6 max-w-md">
                <Input 
                    placeholder="Enter email to block..." 
                    value={newUnsubEmail}
                    onChange={(e) => setNewUnsubEmail(e.target.value)}
                />
                <Button onClick={handleAdd} disabled={isAdding}>
                    {isAdding ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
                </Button>
            </div>

            {isLoading ? (
                <div className="py-10 text-center"><Loader2 className="w-6 h-6 animate-spin mx-auto text-neutral-400" /></div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-neutral-50 text-neutral-500 font-medium">
                            <tr>
                                <th className="px-4 py-3 rounded-tl-lg">Email</th>
                                <th className="px-4 py-3">Reason</th>
                                <th className="px-4 py-3">Date</th>
                                <th className="px-4 py-3 rounded-tr-lg text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-100">
                            {unsubs.length === 0 ? (
                                <tr>
                                    <td colSpan={4} className="px-4 py-8 text-center text-neutral-400">
                                        No unsubscribed emails found.
                                    </td>
                                </tr>
                            ) : (
                                unsubs.map((u) => (
                                    <tr key={u.id} className="hover:bg-neutral-50/50">
                                        <td className="px-4 py-3 font-medium text-neutral-900">{u.email}</td>
                                        <td className="px-4 py-3 text-neutral-500">{u.reason}</td>
                                        <td className="px-4 py-3 text-neutral-400">{new Date(u.created_at).toLocaleDateString()}</td>
                                        <td className="px-4 py-3 text-right">
                                            <Button 
                                                variant="ghost" 
                                                size="sm" 
                                                className="h-8 w-8 p-0 text-neutral-400 hover:text-red-600 hover:bg-red-50"
                                                onClick={() => handleRemove(u.id)}
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </Button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
      </div>
    </div>
  )
}
