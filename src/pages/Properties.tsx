import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Building2, Plus, Search, MapPin, Users, DollarSign } from "lucide-react";

const properties = [
  {
    id: 1,
    name: "Sunset Apartments",
    address: "123 Main St, Springfield",
    units: 24,
    occupied: 22,
    rentRange: "$1,200 - $2,500",
    type: "Residential",
    status: "Active"
  },
  {
    id: 2,
    name: "Downtown Office Complex",
    address: "456 Business Ave, Metro City",
    units: 8,
    occupied: 6,
    rentRange: "$3,000 - $8,000",
    type: "Commercial",
    status: "Active"
  },
  {
    id: 3,
    name: "Riverside Condos",
    address: "789 River Rd, Riverside",
    units: 16,
    occupied: 14,
    rentRange: "$1,800 - $3,200",
    type: "Residential",
    status: "Maintenance"
  }
];

export default function Properties() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Properties</h1>
            <p className="text-muted-foreground">Manage your property portfolio</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Property
          </Button>
        </div>

        <div className="flex gap-4 items-center">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search properties..." className="pl-9" />
          </div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="residential">Residential</SelectItem>
              <SelectItem value="commercial">Commercial</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="maintenance">Maintenance</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <Card key={property.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <Building2 className="h-8 w-8 text-primary" />
                  <Badge variant={property.status === "Active" ? "default" : "secondary"}>
                    {property.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{property.name}</CardTitle>
                <CardDescription className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {property.address}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">
                      {property.occupied}/{property.units} units
                    </span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">{property.rentRange}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <Badge variant="outline">{property.type}</Badge>
                  <div className="text-sm text-muted-foreground">
                    {Math.round((property.occupied / property.units) * 100)}% occupied
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}