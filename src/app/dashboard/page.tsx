"use client"

import { StateGlobalProvider } from '@/components/context/ContextDashboard'
import DashboardComponent from '@/components/dashboard/Dashboard'
import SideBar from '@/components/slideBar/SideBar'
import React from 'react'

function Dashboard() {
  return (
    <StateGlobalProvider>
        <DashboardComponent />
    </StateGlobalProvider>
  )
}

export default Dashboard