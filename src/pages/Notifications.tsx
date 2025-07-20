import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Bell, Settings, Trash2, CheckCircle, AlertTriangle, Info, MessageSquare, Calendar, Wrench } from "lucide-react";

const notifications: any[] = [];

const notificationSettings = [
  {
    category: "Maintenance Requests",
    description: "Get notified when new maintenance requests are submitted",
    email: true,
    push: true,
    sms: false
  },
  {
    category: "Lease Expirations",
    description: "Alerts for upcoming lease renewals and expirations",
    email: true,
    push: true,
    sms: true
  },
  {
    category: "Payment Notifications",
    description: "Receive notifications for rent payments and late fees",
    email: true,
    push: false,
    sms: false
  },
  {
    category: "Property Inspections",
    description: "Reminders for scheduled property inspections",
    email: true,
    push: true,
    sms: false
  },
  {
    category: "Tenant Messages",
    description: "New messages from tenants and communication updates",
    email: false,
    push: true,
    sms: false
  }
];

export default function Notifications() {
  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "maintenance": return <Wrench className="h-4 w-4" />;
      case "lease": return <Calendar className="h-4 w-4" />;
      case "payment": return <CheckCircle className="h-4 w-4" />;
      case "inspection": return <Info className="h-4 w-4" />;
      case "message": return <MessageSquare className="h-4 w-4" />;
      default: return <Bell className="h-4 w-4" />;
    }
  };

  const getNotificationColor = (type: string) => {
    switch (type) {
      case "maintenance": return "bg-yellow-500";
      case "lease": return "bg-red-500";
      case "payment": return "bg-green-500";
      case "inspection": return "bg-blue-500";
      case "message": return "bg-purple-500";
      default: return "bg-gray-500";
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high": return "destructive";
      case "medium": return "default";
      case "low": return "secondary";
      default: return "outline";
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Notifications</h1>
            <p className="text-muted-foreground">Manage your alerts and preferences</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <CheckCircle className="mr-2 h-4 w-4" />
              Mark All Read
            </Button>
            <Button variant="outline">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </div>
        </div>

        {/* Notification Stats */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Unread</CardTitle>
              <Bell className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs text-muted-foreground">notifications</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">High Priority</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs text-muted-foreground">urgent items</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">This Week</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs text-muted-foreground">notifications</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Response Rate</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">--</div>
              <p className="text-xs text-muted-foreground">avg response</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Notifications List */}
          <div className="lg:col-span-2 space-y-4">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Recent Notifications</CardTitle>
                  <Select>
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Filter" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="unread">Unread</SelectItem>
                      <SelectItem value="maintenance">Maintenance</SelectItem>
                      <SelectItem value="lease">Lease</SelectItem>
                      <SelectItem value="payment">Payment</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {notifications.length === 0 ? (
                  <div className="text-center py-12">
                    <Bell className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium text-foreground mb-2">No Notifications</h3>
                    <p className="text-muted-foreground">All notifications will appear here</p>
                  </div>
                ) : (
                  notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`flex items-start space-x-4 p-4 rounded-lg border transition-colors ${
                        !notification.isRead ? "bg-muted/30 border-primary/20" : "hover:bg-muted/50"
                      }`}
                    >
                      <div className={`p-2 rounded-full text-white ${getNotificationColor(notification.type)}`}>
                        {getNotificationIcon(notification.type)}
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <h4 className={`text-sm font-medium ${!notification.isRead ? "font-semibold" : ""}`}>
                            {notification.title}
                          </h4>
                          <div className="flex items-center space-x-2">
                            <Badge variant={getPriorityBadge(notification.priority) as "default"} className="text-xs">
                              {notification.priority}
                            </Badge>
                            {!notification.isRead && (
                              <div className="w-2 h-2 bg-primary rounded-full" />
                            )}
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">{notification.message}</p>
                        <p className="text-xs text-muted-foreground">{notification.timestamp}</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))
                )}
              </CardContent>
            </Card>
          </div>

          {/* Notification Settings */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Configure how you receive notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {notificationSettings.map((setting, index) => (
                  <div key={index} className="space-y-3">
                    <div>
                      <h4 className="text-sm font-medium">{setting.category}</h4>
                      <p className="text-xs text-muted-foreground">{setting.description}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Email</span>
                        <Switch checked={setting.email} />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Push</span>
                        <Switch checked={setting.push} />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">SMS</span>
                        <Switch checked={setting.sms} />
                      </div>
                    </div>
                    {index < notificationSettings.length - 1 && <hr className="my-4" />}
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Mark All as Read
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Clear All Notifications
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Settings className="mr-2 h-4 w-4" />
                  Notification Settings
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}