import { DashboardLayout } from "@/components/DashboardLayout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { 
  Plus, 
  Search, 
  Filter, 
  MoreHorizontal, 
  Eye, 
  MessageSquare, 
  User, 
  Clock,
  Download,
  RefreshCw,
  Zap
} from "lucide-react"
import { cn } from "@/lib/utils"

interface Ticket {
  id: string
  title: string
  property: string
  tenant: string
  category: string
  priority: "urgent" | "high" | "medium" | "low"
  status: "open" | "in-progress" | "pending" | "resolved" | "closed"
  created: string
  updated: string
  assignee?: string
  description: string
  source: "email" | "sms" | "web" | "phone" | "ai-detection"
}

const mockTickets: Ticket[] = [
  {
    id: "TK-001",
    title: "Broken water heater in unit 2B",
    property: "Sunset Apartments",
    tenant: "Michael Chen",
    category: "Plumbing",
    priority: "urgent",
    status: "open",
    created: "2024-01-15 09:30:00",
    updated: "2024-01-15 11:45:00",
    assignee: "John Smith",
    description: "Tenant reports no hot water since this morning. Water heater making unusual noises.",
    source: "email"
  },
  {
    id: "TK-002", 
    title: "AC not working properly",
    property: "Downtown Lofts",
    tenant: "Sarah Williams",
    category: "HVAC",
    priority: "high",
    status: "in-progress",
    created: "2024-01-15 08:15:00",
    updated: "2024-01-15 10:30:00",
    assignee: "Mike Johnson",
    description: "Air conditioning system not cooling unit adequately. Temperature reading 78°F when set to 68°F.",
    source: "sms"
  },
  {
    id: "TK-003",
    title: "Kitchen sink leak",
    property: "Garden View Complex",
    tenant: "David Rodriguez",
    category: "Plumbing", 
    priority: "medium",
    status: "pending",
    created: "2024-01-14 16:20:00",
    updated: "2024-01-15 09:00:00",
    description: "Small leak under kitchen sink. Water dripping onto cabinet floor.",
    source: "web"
  },
  {
    id: "TK-004",
    title: "Light fixture replacement needed",
    property: "Sunset Apartments",
    tenant: "Emily Davis",
    category: "Electrical",
    priority: "low",
    status: "resolved",
    created: "2024-01-13 14:45:00",
    updated: "2024-01-14 16:30:00",
    assignee: "Tom Wilson",
    description: "Ceiling light fixture in living room is flickering and needs replacement.",
    source: "phone"
  },
  {
    id: "TK-005",
    title: "Noise complaint from upstairs neighbor",
    property: "Downtown Lofts",
    tenant: "Lisa Thompson",
    category: "General",
    priority: "medium",
    status: "open",
    created: "2024-01-15 07:00:00",
    updated: "2024-01-15 07:00:00",
    description: "AI detected complaint pattern from tenant communications. Recurring noise issues during evening hours.",
    source: "ai-detection"
  },
  {
    id: "TK-006",
    title: "Garbage disposal not working",
    property: "Garden View Complex",
    tenant: "Robert Johnson",
    category: "Plumbing",
    priority: "medium",
    status: "in-progress",
    created: "2024-01-14 12:30:00",
    updated: "2024-01-15 08:45:00",
    assignee: "John Smith",
    description: "Garbage disposal unit jammed and not turning on. Reset button tried multiple times.",
    source: "email"
  }
]

const priorityColors = {
  urgent: "bg-status-urgent text-white",
  high: "bg-status-high text-status-high-foreground",
  medium: "bg-status-medium text-white",
  low: "bg-status-low text-white"
}

const statusColors = {
  open: "bg-destructive/10 text-destructive border-destructive/20",
  "in-progress": "bg-warning/10 text-warning border-warning/20",
  pending: "bg-muted text-muted-foreground border-border",
  resolved: "bg-success/10 text-success border-success/20",
  closed: "bg-muted text-muted-foreground border-border"
}

const sourceColors = {
  email: "bg-blue-100 text-blue-800 border-blue-200",
  sms: "bg-green-100 text-green-800 border-green-200",
  web: "bg-purple-100 text-purple-800 border-purple-200",
  phone: "bg-orange-100 text-orange-800 border-orange-200",
  "ai-detection": "bg-gradient-primary text-white border-primary"
}

const Tickets = () => {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Tickets</h1>
            <p className="text-muted-foreground">
              Manage and track all maintenance requests across your properties
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button variant="outline" size="sm">
              <RefreshCw className="h-4 w-4 mr-2" />
              Sync
            </Button>
            <Button size="sm">
              <Plus className="h-4 w-4 mr-2" />
              New Ticket
            </Button>
          </div>
        </div>

        {/* Filters and Search */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Filters</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 min-w-[200px]">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input placeholder="Search tickets..." className="pl-10" />
                </div>
              </div>
              
              <Select>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="open">Open</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="resolved">Resolved</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Priority</SelectItem>
                  <SelectItem value="urgent">Urgent</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="plumbing">Plumbing</SelectItem>
                  <SelectItem value="hvac">HVAC</SelectItem>
                  <SelectItem value="electrical">Electrical</SelectItem>
                  <SelectItem value="general">General</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Property" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Properties</SelectItem>
                  <SelectItem value="sunset">Sunset Apartments</SelectItem>
                  <SelectItem value="downtown">Downtown Lofts</SelectItem>
                  <SelectItem value="garden">Garden View Complex</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Tickets Table */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>All Tickets ({mockTickets.length})</CardTitle>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Zap className="h-4 w-4 mr-2" />
                  AI Process All
                </Button>
                <Select defaultValue="created-desc">
                  <SelectTrigger className="w-[160px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="created-desc">Latest First</SelectItem>
                    <SelectItem value="created-asc">Oldest First</SelectItem>
                    <SelectItem value="priority-desc">High Priority</SelectItem>
                    <SelectItem value="updated-desc">Recently Updated</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Ticket</TableHead>
                  <TableHead>Property</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Source</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead className="w-[70px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockTickets.map((ticket) => (
                  <TableRow key={ticket.id} className="hover:bg-muted/50">
                    <TableCell>
                      <div className="space-y-1">
                        <div className="font-medium text-sm">{ticket.title}</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {ticket.tenant}
                        </div>
                        {ticket.assignee && (
                          <div className="text-xs text-muted-foreground">
                            Assigned to {ticket.assignee}
                          </div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{ticket.property}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-xs">
                        {ticket.category}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={cn("text-xs", priorityColors[ticket.priority])}>
                        {ticket.priority}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant="outline" 
                        className={cn("text-xs", statusColors[ticket.status])}
                      >
                        {ticket.status.replace("-", " ")}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant="outline" 
                        className={cn("text-xs", sourceColors[ticket.source])}
                      >
                        {ticket.source === "ai-detection" && <Zap className="h-3 w-3 mr-1" />}
                        {ticket.source.replace("-", " ")}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {new Date(ticket.created).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <Eye className="mr-2 h-4 w-4" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <MessageSquare className="mr-2 h-4 w-4" />
                            Add Comment
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <User className="mr-2 h-4 w-4" />
                            Assign Contractor
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <Zap className="mr-2 h-4 w-4" />
                            AI Re-analyze
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Tickets;