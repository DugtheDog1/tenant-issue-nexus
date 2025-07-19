import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar as CalendarIcon, Plus, ChevronLeft, ChevronRight, Clock, MapPin } from "lucide-react";
import { useState } from "react";

const events = [
  {
    id: 1,
    title: "Property Inspection - Sunset Apartments",
    type: "inspection",
    date: "2024-01-20",
    time: "10:00 AM",
    duration: "2 hours",
    location: "123 Main St, Springfield",
    description: "Quarterly property inspection"
  },
  {
    id: 2,
    title: "Lease Signing - Michael Chen",
    type: "lease",
    date: "2024-01-22",
    time: "2:00 PM",
    duration: "1 hour",
    location: "Downtown Office Complex",
    description: "Lease renewal signing"
  },
  {
    id: 3,
    title: "Maintenance Appointment - HVAC Repair",
    type: "maintenance",
    date: "2024-01-23",
    time: "9:00 AM",
    duration: "3 hours",
    location: "Suite 205, Downtown Office",
    description: "Air conditioning system repair"
  },
  {
    id: 4,
    title: "Tenant Meeting - Sarah Johnson",
    type: "meeting",
    date: "2024-01-25",
    time: "11:00 AM",
    duration: "30 minutes",
    location: "Apt 12A, Sunset Apartments",
    description: "Discuss lease renewal options"
  }
];

const upcomingEvents = events.filter(event => new Date(event.date) >= new Date()).slice(0, 5);

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "inspection": return "bg-blue-500";
      case "lease": return "bg-green-500";
      case "maintenance": return "bg-yellow-500";
      case "meeting": return "bg-purple-500";
      default: return "bg-gray-500";
    }
  };

  const getEventTypeBadge = (type: string) => {
    switch (type) {
      case "inspection": return "default";
      case "lease": return "secondary";
      case "maintenance": return "outline";
      case "meeting": return "destructive";
      default: return "outline";
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Calendar</h1>
            <p className="text-muted-foreground">Manage appointments and events</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Event
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Calendar View */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <CalendarIcon className="mr-2 h-5 w-5" />
                    January 2024
                  </CardTitle>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      Today
                    </Button>
                    <Button variant="outline" size="sm">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Select defaultValue="month">
                    <SelectTrigger className="w-[120px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="month">Month</SelectItem>
                      <SelectItem value="week">Week</SelectItem>
                      <SelectItem value="day">Day</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-[150px]">
                      <SelectValue placeholder="Filter by type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Events</SelectItem>
                      <SelectItem value="inspection">Inspections</SelectItem>
                      <SelectItem value="lease">Lease Events</SelectItem>
                      <SelectItem value="maintenance">Maintenance</SelectItem>
                      <SelectItem value="meeting">Meetings</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                {/* Simplified calendar grid */}
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div key={day} className="p-2 text-center text-sm font-medium text-muted-foreground">
                      {day}
                    </div>
                  ))}
                  {Array.from({ length: 35 }, (_, i) => {
                    const day = i - 6; // Offset for calendar start
                    const isCurrentMonth = day > 0 && day <= 31;
                    const hasEvent = isCurrentMonth && [20, 22, 23, 25].includes(day);
                    
                    return (
                      <div
                        key={i}
                        className={`p-2 text-center text-sm border rounded-md cursor-pointer hover:bg-muted/50 transition-colors ${
                          !isCurrentMonth ? "text-muted-foreground bg-muted/20" : ""
                        } ${hasEvent ? "bg-primary/10 border-primary/20" : ""}`}
                      >
                        {isCurrentMonth ? day : ""}
                        {hasEvent && (
                          <div className="mt-1">
                            <div className={`w-2 h-2 rounded-full mx-auto ${getEventTypeColor("inspection")}`} />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Events */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>Next 5 scheduled events</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="space-y-2 border-b pb-3 last:border-b-0">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <h4 className="text-sm font-medium">{event.title}</h4>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          {new Date(event.date).toLocaleDateString()} at {event.time}
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <MapPin className="h-3 w-3 mr-1" />
                          {event.location}
                        </div>
                      </div>
                      <Badge variant={getEventTypeBadge(event.type) as "default"} className="text-xs">
                        {event.type}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{event.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">This Week</span>
                  <span className="text-sm font-medium">8 events</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">This Month</span>
                  <span className="text-sm font-medium">24 events</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Inspections Due</span>
                  <span className="text-sm font-medium">3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Lease Renewals</span>
                  <span className="text-sm font-medium">5</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Event Types Legend */}
        <Card>
          <CardHeader>
            <CardTitle>Event Types</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-blue-500" />
                <span className="text-sm">Inspections</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-sm">Lease Events</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="text-sm">Maintenance</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-purple-500" />
                <span className="text-sm">Meetings</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}