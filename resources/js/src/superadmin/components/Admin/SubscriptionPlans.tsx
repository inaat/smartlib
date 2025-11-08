import React, { useState, useEffect } from 'react';
import { adminAPI } from '@/shared/services/api';
import {
  CreditCard,
  Plus,
  Edit3,
  Trash2,
  Check,
  X
} from 'lucide-react';
import { Dialog } from '@headlessui/react';

interface SubscriptionPlan {
  id: number;
  name: string;
  description?: string;
  price: number;
  duration_days: number;
  seat_bookings_limit?: number;
  book_reservations_limit?: number;
  digital_books_access: boolean;
  priority_booking: boolean;
  event_discounts?: number;
  features?: string[] | string;
  status: 'active' | 'inactive';
  created_at: string;
  updated_at: string;
}

const SubscriptionPlans: React.FC = () => {
  const [plans, setPlans] = useState<SubscriptionPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingPlan, setEditingPlan] = useState<SubscriptionPlan | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    duration_days: '',
    seat_bookings_limit: '',
    book_reservations_limit: '',
    digital_books_access: false,
    priority_booking: false,
    event_discounts: '',
    features: '',
    status: 'active' as 'active' | 'inactive',
  });

  useEffect(() => {
    loadPlans();
  }, []);

  const loadPlans = async () => {
    try {
      setLoading(true);
      const response = await adminAPI.getSubscriptionPlans();
      setPlans(response.data);
    } catch (error) {
      console.error('Failed to load subscription plans:', error);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      price: '',
      duration_days: '',
      seat_bookings_limit: '',
      book_reservations_limit: '',
      digital_books_access: false,
      priority_booking: false,
      event_discounts: '',
      features: '',
      status: 'active',
    });
    setEditingPlan(null);
  };

  const handleEdit = (plan: SubscriptionPlan) => {
    setEditingPlan(plan);
    setFormData({
      name: plan.name || '',
      description: plan.description || '',
      price: plan.price?.toString() || '0',
      duration_days: plan.duration_days?.toString() || '30',
      seat_bookings_limit: plan.seat_bookings_limit?.toString() || '',
      book_reservations_limit: plan.book_reservations_limit?.toString() || '',
      digital_books_access: plan.digital_books_access || false,
      priority_booking: plan.priority_booking || false,
      event_discounts: plan.event_discounts?.toString() || '',
      features: Array.isArray(plan.features) ? plan.features.join('\n') : (plan.features || ''),
      status: plan.status || 'active',
    });
    setShowModal(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const featuresArray = formData.features
      .split('\n')
      .map(f => f.trim())
      .filter(f => f.length > 0);

    const payload = {
      name: formData.name,
      description: formData.description || null,
      price: parseFloat(formData.price),
      duration_days: parseInt(formData.duration_days),
      seat_bookings_limit: formData.seat_bookings_limit ? parseInt(formData.seat_bookings_limit) : null,
      book_reservations_limit: formData.book_reservations_limit ? parseInt(formData.book_reservations_limit) : null,
      digital_books_access: formData.digital_books_access,
      priority_booking: formData.priority_booking,
      event_discounts: formData.event_discounts ? parseInt(formData.event_discounts) : null,
      features: featuresArray,
      status: formData.status,
    };

    try {
      if (editingPlan) {
        await adminAPI.updateSubscriptionPlan(editingPlan.id.toString(), payload);
      } else {
        await adminAPI.createSubscriptionPlan(payload);
      }

      setShowModal(false);
      resetForm();
      await loadPlans();
    } catch (error) {
      console.error('Failed to save subscription plan:', error);
      alert('Failed to save subscription plan. Please try again.');
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this subscription plan?')) {
      return;
    }

    try {
      await adminAPI.deleteSubscriptionPlan(id.toString());
      await loadPlans();
    } catch (error) {
      console.error('Failed to delete subscription plan:', error);
      alert('Failed to delete subscription plan. Please try again.');
    }
  };

  const getPriceBadge = (price: number | string) => {
    const numPrice = typeof price === 'string' ? parseFloat(price) : price;
    if (numPrice === 0 || isNaN(numPrice)) {
      return <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Free</span>;
    }
    return <span className="text-lg font-bold text-gray-800">${numPrice.toFixed(2)}</span>;
  };

  const getStatusBadge = (status: string) => {
    return status === 'active'
      ? <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Active</span>
      : <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">Inactive</span>;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-gray-600">Loading subscription plans...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Subscription Plans</h2>
          <p className="text-gray-600 text-sm mt-1">Manage subscription plans and pricing</p>
        </div>

        <button
          onClick={() => {
            resetForm();
            setShowModal(true);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add Plan</span>
        </button>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan) => {
          const features = Array.isArray(plan.features) ? plan.features : [];

          return (
            <div key={plan.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{plan.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{plan.description}</p>
                </div>
                {getStatusBadge(plan.status)}
              </div>

              <div className="mb-4">
                {getPriceBadge(plan.price)}
                <span className="text-sm text-gray-600 ml-2">/ {plan.duration_days} days</span>
              </div>

              <div className="space-y-2 mb-4">
                {plan.seat_bookings_limit && (
                  <div className="flex items-center text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    <span>{plan.seat_bookings_limit} seat bookings</span>
                  </div>
                )}
                {plan.book_reservations_limit && (
                  <div className="flex items-center text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    <span>{plan.book_reservations_limit} book reservations</span>
                  </div>
                )}
                {plan.digital_books_access && (
                  <div className="flex items-center text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    <span>Digital books access</span>
                  </div>
                )}
                {plan.priority_booking && (
                  <div className="flex items-center text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    <span>Priority booking</span>
                  </div>
                )}
                {plan.event_discounts && plan.event_discounts > 0 && (
                  <div className="flex items-center text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    <span>{plan.event_discounts}% event discounts</span>
                  </div>
                )}
              </div>

              {features.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-xs font-medium text-gray-500 uppercase mb-2">Features</h4>
                  <ul className="space-y-1">
                    {features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-700 flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex space-x-2 pt-4 border-t border-gray-200">
                <button
                  onClick={() => handleEdit(plan)}
                  className="flex-1 text-blue-600 hover:text-blue-700 text-sm font-medium py-2 px-3 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center"
                >
                  <Edit3 className="w-4 h-4 mr-1" />
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(plan.id)}
                  className="flex-1 text-red-600 hover:text-red-700 text-sm font-medium py-2 px-3 border border-red-200 rounded-lg hover:bg-red-50 transition-colors flex items-center justify-center"
                >
                  <Trash2 className="w-4 h-4 mr-1" />
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {plans.length === 0 && (
        <div className="text-center py-12 bg-white rounded-xl shadow-sm border border-gray-200">
          <CreditCard className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-800 mb-2">No subscription plans</h3>
          <p className="text-gray-600 mb-4">Get started by creating your first subscription plan</p>
          <button
            onClick={() => {
              resetForm();
              setShowModal(true);
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Plan
          </button>
        </div>
      )}

      {/* Add/Edit Modal */}
      <Dialog open={showModal} onClose={() => setShowModal(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <Dialog.Title className="text-lg font-semibold text-gray-800 mb-4">
                {editingPlan ? 'Edit Subscription Plan' : 'Add New Subscription Plan'}
              </Dialog.Title>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Plan Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                      placeholder="e.g., Basic, Premium, Enterprise"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                    <select
                      value={formData.status}
                      onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value as 'active' | 'inactive' }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Brief description of the plan"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Price ($) *</label>
                    <input
                      type="number"
                      step="0.01"
                      value={formData.price}
                      onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                      placeholder="0.00"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Duration (days) *</label>
                    <input
                      type="number"
                      value={formData.duration_days}
                      onChange={(e) => setFormData(prev => ({ ...prev, duration_days: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                      placeholder="30"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Seat Bookings Limit</label>
                    <input
                      type="number"
                      value={formData.seat_bookings_limit}
                      onChange={(e) => setFormData(prev => ({ ...prev, seat_bookings_limit: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Unlimited if empty"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Book Reservations Limit</label>
                    <input
                      type="number"
                      value={formData.book_reservations_limit}
                      onChange={(e) => setFormData(prev => ({ ...prev, book_reservations_limit: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Unlimited if empty"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={formData.digital_books_access}
                        onChange={(e) => setFormData(prev => ({ ...prev, digital_books_access: e.target.checked }))}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">Digital Books Access</span>
                    </label>
                  </div>

                  <div>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={formData.priority_booking}
                        onChange={(e) => setFormData(prev => ({ ...prev, priority_booking: e.target.checked }))}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">Priority Booking</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Event Discounts (%)</label>
                  <input
                    type="number"
                    value={formData.event_discounts}
                    onChange={(e) => setFormData(prev => ({ ...prev, event_discounts: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="0-100"
                    min="0"
                    max="100"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Features (one per line)</label>
                  <textarea
                    value={formData.features}
                    onChange={(e) => setFormData(prev => ({ ...prev, features: e.target.value }))}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Access to all libraries&#10;Free Wi-Fi&#10;Study room access&#10;24/7 support"
                  />
                  <p className="text-xs text-gray-500 mt-1">Enter each feature on a new line</p>
                </div>

                <div className="flex space-x-3 pt-4">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    {editingPlan ? 'Update Plan' : 'Create Plan'}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      resetForm();
                    }}
                    className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default SubscriptionPlans;
