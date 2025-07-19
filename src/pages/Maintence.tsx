import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Wrench, Plus, Search, Calendar, User, MapPin, AlertTriangle } from "lucide-react";

const maintenanceRequests = [
  {
    id: "MR-001",
    title: "Leaky Faucet in Kitchen",
    property: "Sunset Apartments",
    unit: "Apt 12A",
    tenant: "Sarah Johnson",
    priority: "Medium",
    status: "In Progress",
    createdDate: "2024-01-15",
    assignedTo: "Mike Rodriguez",
    category: "Plumbing"
  },
  {
    id: "MR-002",
    title: "Broken Air Conditioning",
    property: "Downtown Office Complex",
    unit: "Suite 205",
    tenant: "Michael Chen",
    priority: "High",
    status: "Open",
    createdDate: "2024-01-18",
    assignedTo: "Unassigned",
    category: "HVAC"
  },
  {
    id: "MR-003",
    title: "Electrical Outlet Not Working",
    property: "Riverside Condos",
    unit: "Unit 8B",
    tenant: "Emily Rodriguez",
    priority: "Low",
    status: "Completed",
    createdDate: "2024-01-12",
    assignedTo: "John Smith",
    category: "Electrical"
  }
];

export default function Maintenance() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Maintenance</h1>
            <p className="text-muted-foreground">Track and manage maintenance requests</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Request
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Open Requests</CardTitle>
              <Wrench className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">+2 from last week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">In Progress</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">-1 from last week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">High Priority</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">Urgent attention</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Resolution</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.5</div>
              <p className="text-xs text-muted-foreground">days</p>
            </CardContent>
          </Card>
        </div>

        <div className="flex gap-4 items-center">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search requests..." className="pl-9" />
          </div>
          <Select>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="open">Open</SelectItem>
              <SelectItem value="progress">In Progress</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Priority</SelectItem>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="low">Low</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-4">
          {maintenanceRequests.map((request) => (
            <Card key={request.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <CardTitle className="text-lg">{request.title}</CardTitle>
                      <Badge variant="outline">{request.id}</Badge>
                    </div>
                    <CardDescription className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {request.unit}, {request.property}
                    </CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Badge variant={
                      request.priority === "High" ? "destructive" : 
                      request.priority === "Medium" ? "default" : "secondary"
                    }>
                      {request.priority}
                    </Badge>
                    <Badge variant={
                      request.status === "Completed" ? "default" :
                      request.status === "In Progress" ? "secondary" : "outline"
                    }>
                      {request.status}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="flex items-center text-sm">
                    <User className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="font-medium">Tenant:</span>
                    <span className="ml-1">{request.tenant}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="font-medium">Created:</span>
                    <span className="ml-1">{request.createdDate}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Wrench className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="font-medium">Category:</span>
                    <span className="ml-1">{request.category}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <User className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="font-medium">Assigned:</span>
                    <span className="ml-1">{request.assignedTo}</span>
                  </div>
                </div>
                <div className="flex justify-end space-x-2 mt-4">
                  <Button variant="outline" size="sm">View Details</Button>
                  <Button variant="outline" size="sm">Update Status</Button>
                  <Button size="sm">Assign</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}