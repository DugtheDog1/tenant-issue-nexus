import { DashboardLayout } from "@/components/DashboardLayout"
import { StatsCard } from "@/components/dashboard/StatsCard" 
import { TicketTable } from "@/components/dashboard/TicketTable"
import { QuickActions } from "@/components/dashboard/QuickActions"
import { RecentActivity } from "@/components/dashboard/RecentActivity"
import { 
  Inbox, 
  Building2, 
  Users, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle,
  Clock,
  Zap
} from "lucide-react"

const Index = () => {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Page Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            AI-powered property management overview and quick actions
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="Open Tickets"
            value={23}
            description="4 urgent, 8 high priority"
            icon={Inbox}
            trend={{ value: 12, label: "from last week", direction: "up" }}
            variant="destructive"
          />
          <StatsCard
            title="Properties"
            value={8}
            description="Across 3 locations"
            icon={Building2}
            trend={{ value: 0, label: "no change", direction: "up" }}
          />
          <StatsCard
            title="Active Tenants"
            value={156}
            description="95% occupancy rate"
            icon={Users}
            trend={{ value: 2.5, label: "from last month", direction: "up" }}
            variant="success"
          />
          <StatsCard
            title="Avg Response Time"
            value="2.4h"
            description="Target: <4h"
            icon={Clock}
            trend={{ value: 15, label: "improvement", direction: "down" }}
            variant="success"
          />
        </div>

        {/* AI Processing Stats */}
        <div className="grid gap-4 md:grid-cols-3">
          <StatsCard
            title="AI Tickets Processed"
            value={89}
            description="This week"
            icon={Zap}
            trend={{ value: 34, label: "vs last week", direction: "up" }}
            variant="default"
          />
          <StatsCard
            title="Auto-Resolved"
            value={12}
            description="No human intervention"
            icon={CheckCircle}
            trend={{ value: 8, label: "efficiency gain", direction: "up" }}
            variant="success"
          />
          <StatsCard
            title="Escalations"
            value={5}
            description="Requiring urgent attention"
            icon={AlertTriangle}
            trend={{ value: 2, label: "from yesterday", direction: "up" }}
            variant="warning"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Tickets Table - Takes 2 columns */}
          <div className="lg:col-span-2">
            <TicketTable />
          </div>

          {/* Sidebar Content */}
          <div className="space-y-6">
            <QuickActions />
            <RecentActivity />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
