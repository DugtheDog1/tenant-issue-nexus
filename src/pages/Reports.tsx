import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, Download, Calendar, TrendingUp, PieChart, BarChart3, Users, DollarSign } from "lucide-react";

const reports = [
  {
    id: 1,
    name: "Monthly Financial Report",
    description: "Comprehensive financial overview including revenue, expenses, and profit margins",
    type: "Financial",
    lastGenerated: "2024-01-15",
    status: "Ready",
    size: "2.3 MB"
  },
  {
    id: 2,
    name: "Occupancy Analysis",
    description: "Detailed analysis of property occupancy rates and trends",
    type: "Occupancy",
    lastGenerated: "2024-01-10",
    status: "Ready",
    size: "1.8 MB"
  },
  {
    id: 3,
    name: "Maintenance Summary",
    description: "Summary of all maintenance requests, costs, and completion rates",
    type: "Maintenance",
    lastGenerated: "2024-01-08",
    status: "Generating",
    size: "-"
  },
  {
    id: 4,
    name: "Tenant Demographics",
    description: "Analysis of tenant profiles, lease terms, and retention rates",
    type: "Tenant",
    lastGenerated: "2024-01-05",
    status: "Ready",
    size: "1.2 MB"
  }
];

const reportTemplates = [
  {
    icon: DollarSign,
    name: "Financial Performance",
    description: "Revenue, expenses, and profit analysis",
    category: "Financial"
  },
  {
    icon: Users,
    name: "Tenant Reports",
    description: "Tenant demographics and lease information",
    category: "Tenant"
  },
  {
    icon: BarChart3,
    name: "Occupancy Reports",
    description: "Vacancy rates and occupancy trends",
    category: "Occupancy"
  },
  {
    icon: PieChart,
    name: "Maintenance Reports",
    description: "Maintenance costs and completion metrics",
    category: "Maintenance"
  }
];

export default function Reports() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Reports</h1>
            <p className="text-muted-foreground">Generate and manage property reports</p>
          </div>
          <Button>
            <FileText className="mr-2 h-4 w-4" />
            Generate Report
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Reports</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">47</div>
              <p className="text-xs text-muted-foreground">+3 this month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">This Month</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">reports generated</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Automated</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">scheduled reports</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Storage Used</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
              <p className="text-xs text-muted-foreground">MB of 1GB</p>
            </CardContent>
          </Card>
        </div>

        {/* Report Templates */}
        <Card>
          <CardHeader>
            <CardTitle>Report Templates</CardTitle>
            <CardDescription>Quick access to common report types</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {reportTemplates.map((template, index) => (
                <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
                  <CardContent className="p-4 text-center">
                    <template.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <h3 className="font-medium mb-1">{template.name}</h3>
                    <p className="text-xs text-muted-foreground mb-3">{template.description}</p>
                    <Button size="sm" variant="outline" className="w-full">
                      Generate
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Reports */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Recent Reports</CardTitle>
                <CardDescription>Your latest generated reports</CardDescription>
              </div>
              <div className="flex space-x-2">
                <Select>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="financial">Financial</SelectItem>
                    <SelectItem value="occupancy">Occupancy</SelectItem>
                    <SelectItem value="maintenance">Maintenance</SelectItem>
                    <SelectItem value="tenant">Tenant</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Time period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="week">This Week</SelectItem>
                    <SelectItem value="month">This Month</SelectItem>
                    <SelectItem value="quarter">This Quarter</SelectItem>
                    <SelectItem value="year">This Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {reports.map((report) => (
                <div key={report.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <FileText className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-medium">{report.name}</h3>
                      <p className="text-sm text-muted-foreground">{report.description}</p>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="text-xs text-muted-foreground">
                          Last generated: {report.lastGenerated}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          Size: {report.size}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant={report.status === "Ready" ? "default" : "secondary"}>
                      {report.status}
                    </Badge>
                    <Badge variant="outline">{report.type}</Badge>
                    {report.status === "Ready" && (
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Scheduled Reports */}
        <Card>
          <CardHeader>
            <CardTitle>Scheduled Reports</CardTitle>
            <CardDescription>Automatically generated reports</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Monthly Financial Summary</p>
                  <p className="text-sm text-muted-foreground">Generated on the 1st of each month</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">Monthly</Badge>
                  <Button variant="outline" size="sm">Edit</Button>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Weekly Occupancy Report</p>
                  <p className="text-sm text-muted-foreground">Generated every Monday</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">Weekly</Badge>
                  <Button variant="outline" size="sm">Edit</Button>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Quarterly Analytics Review</p>
                  <p className="text-sm text-muted-foreground">Generated at the end of each quarter</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">Quarterly</Badge>
                  <Button variant="outline" size="sm">Edit</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}