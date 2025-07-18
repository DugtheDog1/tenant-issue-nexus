import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, MessageSquare, Upload, Zap, Mail, Phone } from "lucide-react"

const quickActions = [
  {
    title: "New Ticket",
    description: "Create manual ticket",
    icon: Plus,
    variant: "default" as const,
    action: () => console.log("New ticket")
  },
  {
    title: "Bulk Import",
    description: "Upload email/SMS data",
    icon: Upload,
    variant: "outline" as const,
    action: () => console.log("Bulk import")
  },
  {
    title: "AI Analysis",
    description: "Process pending requests",
    icon: Zap,
    variant: "outline" as const,
    action: () => console.log("AI analysis")
  },
  {
    title: "Send Update",
    description: "Notify tenants",
    icon: Mail,
    variant: "outline" as const,
    action: () => console.log("Send update")
  },
  {
    title: "Emergency Line",
    description: "Direct contractor call",
    icon: Phone,
    variant: "destructive" as const,
    action: () => console.log("Emergency call")
  },
  {
    title: "Broadcast",
    description: "Property-wide message",
    icon: MessageSquare,
    variant: "outline" as const,
    action: () => console.log("Broadcast")
  }
]

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {quickActions.map((action, index) => (
            <Button
              key={index}
              variant={action.variant}
              className="h-auto p-4 flex flex-col items-start gap-2 text-left"
              onClick={action.action}
            >
              <div className="flex items-center gap-2 w-full">
                <action.icon className="h-4 w-4 shrink-0" />
                <span className="font-medium text-sm">{action.title}</span>
              </div>
              <span className="text-xs opacity-70">{action.description}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}