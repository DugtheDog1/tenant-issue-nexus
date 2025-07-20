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
            value={0}
            description="No tickets yet"
            icon={Inbox}
          />
          <StatsCard
            title="Properties"
            value={0}
            description="No properties added"
            icon={Building2}
          />
          <StatsCard
            title="Active Tenants"
            value={0}
            description="No tenants yet"
            icon={Users}
          />
          <StatsCard
            title="Avg Response Time"
            value="--"
            description="No data available"
            icon={Clock}
          />
        </div>

        {/* AI Processing Stats */}
        <div className="grid gap-4 md:grid-cols-3">
          <StatsCard
            title="AI Tickets Processed"
            value={0}
            description="No tickets processed yet"
            icon={Zap}
          />
          <StatsCard
            title="Auto-Resolved"
            value={0}
            description="No automated resolutions"
            icon={CheckCircle}
          />
          <StatsCard
            title="Escalations"
            value={0}
            description="No escalations"
            icon={AlertTriangle}
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
