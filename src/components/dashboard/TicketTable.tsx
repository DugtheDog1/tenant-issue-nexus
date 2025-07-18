import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
import { MoreHorizontal, Eye, MessageSquare, User, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

interface Ticket {
  id: string
  title: string
  property: string
  tenant: string
  category: string
  priority: "urgent" | "high" | "medium" | "low"
  status: "open" | "in-progress" | "pending" | "resolved"
  created: string
  assignee?: string
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
    created: "2 hours ago",
    assignee: "John Smith"
  },
  {
    id: "TK-002", 
    title: "AC not working properly",
    property: "Downtown Lofts",
    tenant: "Sarah Williams",
    category: "HVAC",
    priority: "high",
    status: "in-progress",
    created: "4 hours ago",
    assignee: "Mike Johnson"
  },
  {
    id: "TK-003",
    title: "Kitchen sink leak",
    property: "Garden View Complex",
    tenant: "David Rodriguez",
    category: "Plumbing", 
    priority: "medium",
    status: "pending",
    created: "1 day ago"
  },
  {
    id: "TK-004",
    title: "Light fixture replacement",
    property: "Sunset Apartments",
    tenant: "Emily Davis",
    category: "Electrical",
    priority: "low",
    status: "resolved",
    created: "2 days ago",
    assignee: "Tom Wilson"
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
  resolved: "bg-success/10 text-success border-success/20"
}

export function TicketTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Recent Tickets
          <Button variant="outline" size="sm">
            View All Tickets
          </Button>
        </CardTitle>
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
                <TableCell className="text-sm text-muted-foreground flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {ticket.created}
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
                        Assign to Contractor
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
  )
}