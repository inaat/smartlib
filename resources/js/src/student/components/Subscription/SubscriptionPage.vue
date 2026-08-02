<template>
  <div class="space-y-6 font-outfit">
    <div v-if="isLoading" class="flex flex-col items-center justify-center py-24 space-y-4">
      <div class="animate-spin rounded-full h-10 w-10 border-2 border-blue-600 border-t-transparent"></div>
      <p class="text-xs font-semibold text-slate-400 uppercase tracking-wider animate-pulse">Loading subscription plans...</p>
    </div>
    
    <template v-else>
      <!-- Expired Plan Alert -->
      <div v-if="isPlanExpired" class="bg-rose-50/60 border border-rose-200 p-5 rounded-2xl mb-8 flex items-center shadow-sm text-left">
        <div class="p-3 bg-rose-100 border border-rose-200 rounded-xl text-rose-600 mr-4">
          <AlertTriangle class="w-5 h-5" />
        </div>
        <div>
          <h3 class="text-sm font-semibold text-rose-800 uppercase tracking-wider">Your subscription has expired</h3>
          <p class="text-xs text-rose-605/90 mt-1">Please select and subscribe to a plan below to resume library and seat booking access.</p>
        </div>
      </div>

      <!-- Current Active Plan Summary -->
      <div v-if="user?.active_subscription" class="bg-blue-600 rounded-3xl p-8 text-white shadow-lg relative overflow-hidden mb-12 border border-blue-700">
        <div class="absolute -right-10 -top-10 w-56 h-56 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
        <div class="absolute -left-10 -bottom-10 w-56 h-56 bg-white/5 rounded-full blur-xl pointer-events-none"></div>
        
        <div class="relative z-10 text-left">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div class="text-left">
              <div class="inline-flex items-center px-3 py-1 rounded-full bg-white/15 border border-white/20 text-white text-[10px] font-medium uppercase tracking-wider mb-4">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse"></span>
                Active Subscription
              </div>
              <h2 class="text-3xl font-bold tracking-tight mb-2 text-white leading-tight">{{ user.active_subscription.subscription_plan?.name }}</h2>
              <p class="text-blue-100 text-sm max-w-xl mb-5 font-normal leading-relaxed">{{ user.active_subscription.subscription_plan?.description }}</p>
              <div class="flex flex-wrap gap-4 text-xs font-semibold text-white/90">
                <div class="flex items-center bg-white/10 border border-white/15 px-3 py-1.5 rounded-xl">
                  <Calendar class="w-3.5 h-3.5 mr-2 text-blue-200" />
                  <span>Expires: {{ formatDate(user.active_subscription.expires_at) }}</span>
                </div>
                <div class="flex items-center bg-white/10 border border-white/15 px-3 py-1.5 rounded-xl">
                  <CreditCard class="w-3.5 h-3.5 mr-2 text-emerald-300" />
                  <span>Paid: Rs. {{ user.active_subscription.amount_paid }}</span>
                </div>
              </div>
            </div>
            <div class="flex flex-col items-start md:items-end gap-1 bg-white/10 border border-white/15 rounded-2xl p-4 md:p-6 min-w-[140px] text-left md:text-right">
              <div class="text-[10px] font-semibold text-blue-200 uppercase tracking-widest leading-none">Days Remaining</div>
              <div class="text-4xl font-bold text-white mt-1.5 leading-none">{{ calculateRemainingDays(user.active_subscription.expires_at) }}</div>
            </div>
          </div>

          <!-- Current Plan Limits -->
          <div class="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 pt-8 border-t border-white/15">
            <div class="bg-white/10 border border-white/15 rounded-2xl p-4 hover:bg-white/15 transition-colors duration-200">
              <div class="text-[10px] font-extrabold text-blue-200 uppercase tracking-widest mb-1.5 leading-none">Daily Seats</div>
              <div class="text-xl font-bold text-white leading-none">{{ user.active_subscription.subscription_plan?.daily_seat_bookings_limit === -1 || !user.active_subscription.subscription_plan?.daily_seat_bookings_limit ? '∞' : user.active_subscription.subscription_plan?.daily_seat_bookings_limit }}</div>
            </div>
            <div class="bg-white/10 border border-white/15 rounded-2xl p-4 hover:bg-white/15 transition-colors duration-200">
              <div class="text-[10px] font-extrabold text-blue-200 uppercase tracking-widest mb-1.5 leading-none">Monthly Seats</div>
              <div class="text-xl font-bold text-white leading-none">{{ user.active_subscription.subscription_plan?.monthly_seat_bookings_limit === -1 || !user.active_subscription.subscription_plan?.monthly_seat_bookings_limit ? '∞' : user.active_subscription.subscription_plan?.monthly_seat_bookings_limit }}</div>
            </div>
            <div class="bg-white/10 border border-white/15 rounded-2xl p-4 hover:bg-white/15 transition-colors duration-200">
              <div class="text-[10px] font-extrabold text-blue-200 uppercase tracking-widest mb-1.5 leading-none">Libraries Access</div>
              <div class="text-xl font-bold text-white leading-none">{{ user.active_subscription.subscription_plan?.libraries_access_limit === -1 || !user.active_subscription.subscription_plan?.libraries_access_limit ? '∞' : user.active_subscription.subscription_plan?.libraries_access_limit }}</div>
            </div>
            <div class="bg-white/10 border border-white/15 rounded-2xl p-4 hover:bg-white/15 transition-colors duration-200">
              <div class="text-[10px] font-extrabold text-blue-200 uppercase tracking-widest mb-1.5 leading-none">Books Access</div>
              <div class="text-xl font-bold text-white leading-none">{{ user.active_subscription.subscription_plan?.books_access_limit === -1 || !user.active_subscription.subscription_plan?.books_access_limit ? '∞' : user.active_subscription.subscription_plan?.books_access_limit }}</div>
            </div>
            <div class="bg-white/10 border border-white/15 rounded-2xl p-4 hover:bg-white/15 transition-colors duration-200">
              <div class="text-[10px] font-extrabold text-blue-200 uppercase tracking-widest mb-1.5 leading-none">Events Limit</div>
              <div class="text-xl font-bold text-white leading-none">{{ user.active_subscription.subscription_plan?.events_joining_limit === -1 || !user.active_subscription.subscription_plan?.events_joining_limit ? '∞' : user.active_subscription.subscription_plan?.events_joining_limit }}</div>
            </div>
            <div class="bg-white/10 border border-white/15 rounded-2xl p-4 hover:bg-white/15 transition-colors duration-200">
              <div class="text-[10px] font-extrabold text-blue-200 uppercase tracking-widest mb-1.5 leading-none">Adv. Booking</div>
              <div class="text-xl font-bold text-white leading-none">
                <span v-if="user.active_subscription.subscription_plan?.advance_booking_days === -1">∞</span>
                <span v-else-if="user.active_subscription.subscription_plan?.advance_booking_days === 0">Today</span>
                <span v-else>{{ user.active_subscription.subscription_plan?.advance_booking_days }}d</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Choose Your Plan Header -->
      <div class="text-left mt-10 mb-8">
        <h2 class="text-2xl font-bold text-slate-800 tracking-tight font-outfit">Choose Your Plan</h2>
      </div>

      <!-- All Plans Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch mb-12">
        <div 
          v-for="plan in plans" 
          :key="plan.id"
          :class="[
            plan.name.toLowerCase().includes('premium') || plan.name.toLowerCase().includes('pro')
              ? 'bg-white border-2 border-blue-600 rounded-3xl p-7 shadow-xl shadow-blue-500/10 flex flex-col justify-between text-left relative transform lg:-translate-y-2'
              : 'bg-white border border-slate-200/90 rounded-3xl p-7 shadow-sm hover:border-blue-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between text-left'
          ]"
        >
          <!-- Badge overlay -->
          <div 
            v-if="plan.name.toLowerCase().includes('premium') || plan.name.toLowerCase().includes('pro')" 
            class="absolute -top-3.5 right-6 bg-blue-600 text-white text-[9.5px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md shadow-blue-500/20 border border-blue-400"
          >
            Popular Choice
          </div>

          <!-- Card Content -->
          <div class="flex-grow flex flex-col">
            <!-- Header Section (Plan title, Price, bookings) -->
            <div>
              <h3 class="text-xl font-extrabold text-slate-800 tracking-tight">{{ plan.name }}</h3>
              <p v-if="plan.description" class="text-xs text-slate-500 mt-1 font-medium leading-relaxed">
                {{ plan.description }}
              </p>
              
              <div class="price-box my-6 flex flex-col items-start justify-center">
                <div class="flex items-center gap-2 mb-1" v-if="plan.features?.discount_type && plan.features?.discount_type !== 'none'">
                  <span class="text-xs text-slate-400 line-through">PKR {{ formatPrice(plan.features?.original_price) }}</span>
                  <span class="text-[9px] font-black uppercase bg-emerald-50 border border-emerald-200 text-emerald-600 px-2 py-0.5 rounded">
                    {{ plan.features?.discount_type === 'percentage' ? `${plan.features?.discount_value}% OFF` : `PKR ${plan.features?.discount_value} OFF` }}
                  </span>
                </div>
                <div class="flex items-baseline flex-wrap gap-1">
                  <span class="text-3xl font-black text-slate-900 tracking-tight">PKR {{ formatPrice(plan.price) }}</span>
                  <span class="text-xs font-semibold text-slate-500 ml-1 whitespace-nowrap">
                    / {{ formatDuration(plan.duration_days) }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Features List -->
            <ul class="w-full space-y-3.5 text-left border-t border-slate-100/80 pt-6">
              <li class="flex items-center space-x-2.5 text-xs text-slate-600 font-medium">
                <Check class="h-4 w-4 text-blue-600 flex-shrink-0" />
                <span>
                  {{ plan.daily_seat_bookings_limit === -1 || !plan.daily_seat_bookings_limit ? 'Unlimited Daily Seat Bookings' : `${plan.daily_seat_bookings_limit} Daily Seat Bookings` }}
                </span>
              </li>
              <li class="flex items-center space-x-2.5 text-xs text-slate-600 font-medium">
                <Check class="h-4 w-4 text-blue-600 flex-shrink-0" />
                <span>
                  {{ plan.monthly_seat_bookings_limit === -1 || !plan.monthly_seat_bookings_limit ? 'Unlimited Monthly Seat Bookings' : `${plan.monthly_seat_bookings_limit} Monthly Seat Bookings` }}
                </span>
              </li>
              <li class="flex items-center space-x-2.5 text-xs text-slate-600 font-medium">
                <Check class="h-4 w-4 text-blue-600 flex-shrink-0" />
                <span>
                  {{ plan.libraries_access_limit === -1 || !plan.libraries_access_limit ? 'Unlimited Libraries Access' : `${plan.libraries_access_limit} Libraries Access` }}
                </span>
              </li>
              <li class="flex items-center space-x-2.5 text-xs text-slate-600 font-medium">
                <Check class="h-4 w-4 text-blue-600 flex-shrink-0" />
                <span>
                  {{ plan.books_access_limit === -1 || !plan.books_access_limit ? 'Unlimited Books Access' : `${plan.books_access_limit} Books Access` }}
                </span>
              </li>
              <li class="flex items-center space-x-2.5 text-xs text-slate-600 font-medium">
                <Check class="h-4 w-4 text-blue-600 flex-shrink-0" />
                <span>
                  {{ plan.events_joining_limit === -1 || !plan.events_joining_limit ? 'Unlimited Events Joining' : `${plan.events_joining_limit} Events Joining` }}
                </span>
              </li>
              <li class="flex items-center space-x-2.5 text-xs text-slate-600 font-medium">
                <Check class="h-4 w-4 text-blue-600 flex-shrink-0" />
                <span>
                  <span v-if="plan.advance_booking_days === -1">Unlimited Advance Booking</span>
                  <span v-else-if="plan.advance_booking_days === 0">Same Day Booking Only</span>
                  <span v-else>{{ plan.advance_booking_days }} Days Advance Booking</span>
                </span>
              </li>
              <li v-if="plan.digital_books_access" class="flex items-center space-x-2.5 text-xs text-slate-600 font-medium">
                <Check class="h-4 w-4 text-blue-600 flex-shrink-0" />
                <span>Digital Books Access</span>
              </li>
              <li v-if="plan.priority_booking" class="flex items-center space-x-2.5 text-xs text-slate-600 font-medium">
                <Check class="h-4 w-4 text-blue-600 flex-shrink-0" />
                <span>Priority Seat Booking</span>
              </li>
            </ul>
          </div>

          <!-- Button Container -->
          <div class="mt-8 w-full">
            <!-- Current Active Plan Button -->
            <button
              v-if="isCurrentPlan(plan.id) && !isPlanExpired"
              disabled
              class="w-full bg-slate-100 border border-slate-200 text-slate-400 rounded-2xl py-3.5 text-xs font-bold uppercase tracking-wider cursor-default flex items-center justify-center space-x-2"
            >
              <span>Current Plan</span>
            </button>

            <!-- Subscribe/Upgrade Button -->
            <button
              v-else
              @click="subscribe(plan)"
              :disabled="subscribingPlanId !== null || !!(user as any)?.pending_order"
              :class="[
                'w-full py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-2 border shadow-sm duration-200 cursor-pointer',
                (user as any)?.pending_order?.plan_id === plan.id
                  ? 'bg-amber-50 text-amber-700 border-amber-300 cursor-not-allowed shadow-none'
                  : (!!(user as any)?.pending_order
                      ? 'bg-slate-50 text-slate-400 border-slate-200 cursor-not-allowed shadow-none'
                      : (plan.name.toLowerCase().includes('premium') || plan.name.toLowerCase().includes('pro')
                          ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/15 border-transparent'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-transparent'))
              ]"
            >
              <template v-if="subscribingPlanId === plan.id">
                <Loader2 class="w-3.5 h-3.5 animate-spin" />
                <span>Processing...</span>
              </template>
              <template v-else-if="(user as any)?.pending_order?.plan_id === plan.id">
                <Clock class="w-3.5 h-3.5 text-amber-500" />
                <span>Pending Approval</span>
              </template>
              <template v-else>
                <span>{{ isCurrentPlan(plan.id) ? 'Renew Now' : 'Upgrade Now' }}</span>
              </template>
            </button>
          </div>
        </div>
      </div>

      <!-- Billing & Subscription History -->
      <div class="mt-10 sm:mt-16 bg-white rounded-3xl p-4 sm:p-8 border border-slate-200/80 shadow-sm text-left font-outfit">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-slate-100 pb-5">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center text-blue-600 flex-shrink-0">
              <Receipt class="w-5 h-5" />
            </div>
            <div>
              <h3 class="text-base sm:text-lg font-bold text-slate-800 tracking-tight leading-snug">Billing & Subscription History</h3>
              <p class="text-[11px] sm:text-xs text-slate-400 font-medium mt-0.5">Track your subscription purchase requests, payment receipts, and membership history.</p>
            </div>
          </div>

          <!-- Responsive Segmented History Tabs -->
          <div class="grid grid-cols-2 sm:flex sm:items-center bg-slate-100 p-1 rounded-xl w-full sm:w-fit gap-1">
            <button
              @click="activeHistoryTab = 'orders'"
              :class="[
                'px-3 sm:px-4 py-2 sm:py-1.5 rounded-lg text-[10px] sm:text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center space-x-1.5',
                activeHistoryTab === 'orders' ? 'bg-white shadow-sm text-slate-800' : 'text-slate-500 hover:text-slate-700'
              ]"
            >
              <CreditCard class="w-3.5 h-3.5 flex-shrink-0" />
              <span class="truncate">Orders</span>
              <span v-if="orders.length > 0" class="text-[9px] bg-slate-200 text-slate-700 px-1.5 py-0.2 rounded-full font-bold flex-shrink-0">
                {{ orders.length }}
              </span>
            </button>
            <button
              @click="activeHistoryTab = 'subscriptions'"
              :class="[
                'px-3 sm:px-4 py-2 sm:py-1.5 rounded-lg text-[10px] sm:text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center space-x-1.5',
                activeHistoryTab === 'subscriptions' ? 'bg-white shadow-sm text-slate-800' : 'text-slate-500 hover:text-slate-700'
              ]"
            >
              <Calendar class="w-3.5 h-3.5 flex-shrink-0" />
              <span class="truncate">History</span>
              <span v-if="subscriptionsHistory.length > 0" class="text-[9px] bg-slate-200 text-slate-700 px-1.5 py-0.2 rounded-full font-bold flex-shrink-0">
                {{ subscriptionsHistory.length }}
              </span>
            </button>
          </div>
        </div>

        <!-- History Loading -->
        <div v-if="historyLoading" class="py-12 text-center flex flex-col items-center justify-center space-y-3">
          <Loader2 class="w-6 h-6 animate-spin text-blue-600" />
          <p class="text-xs font-semibold text-slate-400 uppercase tracking-wider animate-pulse">Loading history...</p>
        </div>

        <!-- Orders & Receipts Tab -->
        <template v-else-if="activeHistoryTab === 'orders'">
          <div v-if="orders.length === 0" class="py-12 text-center bg-slate-50/50 rounded-2xl border border-dashed border-slate-200 p-8">
            <CreditCard class="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h4 class="text-sm font-semibold text-slate-700 mb-1">No Orders Found</h4>
            <p class="text-xs text-slate-400 max-w-sm mx-auto">You have not purchased any subscription plans yet.</p>
          </div>

          <div v-else>
            <!-- Mobile Orders Cards View (< md) -->
            <div class="block md:hidden space-y-3 bg-slate-50/60 p-3.5 rounded-2xl border border-slate-100 mb-4">
              <div 
                v-for="order in paginatedOrders" 
                :key="'mobile-order-' + order.id" 
                class="bg-white rounded-xl border border-slate-200/90 p-3.5 shadow-xs hover:border-slate-300 transition-all flex flex-col gap-2.5 text-left"
              >
                <!-- Top Header: Plan Name + Status Pill -->
                <div class="flex items-center justify-between gap-2">
                  <div class="flex items-center space-x-2.5 min-w-0">
                    <div class="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                      <CreditCard class="w-4 h-4" />
                    </div>
                    <span class="text-xs font-bold text-slate-800 truncate">{{ order.plan?.name || order.notes || 'Subscription Request' }}</span>
                  </div>
                  <span
                    :class="[
                      'px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider inline-flex items-center gap-1 flex-shrink-0 shadow-2xs',
                      order.status === 'completed' || order.status === 'approved'
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : order.status === 'pending'
                        ? 'bg-amber-50 text-amber-700 border border-amber-200'
                        : 'bg-rose-50 text-rose-700 border border-rose-200'
                    ]"
                  >
                    <span
                      :class="[
                        'w-1.5 h-1.5 rounded-full',
                        order.status === 'completed' || order.status === 'approved'
                          ? 'bg-emerald-500'
                          : order.status === 'pending'
                          ? 'bg-amber-500 animate-pulse'
                          : 'bg-rose-500'
                      ]"
                    ></span>
                    {{ order.status === 'completed' || order.status === 'approved' ? 'Approved' : (order.status === 'pending' ? 'Pending' : 'Rejected') }}
                  </span>
                </div>

                <!-- Details Grid: Amount & Payment Method -->
                <div class="grid grid-cols-2 gap-2 text-[11px] pt-2 border-t border-slate-100">
                  <div>
                    <span class="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Amount</span>
                    <span class="font-bold text-slate-900 text-xs">PKR {{ formatPrice(order.amount) }}</span>
                  </div>
                  <div>
                    <span class="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Payment Method</span>
                    <span class="font-semibold text-slate-700 capitalize text-xs">
                      {{ order.payment_method === 'manual' ? 'Manual / Offline' : order.payment_method }}
                    </span>
                  </div>
                </div>

                <!-- Bottom Footer: Ref & Timestamp -->
                <div class="flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-slate-100/60 font-semibold uppercase tracking-wider">
                  <span>Ref: <span class="font-mono text-slate-600 lowercase">{{ order.transaction_id || '#' + order.id }}</span></span>
                  <span>{{ formatDateTime(order.created_at) }}</span>
                </div>
              </div>
            </div>

            <!-- Desktop Table View (>= md) -->
            <div class="hidden md:block overflow-x-auto">
              <table class="w-full text-left border-collapse min-w-[640px]">
                <thead>
                  <tr class="border-b border-slate-100 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    <th class="py-3 px-4">Plan Name</th>
                    <th class="py-3 px-4">Date & Time</th>
                    <th class="py-3 px-4">Amount</th>
                    <th class="py-3 px-4">Payment Method</th>
                    <th class="py-3 px-4">Transaction / Ref</th>
                    <th class="py-3 px-4 text-right">Status</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 text-xs text-slate-700">
                  <tr v-for="order in paginatedOrders" :key="order.id" class="hover:bg-slate-50/50 transition-colors">
                    <td class="py-3.5 px-4 font-bold text-slate-800">
                      {{ order.plan?.name || order.notes || 'Subscription Request' }}
                    </td>
                    <td class="py-3.5 px-4 font-medium text-slate-500">
                      {{ formatDateTime(order.created_at) }}
                    </td>
                    <td class="py-3.5 px-4 font-bold text-slate-900">
                      PKR {{ formatPrice(order.amount) }}
                    </td>
                    <td class="py-3.5 px-4 font-medium text-slate-600 capitalize">
                      {{ order.payment_method === 'manual' ? 'Manual / Offline' : order.payment_method }}
                    </td>
                    <td class="py-3.5 px-4 font-mono text-[11px] text-slate-400">
                      {{ order.transaction_id || '#' + order.id }}
                    </td>
                    <td class="py-3.5 px-4 text-right">
                      <span
                        :class="[
                          'px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider inline-flex items-center gap-1',
                          order.status === 'completed' || order.status === 'approved'
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : order.status === 'pending'
                            ? 'bg-amber-50 text-amber-700 border border-amber-200'
                            : 'bg-rose-50 text-rose-700 border border-rose-200'
                        ]"
                      >
                        <span
                          :class="[
                            'w-1.5 h-1.5 rounded-full',
                            order.status === 'completed' || order.status === 'approved'
                              ? 'bg-emerald-500'
                              : order.status === 'pending'
                              ? 'bg-amber-500 animate-pulse'
                              : 'bg-rose-500'
                          ]"
                        ></span>
                        {{ order.status === 'completed' || order.status === 'approved' ? 'Approved' : (order.status === 'pending' ? 'Pending' : 'Rejected') }}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Orders Pagination Bar -->
            <div v-if="orders.length > itemsPerPage" class="flex flex-col sm:flex-row items-center justify-between gap-3 pt-5 mt-4 border-t border-slate-100 text-xs">
              <div class="text-slate-400 font-medium text-[11px]">
                Showing <span class="font-bold text-slate-700">{{ (ordersPage - 1) * itemsPerPage + 1 }}</span> to <span class="font-bold text-slate-700">{{ Math.min(ordersPage * itemsPerPage, orders.length) }}</span> of <span class="font-bold text-slate-700">{{ orders.length }}</span> orders
              </div>
              <div class="flex items-center space-x-1.5">
                <button
                  @click="ordersPage > 1 ? ordersPage-- : null"
                  :disabled="ordersPage === 1"
                  class="px-2.5 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center space-x-1"
                >
                  <ChevronLeft class="w-3.5 h-3.5" />
                  <span>Prev</span>
                </button>

                <button
                  v-for="p in totalOrdersPages"
                  :key="p"
                  @click="ordersPage = p"
                  :class="[
                    'w-8 h-8 rounded-lg text-xs font-bold transition-all border',
                    ordersPage === p
                      ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                  ]"
                >
                  {{ p }}
                </button>

                <button
                  @click="ordersPage < totalOrdersPages ? ordersPage++ : null"
                  :disabled="ordersPage === totalOrdersPages"
                  class="px-2.5 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center space-x-1"
                >
                  <span>Next</span>
                  <ChevronRight class="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </template>

        <!-- Membership Cycles Tab -->
        <template v-else-if="activeHistoryTab === 'subscriptions'">
          <div v-if="subscriptionsHistory.length === 0" class="py-12 text-center bg-slate-50/50 rounded-2xl border border-dashed border-slate-200 p-8">
            <Calendar class="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h4 class="text-sm font-semibold text-slate-700 mb-1">No Membership Cycles</h4>
            <p class="text-xs text-slate-400 max-w-sm mx-auto">No subscription history records found.</p>
          </div>

          <div v-else>
            <!-- Mobile Subscriptions Cards View (< md) -->
            <div class="block md:hidden space-y-3 bg-slate-50/60 p-3.5 rounded-2xl border border-slate-100 mb-4">
              <div 
                v-for="sub in paginatedSubscriptions" 
                :key="'mobile-sub-' + sub.id" 
                class="bg-white rounded-xl border border-slate-200/90 p-3.5 shadow-xs hover:border-slate-300 transition-all flex flex-col gap-2.5 text-left"
              >
                <!-- Top Header: Plan Name + Status Pill -->
                <div class="flex items-center justify-between gap-2">
                  <div class="flex items-center space-x-2.5 min-w-0">
                    <div class="w-8 h-8 rounded-xl bg-purple-50 border border-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0">
                      <Calendar class="w-4 h-4" />
                    </div>
                    <span class="text-xs font-bold text-slate-800 truncate">{{ sub.subscription_plan?.name || 'Membership Plan' }}</span>
                  </div>
                  <span
                    :class="[
                      'px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider inline-flex items-center gap-1 flex-shrink-0 shadow-2xs',
                      sub.status === 'active' && new Date(sub.expires_at) >= new Date()
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : sub.status === 'cancelled'
                        ? 'bg-rose-50 text-rose-700 border border-rose-200'
                        : 'bg-slate-100 text-slate-600 border border-slate-200'
                    ]"
                  >
                    <span
                      :class="[
                        'w-1.5 h-1.5 rounded-full',
                        sub.status === 'active' && new Date(sub.expires_at) >= new Date()
                          ? 'bg-emerald-500 animate-pulse'
                          : sub.status === 'cancelled'
                          ? 'bg-rose-500'
                          : 'bg-slate-400'
                      ]"
                    ></span>
                    {{ sub.status === 'active' && new Date(sub.expires_at) >= new Date() ? 'Active' : (sub.status === 'cancelled' ? 'Cancelled' : 'Expired') }}
                  </span>
                </div>

                <!-- Cycle Dates & Amount Grid -->
                <div class="grid grid-cols-3 gap-2 text-[11px] pt-2 border-t border-slate-100 text-center sm:text-left">
                  <div class="bg-emerald-50/50 p-2 rounded-xl border border-emerald-100/60">
                    <span class="text-[9px] font-bold text-emerald-700 uppercase tracking-wider block">Started</span>
                    <span class="font-bold text-emerald-800 text-[10px]">{{ formatDate(sub.started_at) }}</span>
                  </div>
                  <div class="bg-rose-50/50 p-2 rounded-xl border border-rose-100/60">
                    <span class="text-[9px] font-bold text-rose-700 uppercase tracking-wider block">Expires</span>
                    <span class="font-bold text-rose-800 text-[10px]">{{ formatDate(sub.expires_at) }}</span>
                  </div>
                  <div class="bg-slate-50 p-2 rounded-xl border border-slate-100">
                    <span class="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Paid</span>
                    <span class="font-bold text-slate-800 text-[10px]">PKR {{ formatPrice(sub.amount_paid) }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Desktop Table View (>= md) -->
            <div class="hidden md:block overflow-x-auto">
              <table class="w-full text-left border-collapse min-w-[640px]">
                <thead>
                  <tr class="border-b border-slate-100 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    <th class="py-3 px-4">Plan Name</th>
                    <th class="py-3 px-4">Start Date</th>
                    <th class="py-3 px-4">Expiry Date</th>
                    <th class="py-3 px-4">Amount Paid</th>
                    <th class="py-3 px-4 text-right">Status</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 text-xs text-slate-700">
                  <tr v-for="sub in paginatedSubscriptions" :key="sub.id" class="hover:bg-slate-50/50 transition-colors">
                    <td class="py-3.5 px-4 font-bold text-slate-800">
                      {{ sub.subscription_plan?.name || 'Membership Plan' }}
                    </td>
                    <td class="py-3.5 px-4 font-medium text-slate-500">
                      {{ formatDate(sub.started_at) }}
                    </td>
                    <td class="py-3.5 px-4 font-medium text-slate-500">
                      {{ formatDate(sub.expires_at) }}
                    </td>
                    <td class="py-3.5 px-4 font-bold text-slate-900">
                      PKR {{ formatPrice(sub.amount_paid) }}
                    </td>
                    <td class="py-3.5 px-4 text-right">
                      <span
                        :class="[
                          'px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider inline-flex items-center gap-1',
                          sub.status === 'active' && new Date(sub.expires_at) >= new Date()
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : sub.status === 'cancelled'
                            ? 'bg-rose-50 text-rose-700 border border-rose-200'
                            : 'bg-slate-100 text-slate-600 border border-slate-200'
                        ]"
                      >
                        <span
                          :class="[
                            'w-1.5 h-1.5 rounded-full',
                            sub.status === 'active' && new Date(sub.expires_at) >= new Date()
                              ? 'bg-emerald-500 animate-pulse'
                              : sub.status === 'cancelled'
                              ? 'bg-rose-500'
                              : 'bg-slate-400'
                          ]"
                        ></span>
                        {{ sub.status === 'active' && new Date(sub.expires_at) >= new Date() ? 'Active' : (sub.status === 'cancelled' ? 'Cancelled' : 'Expired') }}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Subscriptions Pagination Bar -->
            <div v-if="subscriptionsHistory.length > itemsPerPage" class="flex flex-col sm:flex-row items-center justify-between gap-3 pt-5 mt-4 border-t border-slate-100 text-xs">
              <div class="text-slate-400 font-medium text-[11px]">
                Showing <span class="font-bold text-slate-700">{{ (subscriptionsPage - 1) * itemsPerPage + 1 }}</span> to <span class="font-bold text-slate-700">{{ Math.min(subscriptionsPage * itemsPerPage, subscriptionsHistory.length) }}</span> of <span class="font-bold text-slate-700">{{ subscriptionsHistory.length }}</span> records
              </div>
              <div class="flex items-center space-x-1.5">
                <button
                  @click="subscriptionsPage > 1 ? subscriptionsPage-- : null"
                  :disabled="subscriptionsPage === 1"
                  class="px-2.5 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center space-x-1"
                >
                  <ChevronLeft class="w-3.5 h-3.5" />
                  <span>Prev</span>
                </button>

                <button
                  v-for="p in totalSubscriptionsPages"
                  :key="p"
                  @click="subscriptionsPage = p"
                  :class="[
                    'w-8 h-8 rounded-lg text-xs font-bold transition-all border',
                    subscriptionsPage === p
                      ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                  ]"
                >
                  {{ p }}
                </button>

                <button
                  @click="subscriptionsPage < totalSubscriptionsPages ? subscriptionsPage++ : null"
                  :disabled="subscriptionsPage === totalSubscriptionsPages"
                  class="px-2.5 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center space-x-1"
                >
                  <span>Next</span>
                  <ChevronRight class="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </template>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { studentAPI } from '@/student/services/studentApi';
import { useAuth } from '@/shared/composables/useAuth';
import { useRouter } from 'vue-router';
import { 
  Calendar, 
  CreditCard, 
  AlertTriangle, 
  Loader2, 
  Clock, 
  Check,
  Receipt,
  ChevronLeft,
  ChevronRight
} from 'lucide-vue-next';

const { user, checkAuth, isPlanExpired } = useAuth();

const plans = ref<any[]>([]);
const isLoading = ref(true);
const subscribingPlanId = ref<number | null>(null);

const historyLoading = ref(false);
const orders = ref<any[]>([]);
const subscriptionsHistory = ref<any[]>([]);
const activeHistoryTab = ref<'orders' | 'subscriptions'>('orders');

const itemsPerPage = 10;
const ordersPage = ref(1);
const subscriptionsPage = ref(1);

const totalOrdersPages = computed(() => Math.ceil(orders.value.length / itemsPerPage) || 1);
const paginatedOrders = computed(() => {
  const start = (ordersPage.value - 1) * itemsPerPage;
  return orders.value.slice(start, start + itemsPerPage);
});

const totalSubscriptionsPages = computed(() => Math.ceil(subscriptionsHistory.value.length / itemsPerPage) || 1);
const paginatedSubscriptions = computed(() => {
  const start = (subscriptionsPage.value - 1) * itemsPerPage;
  return subscriptionsHistory.value.slice(start, start + itemsPerPage);
});

const hasActiveSubscription = computed(() => {
  return !!user.value?.active_subscription;
});

const isCurrentPlan = (planId: number) => {
  return user.value?.active_subscription?.subscription_plan_id === planId;
};

const formatPrice = (price: any) => {
  const val = Number(price);
  if (isNaN(val)) return price;
  return val.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
};

const formatDuration = (days: number) => {
  if (!days) return 'forever';
  if (days === 30) return 'month';
  if (days === 90) return '3 months';
  if (days === 180) return '6 months';
  if (days === 365) return 'year';
  return `${days} days`;
};

const getPlanBtnClass = (planName: string) => {
  const name = planName.toLowerCase();
  if (name.includes('premium') && name.includes('monthly')) {
    return 'bg-[#f97316] hover:bg-[#ea580c] border-[#f97316] text-white hover:shadow-md hover-lift active:scale-98';
  } else if (name.includes('premium')) {
    return 'bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] hover:opacity-95 border-transparent text-white hover:shadow-md hover-lift active:scale-98';
  } else if (name.includes('annual') || name.includes('yearly')) {
    return 'bg-[#2563eb] hover:bg-[#1d4ed8] border-[#2563eb] text-white hover:shadow-md hover-lift active:scale-98';
  }
  return 'bg-[#f1f5f9] hover:bg-[#e2e8f0] border-slate-200 text-slate-700 active:scale-98';
};

const parseFeatures = (features: any) => {
  if (Array.isArray(features)) return features;
  if (typeof features === 'string') {
      try {
          return JSON.parse(features);
      } catch (e) {
          return [features];
      }
  }
  return [];
};

const formatDate = (dateString: string) => {
  if (!dateString) return 'N/A';
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const formatDateTime = (dateStr: string) => {
  if (!dateStr) return 'N/A';
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

const calculateRemainingDays = (expiryDate: string) => {
  if (!expiryDate) return 0;
  const diff = new Date(expiryDate).getTime() - new Date().getTime();
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  return Math.max(0, days);
};

const fetchPlans = async () => {
  try {
    isLoading.value = true;
    plans.value = await studentAPI.getSubscriptionPlans();
  } catch (error) {
    console.error('Error fetching plans:', error);
  } finally {
    isLoading.value = false;
  }
};

const fetchHistory = async () => {
  try {
    historyLoading.value = true;
    const res = await studentAPI.getSubscriptionHistory();
    orders.value = res.orders || [];
    subscriptionsHistory.value = res.subscriptions || [];
  } catch (err) {
    console.error('Failed to load subscription history:', err);
  } finally {
    historyLoading.value = false;
  }
};

import { useSwal } from '@/shared/composables/useSwal';
const { showConfirm, showSuccess, showError } = useSwal();

const subscribe = async (plan: any) => {
  if (!await showConfirm('Confirm Subscription', `Are you sure you want to subscribe to the ${plan.name} plan for Rs. ${plan.price}?`, 'Yes, Subscribe')) {
    return;
  }

  try {
    subscribingPlanId.value = plan.id;
    const response = await studentAPI.subscribe(plan.id);
    await checkAuth(); // Refresh user to get updated subscription status
    await fetchHistory(); // Refresh billing history
    showSuccess('Request Sent!', response.message || 'Subscription request submitted successfully!');
  } catch (error: any) {
    console.error('Subscription error:', error);
    showError('Subscription Failed', error.message || 'Failed to subscribe. Please try again.');
  } finally {
    subscribingPlanId.value = null;
  }
};

onMounted(() => {
  fetchPlans();
  fetchHistory();
});
</script>

<style scoped>
.hover-lift {
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}
.hover-lift:hover {
  transform: translateY(-4px);
}
</style>
